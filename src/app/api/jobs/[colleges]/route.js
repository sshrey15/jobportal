import { NextResponse } from "next/server";
import { getByCollege } from "../../../data/jobData";
import jwt from "jsonwebtoken";

export const GET = async (req) => {
  try {
    // Check if the JWT token exists
    const tokenExists = req.cookies._parsed.has("jwt");
    if (!tokenExists) {
      return NextResponse.json(
        { message: "error", error: "Token is not provided" },
        {
          status: 401,
        }
      );
    }

    // Get the JWT token from the cookies
    const token = req.cookies._parsed.get("jwt").value;
    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET);
    // Decode the JWT token
    const decodedToken = jwt.decode(token);
    // Get the collegeId from the decoded token
    const college = decodedToken ? decodedToken.collegeId : null;
    if (!college) {
      throw new Error("No college provided in the JWT token");
    }

    const jobs = getByCollege(college);

    if (!jobs || jobs.length === 0) {
      throw new Error(`No jobs found for college ${college}`);
    }

    return NextResponse.json(
      { message: "success", jobs: jobs },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    if (err.name === 'TokenExpiredError') {
      return NextResponse.json(
        { message: "error", error: "Token expired" },
        {
          status: 401,
        }
      );
    } else if (err.name === 'JsonWebTokenError') {
      return NextResponse.json(
        { message: "error", error: "Token is not provided or invalid" },
        {
          status: 401,
        }
      );
    } else {
      return NextResponse.json(
        { message: "error", error: err.message },
        {
          status: 500,
        }
      );
    }
  }
};
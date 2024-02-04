import { NextResponse } from "next/server";
// import { getApplicants, addApplicant, checkCollegeExists } from "../../data/applicantData";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { verifyToken } from "@/utils/token";


export const GET = async (req,res) => {
  try {
    const decodedToken = verifyToken(req);
      const { id, name, email, collegeId } = decodedToken ? decodedToken : {};
      if (!id || !name || !email || !collegeId) {
        throw new Error("No college provided in the JWT token");
      }
      
      const applicant = { id, name, email, collegeId };
      if (!applicant || applicant.length === 0) {
        throw new Error(`No jobs found for college ${id}`);
      }

      return NextResponse.json({message: "success", applicant: applicant}, {status: 200});
    }catch (err) {
      console.error(err);
      if (err.name === 'TokenExpiredError') {
        return NextResponse.json(
          { message: "error maa ki chut", error: "Token expired" },
          {
            status: 401,
          }
        );
      } else if (err.name === 'JsonWebTokenError') {
        return NextResponse.json(
          { message: "error mummy", error: "Token is not provided or invalid" },
          {
            status: 401,
          }
        );
      } else {
        return NextResponse.json(
          { message: "error mummy", error: err.message },
          {
            status: 500,
          }
        );
      }
    }

  }

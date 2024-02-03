import { NextResponse } from "next/server";
import { getApplicants, addApplicant, checkCollegeExists } from "../../data/applicantData";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";



export const GET = async (req,res) => {
  try {
    const tokenExists = req.cookies._parsed.has("jwt");
    if (!tokenExists) {
      return NextResponse.json(
        { message: "error", error: "Token is not provided" },
        {
          status: 401,
        });
      }

      const token = req.cookies._parsed.get("jwt").value;
      jwt.verify(token, process.env.JWT_SECRET);
      const decodedToken = jwt.decode(token);
      const { id, name, email, collegeId } = decodedToken ? decodedToken : {};
      if (!id || !name || !email || !collegeId) {
        throw new Error("No college provided in the JWT token");
      }
      
      const applicant = getApplicants()
      if (!applicant || applicant.length === 0) {
        throw new Error(`No jobs found for college ${id}`);
      }

      return NextResponse.json({message: "success", applicant: applicant}, {status: 200});
    }catch (err) {
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

  }


export const POST = async (req, res) => {
    try {
     
      const { name, email, collegeId } = await req.json();
     

      const id = uuidv4(); // Generate a new unique ID
      const applicant = { id, name, email, collegeId, date: new Date() };
      addApplicant(applicant);
  
      // Generate JWT token
      const token = jwt.sign({ id,name,email,collegeId }, process.env.JWT_SECRET, { expiresIn: '24h' });
      // Set the token as an HTTP-only cookie in the response
     
      // Send a JSON response to the client
      const response =  NextResponse.json({ message: "success hai bsdk", applicant });
      response.cookies.set({
            name: "jwt",
            value: token,
            maxAge: 60*60,
            httpOnly: true,
            path: "/",
      })
      return response;
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "error", error: err.message });
    }
  };

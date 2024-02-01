import { NextResponse } from "next/server";
import { getApplicants, addApplicant, checkCollegeExists } from "../../data/applicantData";
import { v4 as uuidv4 } from "uuid";

import jwt from "jsonwebtoken";

export const GET = async (req,res) => {
  try {
    const applicants = getApplicants();
    return NextResponse.json({ message: "success hai bsdk", applicants });
  } catch (err) {
    return NextResponse.json({ message: "error", err }).status(500);
  }
};

//cookie is getting set here and when the applicant post request is made the cookie is set in the browser 
//the cookie contains the jwt token in which the collegeId is stored
//the collegeId is the main thing which is used to verify the applicant
//basically the collegeId is the unique for each college and is used to verify the applicant

export const POST = async (req, res) => {
    try {
     
      const { name, email, collegeId } = await req.json();
     

      const id = uuidv4(); // Generate a new unique ID
      const applicant = { id, name, email, collegeId, date: new Date() };
      addApplicant(applicant);
  
      // Generate JWT token
      const token = jwt.sign({ collegeId }, process.env.JWT_SECRET, { expiresIn: '24h' });
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

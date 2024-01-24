import { NextRequest, NextResponse } from "next/server";
import { getApplicants, addApplicant } from "../../data/applicantData";

export const GET = async (req) => {
  try {
    const applicants = getApplicants();
    return NextResponse.json({ message: "success", applicants });
  } catch (err) {
    return NextResponse.json({ message: "error", err }).status(500);
  }
};

export const POST = async (req) => {
  const { id, name, email, collegeId } = await req.json();
  try {
    const applicant = { id, name, email, collegeId, date: new Date() };
    addApplicant(applicant);
    return NextResponse.json({ message: "success", applicant }).status(201);
  } catch {
    return NextResponse.json({ message: "error" }).status(500);
  }
};
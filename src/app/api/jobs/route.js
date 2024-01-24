import { NextRequest, NextResponse } from "next/server";
import { getJobs, addJob } from "../../data/jobData";

export const GET = async (req) => {
  try {
    const jobs = getJobs();
    return NextResponse.json({ message: "success", jobs });
  } catch (err) {
    return NextResponse.json({ message: "error hai bsdk", err }).status(500);
  }
};

export const POST = async (req) => {
  const { id, title, description, requirements, location, type, salary, postedAt, colleges, applicants, employerId, companyId } = await req.json();
  try {
    const job = { id, title, description, requirements, location, type, salary, postedAt, colleges, applicants, employerId, companyId, date: new Date() };
    addJob(job);
    return NextResponse.json({ message: "success", job }).status(201);
  } catch {
    return NextResponse.json({ message: "error" }).status(500);
  }
};
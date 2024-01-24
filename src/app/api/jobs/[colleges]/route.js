import { NextResponse } from "next/server";
import { getByCollege } from '../../../data/jobData'; // replace 'yourFilePath' with the actual path to the file where getByCollege is defined

export const GET = async (req) => {
  try {
    const college = req.url.split("jobs/")[1];
    if (!college) {
      throw new Error("No college provided in the URL");
    }

    const jobs = getByCollege(college);

    if (!jobs || jobs.length === 0) {
      throw new Error(`No jobs found for college ${college}`);
    }

    return NextResponse.json({ message: "success", jobs: jobs }, {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "error", error: err.message }, {
      status: 500,
    });
  }
};
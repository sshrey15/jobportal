import { NextResponse } from "next/server";
// import jobs from "../../../data/jobData";

import { getById } from '../../app/data/jobData'; // replace 'yourFilePath' with the actual path to the file where getByCollege is defined

export const GET = async (req) => {
    try {
      const id = req.url.split("jobs/")[1];
      if (!id) {
        throw new Error("No job ID provided in the URL");
      }
  
      const job = getById(id);
  
      if (!job) {
        throw new Error(`No job found with ID ${id}`);
      }
  
      return NextResponse.json({ message: "success", job: job }, {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "error", error: err.message }, {
        status: 500,
      });
    }
  };




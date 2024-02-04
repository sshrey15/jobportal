import {NextResponse} from "next/server";
import { getById, updateApplicant } from "@/app/data/applicantData";


export const GET = async (req,{params}) => {
    try{
        const id = params.id;
        console.log(id);
        const applicant = getById(id);
        if(!applicant){
            throw new Error(`No applicant found with id ${id}`);
        }
        return NextResponse.json({message: "success", applicant: applicant}, {status: 200});


    }catch{
        return NextResponse.json({message: "error", error: err.message}, {status: 500});
        
    }
}


export const PUT = async (req, { params, body }) => {
    try {
      const id = params.id;
      const applicant = getById(id);
      if (!applicant) {
        throw new Error(`No applicant found with id ${id}`);
      }
      const updatedApplicant = { ...applicant, ...body };
      updateApplicant(id, updatedApplicant); // Update the applicant in your data source
      return NextResponse.json({ message: "success", applicant: updatedApplicant }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "error", error: err.message }, { status: 500 });
    }
  };
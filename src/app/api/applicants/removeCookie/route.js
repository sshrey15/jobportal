import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const GET = async (req,res) => {
    try {
        // const { name, email, collegeId } = await req.json();
        
        const response = NextResponse.json({ message: "success hai bsdk", applicant: null });
        response.cookies.set({
            name: "jwt",
            value: "",
            maxAge: -1,
            httpOnly: true,
            path: "/",
        })
        
        return response;
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.error({ status: 500, message: 'Internal Server Error' });
    }
}
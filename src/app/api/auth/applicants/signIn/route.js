import {serialize} from "cookie"
import {sign} from "jsonwebtoken"
import { NextResponse } from "next/server"

const MAX_AGE = 60 * 60 * 24 * 30// 8 hours

export async function POST (req){
    const body = await req.json()

    const {email,password} = body

    if(email !== "admin" || password !== "admin"){
       return NextResponse.json(
        {
            message:"Invalid credentials"
        },
        {
            status:401
        }
       )
    }

    const secret = process.env.JWT_SECRET || ""
    const token = sign(
        {
            email
        },
        secret,{
            expiresIn: MAX_AGE
        }
    )

    const seralized = serialize ("OurSiteJWT", token ,{
        httpOnly:true,
        secure : process.env.NODE_ENV === "production",
        sameSite:"strict",
        path:"/",
        maxAge:MAX_AGE
    });

    const response= {
        message:"success"
    }

    return new Response(JSON.stringify(response),{
      status : 200,
      headers:{
        'Set-Cookie':seralized,
      }
        
    })
}
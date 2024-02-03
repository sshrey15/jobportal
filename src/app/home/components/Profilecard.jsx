"use client"
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"

//BEST PRACTICE TO FETCHING DATA FROM SERVER

const Profilecard = () => {
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await fetch(`/api/applicants/latestApplicant`)
      const data = await res.json()
      setApplicant(data.applicant);
    }
    fetchApplicants()
  }, [])

  if (!applicant) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src="/shrey.jpeg"
            alt="Shrey"
            width={60}
            height={60}
            className="rounded-full flex-none"
          />
          <CardTitle>{applicant.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>College: {applicant.collegeId}</CardDescription>
        <CardDescription>email: {applicant.email}</CardDescription>
        <CardDescription>Skills: {applicant.skills}</CardDescription>
        <CardDescription>Location: {applicant.location}</CardDescription>
      </CardContent>
      <CardFooter>
       
      </CardFooter>
    </Card>
  )
}

export default Profilecard
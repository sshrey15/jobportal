import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Profilecard = ({ profile }) => {
  return (
    <Card>

      <CardHeader >
        <div  className='flex items-center gap-4' >
          <Image src="/shrey.jpeg" alt="Shrey" width={60} height={60} className='rounded-full flex-none ' />

          <CardTitle>{profile.name}</CardTitle>

        </div>

      </CardHeader>
      <CardContent>
        <CardDescription>College: {profile.college}</CardDescription>
        <CardDescription>Year: {profile.year}</CardDescription>
        <CardDescription>Skills: {profile.skills}</CardDescription>
        <CardDescription>Location: {profile.location}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default Profilecard
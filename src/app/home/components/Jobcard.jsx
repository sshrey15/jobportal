"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";

const Jobcard = ({ job }) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const [isBookmarked, setIsBookmarked] = React.useState(false)
    const toggleDescription = () => {
        setIsExpanded(!isExpanded)
    }
    const truncatedDescription = job.description.substring(0, 95) + "..."
    const changeicon = () => {
        setIsBookmarked(!isBookmarked)

    }
    return (
        <Card className="">
            <CardHeader  >
                <div className='flex gap-3 align-middle   '>
                <Image src="/shrey.jpeg" alt="Shrey"  width={50} height={50} className='rounded-full flex-none'/>
                <div>
                <CardTitle className="text-base">{job.title}</CardTitle>
                <CardDescription>{job.companyName}</CardDescription>
                


                </div>
                <div className='ml-auto' onClick={changeicon}>
                    {
                        isBookmarked ? <IoMdBookmark size={25} /> : <CiBookmark  size={25} />
                    }
                
                </div>
                
               
                </div>
            
            </CardHeader>
            <hr/>
            <CardContent className="mt-2">
                <Button variant="outline" className="mr-2 rounded-md">{job.type}</Button>
                <Button variant="outline" className="mr-2 rounded-md">{job.location}</Button>
                
                
                <CardDescription className="mt-3 cursor-pointer hover:text-blue-500">
                    {isExpanded ? job.description : truncatedDescription}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <p>Posted on: {job.postedOn}</p>
            </CardFooter>
        </Card>
    )
}

export default Jobcard
"use client"
import React, { useState, useEffect } from "react";
import Filtercard from "./components/Filtercard";
import Jobcard from "./components/Jobcard";
import Profilecard from "./components/Profilecard";
import dynamic from 'next/dynamic'
import { useRouter } from "next/navigation";
// import jwt from "jsonwebtoken";
// import Cookies from 'js-cookie';

import Loading from "./Loading";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

 

  const collegeId = "college8"

  useEffect(() => {
    const fetchData = async () => {
      if (!collegeId) {
        router.push('/signIn/applicants');
      } else {
        try {
          const res = await fetch(`/api/jobs/${collegeId}`);
          if (res.status === 401) { // If the status is 401, the token is expired
            router.push('/signIn/applicants');
          } else if (!res.ok) { // res.ok returns false if the response status is not 200-299
            throw new Error('Network response was not ok');
          } else {
            const data = await res.json();
            if (data) {
              setJobs(data.jobs);
              setLoading(false);
            }
          }
        } catch (error) {
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          );
        }
      }
    };
  
    fetchData();
  }, [collegeId, router]);

  async function applicantData(){
    if(collegeId){
      router.push('/signIn/applicants')
    }else{
      const response = await fetch(`/api/jobs/${collegeId}`)
      const data = await response.json();
      setJobs(data.jobs);
      setLoading(false);
      
    }
  }

  if(loading) return <Loading />

  const Jobcard = dynamic(() => import('./components/Jobcard'), {
    loading: () => <Loading />,
    ssr: false
  });

 



  const profiles = [
    {
      name: "Shrey Kumar Singh",
      college: "College 1",
      degree: "Degree 1",
      location: "Location 1",
      skills: "Skills 1",
      year: "Year 1",
    },
  ];



  return (
    

    <>
    {/* <Button variant="outline" onClick={LogOut}>LogOut</Button> */}
    {/* <button onClick={removeCookie}>LogOut</button> */}
      <section class="grid grid-cols-3 gap-4">
        <div class="col-span-12 bg-blue-500">
          <h1>Lets find a dream job</h1>
        </div>
      </section>

      <section class="grid grid-cols-4">
        <div class="col-start-2 col-span-2 ">
          <Pagination>
            <PaginationPrevious />
            <PaginationItem>1</PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>10</PaginationItem>
            <PaginationNext />
          </Pagination>
        </div>
      </section>

      <div class="grid grid-cols-4 gap-2 ">
        <div class="   p-4">
          <Filtercard />
        </div>

        <div class="grid grid-cols-2 col-span-2  ">
          {jobs.map(job => (
            <div key={job.id} className="col-span-1 p-2">
            
                <Jobcard job={job} />
            
            </div>
          ))}
        </div>

        <div class=" col-span-1  p-4">
          {profiles.map((profile, index) => (
            <div key={index} className="col-span-1 p-2">
              <Profilecard profile={profile} />
            </div>
          ))}
          {/* <Profilecard profile={profiles} /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
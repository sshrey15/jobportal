"use client"
import React, { useState, useEffect } from "react";
import Filtercard from "./components/Filtercard";
import Jobcard from "./components/Jobcard";
import Profilecard from "./components/Profilecard";
import dynamic from 'next/dynamic'

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
  
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const collegeId = localStorage.getItem("collegeId");
  // const [college, setCollege] = useState("college2");

  useEffect(() => {
    fetch(`/api/jobs/${collegeId}`)
      .then(res => {
        if (!res.ok) { // res.ok returns false if the response status is not 200-299
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch(error => {
        // setError(error.message);
        // setLoading(false);
      });
  }, [collegeId]); 

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

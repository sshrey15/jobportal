import React from "react";
import Filtercard from "./components/Filtercard";
import Jobcard from "./components/Jobcard";
import Profilecard from "./components/Profilecard";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const page = () => {
  const jobs = [
    {
      title: "Software Developer",
      companyName: "Infosys",
      type: "Full Time",
      location: "Goa",
      description: "Infosys is seeking a skilled Software Developer proficient in React to join our dynamic team. The ideal candidate should have experience in building and maintaining efficient, reusable, and reliable software solutions.",
      postedOn: "Date 1",
    },
    {
      title: "Java Backend Developer",
      companyName: "Frover",
      type: "Part Time",
      location: "Mumbai",
      description: "Frover is looking for a part-time Java Backend Developer to contribute to the development and maintenance of our backend systems. The role involves collaborating with cross-functional teams to deliver high-quality software solutions.",
      postedOn: "Date 2",
    },
    {
      title: "Video Editor",
      companyName: "Monk-E",
      type: "Full Time",
      location: "Benguluru",
      description: "Monk-E is hiring a skilled Video Editor to join our creative team. The ideal candidate should have experience in video editing software, a strong creative vision, and the ability to bring ideas to life through compelling visual storytelling.",
      postedOn: "Date 3",
    },
    {
      title: "Graphic Designer",
      companyName: "Company 4",
      type: "Full Time",
      location: "Pune",
      description: "Company 4 is seeking a talented Graphic Designer to create engaging and innovative designs for various marketing materials. The candidate should have a strong portfolio showcasing creativity, attention to detail, and proficiency in design tools.",
      postedOn: "Date 4",
    },
    {
      title: "Frontend Developer",
      companyName: "Tech Innovators",
      type: "Full Time",
      location: "Location 1",
      description: "Tech Innovators is looking for a skilled Frontend Developer with expertise in modern frontend frameworks, particularly React and Vue. The successful candidate will play a key role in designing and implementing user interfaces for our web applications.",
      postedOn: "Date 5",
    },
    {
      title: "Data Analyst",
      companyName: "Data Insights Co.",
      type: "Part Time",
      location: "Location 2",
      description: "Data Insights Co. is hiring a part-time Data Analyst to analyze and interpret complex data sets. The ideal candidate should have strong analytical skills, attention to detail, and the ability to present findings in a clear and actionable manner.",
      postedOn: "Date 6",
    },
    {
      title: "Marketing Specialist",
      companyName: "Digital Dynamics",
      type: "Full Time",
      location: "Location 3",
      description: "Digital Dynamics is seeking a creative and results-driven Marketing Specialist to develop and execute marketing strategies. The candidate should have experience in digital marketing, content creation, and campaign management.",
      postedOn: "Date 7",
    },
    // Add more jobs as needed
  ];
  

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

          
     
            {jobs.map((job, index) => (
            <div key={index} className="col-span-1 p-2">
              <Jobcard job={job} />
            </div>
          ))}


        
          

       
        </div>

        <div class=" col-span-1  p-4">
          {
            profiles.map((profile, index) => (
            <div key={index} className="col-span-1 p-2">
              <Profilecard profile={profile} />
            </div>  
            ))
       }
          {/* <Profilecard profile={profiles} /> */}
        </div>
      </div>
    </>
  );
};

export default page;

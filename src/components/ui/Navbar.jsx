"use client"
import Link from 'next/link';
import DialogDemo from "@/components/ui/loginModal"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Form } from 'react-hook-form';
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();


  const removeCookie = async () => {
    try {
      const res = await fetch('/api/applicants/removeCookie');
      if (!res.ok) { // res.ok returns false if the response status is not 200-299
        throw new Error('Network response was not ok');
      } else {
        await res.json();
        router.push('/');
        return
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }



  return (
    <nav className="sticky top-0 flex items-center justify-between flex-wrap shadow-xl bg-gray-900 p-6">   
       <div className="flex items-center flex-shrink-0 text-white mr-8">
      <Link href="/page">
        <span className="font-semibold text-3xl tracking-tight">Talent<span className='text-green-400 text-3xl'>Port</span></span>
      </Link>
    </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow ml-5">
          <Link href="/home" className="block  text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400 mr-4">
            Jobs
          </Link>
          <Link href="/home" className="block ml-4  text-lg lg:inline-block lg:mt-0 text-white hover:text-green-400 mr-4">
            GiveJobs
          </Link>


          {isLoggedIn && (
            <Link href="/home">Jobs</Link>
          )}
        </div>
        <div >
          {isLoggedIn ? (
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 " onClick={removeCookie}>Logout</button>
          ) : (
            <DialogDemo />
          )}
                <Button variant="solid" onClick={removeCookie} className="hover:bg-white ml-4 bg-green-400 rounded-full">Logout</Button>
       

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
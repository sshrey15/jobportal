"use client"
import Link from 'next/link';
import DialogDemo from "@/components/ui/loginModal"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  
  const removeCookie =async () => {
    try {
      const res = await fetch('/api/applicants/removeCookie');
      if (!res.ok) { // res.ok returns false if the response status is not 200-299
        throw new Error('Network response was not ok');
      } else {
        await res.json();
        // After successfully removing the cookie, you can redirect the user to the login page
        router.push('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/page">
        <span className="font-semibold text-xl tracking-tight">My App</span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Jobs
          </Link>
          {isLoggedIn && (
           <Link href="/home">Jobs</Link>
          )}
        </div>
        <div >
          {!isLoggedIn ? (
<DialogDemo/>          ) : (
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
          )}
                      <button className="inline-block ml-3 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={removeCookie}>Logout</button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
"use client"
import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
const Form = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    
    const onSubmit = async (data) => {
      try {
        const response = await fetch('http://localhost:3000/api/applicants', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
  
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error('Fetch error: ', error);
      } finally {
        localStorage.setItem('collegeId', data.collegeId);
        router.push('/home')
      }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-4 p-4 border border-gray-300 rounded-md">
      <label className="flex flex-col w-64">
        Name:
        <input type="text" {...register("name")} className="mt-1 p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="flex flex-col w-64">
        Email:
        <input type="email" {...register("email")} className="mt-1 p-2 border border-gray-300 rounded-md" />
      </label>
      <label className="flex flex-col w-64">
        College ID:
        <input type="text" {...register("collegeId")} className="mt-1 p-2 border border-gray-300 rounded-md" />
      </label>
      <input type="submit" className="p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700" />
    </form>
  );
}

export default Form;
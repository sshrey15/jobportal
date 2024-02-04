"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    
    
} from "@/components/ui/dialog"

import Form from "@/app/signIn/applicants/components/form"



export function DialogDemo() {
    
    
    
    return (
        <Dialog  >
            <DialogTrigger asChild>
                <Button variant="outline" className="hover:bg-green-400 rounded-full">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="flex-auto">
                    <DialogTitle className="text-xl font-bold">Login
                    <DialogDescription className="text-green-400 hover:text-gray-900">
                        Employer SignUp
                    </DialogDescription>    

                    </DialogTitle>

                    
                </DialogHeader>
                <DialogClose asChild>
                    <Form />
                </DialogClose>
                 
             
                
            
            
           
          
                   
              
            </DialogContent>
        </Dialog>
    )
}

export default DialogDemo

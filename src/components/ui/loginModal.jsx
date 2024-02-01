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
    
} from "@/components/ui/dialog"

import Form from "@/app/signIn/applicants/components/form"



export function DialogDemo() {
    
    
    
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Join and get jobs sent to you instead of searching for them
                    </DialogDescription>
                </DialogHeader>
                
            
              <Form/>
           
          
                   
              
            </DialogContent>
        </Dialog>
    )
}

export default DialogDemo

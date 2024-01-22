import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
    {
      id: "recents",
      label: "Recents",
    },
    {
      id: "home",
      label: "Home",
    },
    {
      id: "applications",
      label: "Applications",
    },
    {
      id: "desktop",
      label: "Desktop",
    },
    {
      id: "downloads",
      label: "Downloads",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];




const Filtercard = () => {
  return (
    <>
           <Card >
            <CardHeader>
              <CardTitle>FilterCard </CardTitle>
              <CardDescription >
               
                <Button variant="outline">Button</Button>
              <Button variant="outline" >Button</Button>

              
                
           

              </CardDescription>
            </CardHeader>
            <CardContent>
              <Checkbox label="Checkbox" />
              <Checkbox label="Checkbox" />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

    </>
  )
}

export default Filtercard
"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="mx-[1.5rem] my-[1.625rem] lg:mr-[2.625rem] lg:mb-[2rem]">
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
          {/* <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
          <Image 
                src="/icon-sun.svg"
                width={20}
                height={20}
                alt="Theme Mode"
                className=' hover:cursor-pointer rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            />
          <Image 
                src="/icon-moon.svg"
                width={20}
                height={20}
                alt="Theme Mode"
                className='absolute hover:cursor-pointer rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            />
          
          {/* <span className="sr-only">Toggle theme</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
 
    </div>
   ) 
}

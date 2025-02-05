'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { ModeToggle } from '@/components/ui/ThemeToggler'

interface DarkMode{
  dark: boolean
}


const BarMenu = ({dark}: DarkMode) => {

  const [isDark, setIsDark] = useState<boolean>(dark)

  const handleDark = () => {
    setIsDark( (prev) => !prev )
  }

  return (
    <nav className='bg-gray dark:bg-charcoal_blue h-[4.5rem] sm:h-[5rem] lg:h-[100vh] lg:w-[6.4375rem] flex lg:flex-col justify-between lg:rounded-r-3xl '>
      <div className='flex lg:flex-col justify-between w-full lg:h-full'>
        <div className='bg-purple h-[4.5rem] w-[4.5rem] sm:w-[5rem] sm:h-[5rem] lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-r-3xl relative'>
            
            <Image 
                src="/logo.svg"
                width={28}
                height={26}
                alt="Logo"
                className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] sm:w-[2.0625rem] sm:h-[1.9375rem] lg:w-[2.625rem] lg:h-[2.5rem]'
            />
            <div className='bg-light_purple w-[4.5rem] h-[2.25rem] sm:w-[5rem] sm:h-[2.5rem] lg:w-[6.4375rem] lg:h-[3.21875rem] lg:mt-[3.21875rem] rounded-br-3xl rounded-tl-3xl'>

            </div>
        </div>
 
          <ModeToggle />
            

      </div>
      <div className='border-l lg:border-t lg:border-l-0  border-light_gray w-[6.25rem]'>
        <Image
            src="/image-avatar.jpg"
            width={32}
            height={32}
            alt="Avatar"
            className='rounded-full my-[1.25rem] mx-[1.5rem] lg:w-[2.5rem] lg:h-[2.5rem] lg:ml-[1.875rem] lg:mr-[1.9375rem] lg:my-6'
        />
      </div>
    </nav>
  )
}

export default BarMenu

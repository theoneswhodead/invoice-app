import React from 'react'
import Image from 'next/image'

const BarMenu = () => {
  return (
    <nav className='bg-gray h-[4.5rem] sm:h-[5rem] lg:h-[100vh] lg:w-[6.4375rem] flex lg:flex-col justify-between'>
      <div className='flex lg:flex-col justify-between w-full'>
        <div className='bg-purple h-[4.5rem] w-[4.5rem] sm:w-[5rem] sm:h-[5rem] lg:w-[6.4375rem] lg:h-[6.4375rem] rounded-r-3xl relative'>
            
            <Image 
                src="/logo.svg"
                width={28}
                height={26}
                alt="Logo"
                className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] sm:w-[2.0625rem] sm:h-[1.9375rem]'
            />
            <div className='bg-light_purple w-[4.5rem] h-[2.25rem] sm:w-[5rem] sm:h-[2.5rem] mt-[2.25rem] rounded-br-3xl rounded-tl-3xl'>

            </div>
        </div>
        <div>
            <Image 
                src="/icon-moon.svg"
                width={20}
                height={20}
                alt="Theme Mode"
                className='mx-[1.5rem] my-[1.625rem] hover:cursor-pointer'
            />
        </div>
      </div>
      <div className='border-l border-light_gray w-[6.25rem]'>
        <Image
            src="/image-avatar.jpg"
            width={32}
            height={32}
            alt="Avatar"
            className='rounded-full my-[1.25rem] mx-[1.5rem]'
        />
      </div>
    </nav>
  )
}

export default BarMenu

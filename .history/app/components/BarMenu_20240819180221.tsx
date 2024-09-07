import React from 'react'
import Image from 'next/image'

const BarMenu = () => {
  return (
    <nav className='bg-gray h-[4.5rem] flex justify-between'>
      <div className='flex justify-between '>
        <div className='bg-purple h-[4.5rem] w-[4.5rem] rounded-r-3xl'>
            <div className='bg-light_purple w-[4.5rem] h-[2.25rem]'>

            </div>
            <Image 
                src="/logo.svg"
                width={28}
                height={26}
                alt="Logo"
                className='mx-[22px] my-[23px]'
            />
        </div>
        <div>
            <Image 
                src="/icon-moon.svg"
                width={20}
                height={20}
                alt="Theme Mode"
                className='rounded-full'
            />
        </div>
      </div>
      <div className='border-l border-light_gray'>
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

import React from 'react'
import Image from 'next/image'

const BarMenu = () => {
  return (
    <nav className='bg-gray h-[4.5rem] flex justify-between'>
      <div>
        <div>
            <Image 
                src="/icon-moon.svg"
                width={20}
                height={20}
                alt="Avatar"
                className='rounded-full'
            />
        </div>
        <div></div>
      </div>
      <div className='border-l border-light_gray'>
        <Image
            src="/image-avatar.jpg"
            width={32}
            height={32}
            alt="Avatar"
            className='rounded-full m-[25px]'
        />
      </div>
    </nav>
  )
}

export default BarMenu

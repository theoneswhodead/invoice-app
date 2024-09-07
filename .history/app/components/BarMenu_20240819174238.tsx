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
      <div className='border-l-1 border-light_gray'>
        <Image
            src="/image-avatar.jpg"
            width={32}
            height={32}
            alt="Avatar"
            className='rounded-full'
        />
      </div>
    </nav>
  )
}

export default BarMenu

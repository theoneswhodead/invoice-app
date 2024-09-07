import React from 'react'
import Image from 'next/image'

const BarMenu = () => {
  return (
    <nav className='bg-gray h-[4.5rem]'>
      <div>
        <div>
            <Image />
        </div>
        <div></div>
      </div>
      <div>
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

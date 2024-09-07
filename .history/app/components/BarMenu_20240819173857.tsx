import React from 'react'
import Image from 'next/image'

const BarMenu = () => {
  return (
    <nav className='bg-gray h-[4.5rem]'>
      <div>

      </div>
      <div>
        <Image
            src="/image-avatar.jpg"
            width={32}
            height={32}
            alt="Avatar"
        />
      </div>
    </nav>
  )
}

export default BarMenu

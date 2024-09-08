import React from 'react'
import Image from 'next/image'
interface InvoicesMenuProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const NewInvencies = ({setIsOpen}: InvoicesMenuProps) => {
  return (
    <div className='absolute inset-0 bg-white px-[32px] py-[24px]'>
      <button className='flex gap-[22px] items-center ' onClick={() => setIsOpen(prev => !prev)}>
      <Image 
            src="/icon-arrow-left.svg"
            width={7}
            height={12}
            alt='Go Back'
            className='sm:w-[242px] smh-[200px]'
        />
        <p className='text-[15px] font-bold'>Go Back</p>
      </button>
      <div>
        <h1>New Invoice</h1>
      </div>
    </div>
  )
}

export default NewInvencies

import React from 'react'
import Image from 'next/image'
import NewInvoicesForm from './NewInvoicesForm';
interface InvoicesMenuProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const NewInvencies = ({setIsOpen}: InvoicesMenuProps) => {
  return (
    <div className='absolute inset-0 bg-white mx-[32px] my-[24px] font-Leagie_Spartan'>
      <button className='flex gap-[22px] items-center ' onClick={() => setIsOpen(prev => !prev)}>
            <Image 
                src="/icon-arrow-left.svg"
                width={7}
                height={12}
                alt='Go Back'
            />
        <p className='text-[15px] font-bold'>Go Back</p>
      </button>
      <div>
        <h1 className='text-[32px] tracking-[-0.5px] font-bold my-[32px]'>New Invoice</h1>
        
        <NewInvoicesForm setIsOpen={setIsOpen} />
        
  
      </div>
    </div>
  )
}

export default NewInvencies

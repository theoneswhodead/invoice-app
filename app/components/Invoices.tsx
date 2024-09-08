import React from 'react'
import Image from 'next/image'
import NewInvencies from './NewInvencies';

interface InvoicesProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Invoices = ({isOpen, setIsOpen}: InvoicesProps) => {

  console.log('Inv', isOpen)
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mb-[42px] mt-[66px] sm:mb-[66px] sm:mt-[80px]'>
        <Image 
            src="/illustration-empty.svg"
            width={195}
            height={160}
            alt='There is nothing here'
            className='sm:w-[242px] smh-[200px]'
        />
      </div>

      <div className='text-center flex flex-col gap-[30px]'>
        <h2 className='text-[24px] font-bold tracking-[-0.75px]' >There is nothing here</h2>
        <p className='text-[15px] text-cool_gray tracking-[-0.1px] w-[230px]'>Create an invoice by clicking the 
        New button and get started</p>
      </div>
      {
        isOpen && (
          <NewInvencies setIsOpen={setIsOpen}/>
        )
      }
    </div>
  )
}

export default Invoices

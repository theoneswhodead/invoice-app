import React from 'react'
import Image from 'next/image'

interface InvoicesMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InvoicesMenu = ({setIsOpen}: InvoicesMenuProps) => {
  return (
    <section className=''>
      <div className='font-Leagie_Spartan flex justify-around items-center px-[25px] py-[37px] sm:px-[48px] sm:py-[62px] lg:w-full  '>
        <div>
          <h2 className='font-bold text-[24px] dark:text-white'>Invoices</h2>
          <p className='text-cool_gray text-[13px]'>No invoices</p>
        </div>

        <div className='flex gap-[18px]'>

        <div className='flex items-center gap-[11px] sm:gap-[40px]'>
          <p className='font-bold text-[15px] dark:text-white cursor-pointer'>Filter <span className='hidden lg:inline-block'>by status</span></p>
          <div className="w-[12px] h-[9px]">
            <Image 
              src="/icon-arrow-down.svg"
              width={12}
              height={9}
              alt='Down Arrow'
            />
          </div>
        </div>

        <button className='bg-purple hover:bg-light_purple w-[90px] h-[44px] sm:w-[150px] sm:h-[48px] rounded-full flex items-center cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>
          <div className='bg-white rounded-full h-[32px] w-[32px] p-[11px] m-[6px]'>
            <Image 
              src="/icon-plus.svg"
              width={10}
              height={10}
              alt='Plus Icon'
            />
            
          </div>
          <p className='text-white font-bold text-[15px] over'>New <span className='hidden sm:inline-block'>Invoice</span></p>
        </button>

        </div>

        
      </div>
    </section>
  )
}

export default InvoicesMenu

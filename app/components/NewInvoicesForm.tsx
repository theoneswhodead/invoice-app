import React from 'react'

type Props = {}

const NewInvoicesForm = (props: Props) => {
  return (
    <div>
        <form action="">
            <h2 className='text-[15px] text-purple tracking-[-0.25px] font-bold'>Bill From</h2>
            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Street Adress</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <div className='flex gap-[23px]'>
                <div>
                    <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[24px] mb-[13px]'>City</p>
                    <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>

                <div>
                    <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Post Code</p>
                    <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>
            </div>

            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Country</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <h2 className='text-[15px] text-purple tracking-[-0.25px] font-bold mt-[42px]'>Bill To</h2>

            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Client's Name</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Client's Email</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Street Address</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <div className='flex gap-[23px]'>
                <div>
                    <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[24px] mb-[13px]'>City</p>
                    <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>

                <div>
                    <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Post Code</p>
                    <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>
            </div>

            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Country</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[43px] mb-[13px]'>Invoice Date</p>
            <input type="date" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            
            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Payment Terms</p>
            <select className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'>
                <option value="volvo">Net 1 Day</option>
                <option value="volvo">Net 7 Days</option>
                <option value="volvo">Net 14 Days</option>
                <option value="volvo">Net 30 Days</option>
            </select>

            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Project Description</p>
            <input type="text" className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            
        </form>
    </div>
  )
}

export default NewInvoicesForm
'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const NewInvoicesForm = ({setIsOpen}: any ) => {



const [ItemInputs, setItemInputs] = useState([
    {
        itemName: '',
        quantity: '',
        price: ''
    }
]

)

const [numberOfItems, setNumberOfItems] = useState<number[]>([0])

const handleAddNewItem = () => {
    setNumberOfItems((prev) => [...prev, prev.length + 1]);

    setForm((prev) => ({
        ...prev,
        item: [
            ...prev.item,
            { name: '', quantity: '', price: '' }
        ]
    }));
};

const [form, setForm] = useState({
    streetAddress: '',
    city: '',
    postCode: '',
    country: '',
    clientsName: '',
    clientsEmail: '',
    clientsAddress: '',
    clientsCity: '',
    clientsPostCode: '',
    clientsCountry: '',
    invoiceDate: '',
    paymentTerms: 0,
    projectDescription: '',
    item: [
        {
            name: '',
            quantity: '',
            price: ''
        }
    ]

})

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('Item')) {
        const index = parseInt(name.match(/\d+/)![0]); 
        const field = name.replace(/\d+/, '').replace('Item', '').toLowerCase(); 

        setForm((prev) => ({
            ...prev,
            item: prev.item.map((el, i) =>
                i === index ? { ...el, [field]: value } : el
            )
        }));
    } else {
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }
};


const handleSubmit = (e:any) => {
    console.log("submit")
    console.log(form)
    e.preventDefault()
}

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <h2 className='text-[15px] text-purple tracking-[-0.25px] font-bold'>Bill From</h2>
            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Street Address</p>
            <input 
                type="text"
                name="streetAddress"
                id="streetAddress"
                value={form.streetAddress}
                onChange={(e) => handleOnChange(e)}
                className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <div className='flex gap-[23px]'>
                <div>
                    <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[24px] mb-[13px]'>City</p>
                    <input 
                        type="text"
                        name="city"
                        id="city"
                        value={form.city}
                        onChange={(e) => handleOnChange(e)}
                        className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>

                <div>
                    <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Post Code</p>
                    <input 
                        type="text"
                        name="postCode"
                        id="postCode"
                        value={form.postCode}
                        onChange={(e) => handleOnChange(e)}
                        className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>
            </div>

            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Country</p>
            <input 
                type="text"
                name="country"
                id="country"
                value={form.country} 
                onChange={(e) => handleOnChange(e)}
                className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <h2 className='text-[15px] text-purple tracking-[-0.25px] font-bold mt-[42px]'>Bill To</h2>

            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Client's Name</p>
                <input 
                type="text"
                name="clientsName"
                id="clientsName"
                value={form.clientsName}
                onChange={(e) => handleOnChange(e)}
                className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            
            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Client's Email</p>
                <input 
                    type="text"
                    name="clientsEmail"
                    id="clientsEmail"
                    value={form.clientsEmail} 
                    onChange={(e) => handleOnChange(e)}
                    className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Street Address</p>
                <input 
                    type="text"
                    name="clientsAddress"
                    id="clientsAddress"
                    value={form.clientsAddress} 
                    onChange={(e) => handleOnChange(e)}
                    className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <div className='flex gap-[23px]'>
                <div>
                    <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[24px] mb-[13px]'>City</p>
                    <input 
                        type="text"
                        name="clientsCity"
                        id="clientsCity"
                        value={form.clientsCity}
                        onChange={(e) => handleOnChange(e)}
                        className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>

                <div>
                    <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Post Code</p>
                    <input
                         type="text"
                         name="clientsPostCode"
                         id="clientsPostCode"
                         value={form.clientsPostCode}
                         onChange={(e) => handleOnChange(e)}
                         className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                </div>
            </div>

            <p className='text-wild_blue_yonder text-[15px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Country</p>
            <input 
                type="text"
                name="clientsCountry"
                id="clientsCountry"
                value={form.clientsCountry}
                onChange={(e) => handleOnChange(e)}
                className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[43px] mb-[13px]'>Invoice Date</p>
            <input 
                type="date"
                name="invoiceDate"
                id="invoiceDate" 
                value={form.invoiceDate} 
                onChange={(e) => handleOnChange(e)}
                className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            
            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.3px] mt-[24px] mb-[13px]'>Payment Terms</p>
            <select 
                name="paymentTerms" 
                id="paymentTerms"
                onChange={(e) => handleOnChange(e)}
                className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'>
                <option value="1" >Net 1 Day</option>
                <option value="7">Net 7 Days</option>
                <option value="14">Net 14 Days</option>
                <option value="30">Net 30 Days</option>
            </select>

            <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Project Description</p>
                <input 
                    type="text"
                    name="projectDescription"
                    id="projectDescription" 
                    value={form.projectDescription} 
                    onChange={(e) => handleOnChange(e)}
                    className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
            

            <h2 className='text-[18px] text-purple tracking-[-0.38px] font-bold mt-[72px] leading-[32px]'>Item List</h2>

            {
                numberOfItems.map((item, index) => (
                    <div>
                        <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Item Name</p>
                        <input 
                            type="text"
                            name={`Item${index}Name`}
                            id={`Item${index}Name`}
                            value={form.item[index]?.name || ''} 
                            onChange={(e) => handleOnChange(e)} 
                            className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>

                        <div className='flex gap-[16px]'>
                            <div>
                                <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Qty.</p>
                                <input 
                                    type="text"
                                    name={`Item${index}Quantity`}
                                    id={`Item${index}Quantity`}
                                    value={form.item[index]?.quantity || ''}
                                    onChange={(e) => handleOnChange(e)}
                                    className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                            </div>
                            <div>
                                <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Price</p>
                                <input 
                                    type="text"
                                    name={`Item${index}Price`}
                                    id={`Item${index}Price`}
                                    value={form.item[index]?.price || ''}
                                    onChange={(e) => handleOnChange(e)}
                                    className='border-lavender_blue border rounded-sm font-bold text-[15px] tracking-[-0.25px] w-full h-[48px] px-[32px]'/>
                            </div>
                            <div className='relative'>
                                <p className='text-wild_blue_yonder text-[13px] tracking-[-0.1px] mt-[24px] mb-[13px]'>Total</p>
                                <div className=' text-gray text-left font-bold text-[15px] tracking-[-0.25px] w-[100px] h-[48px] py-[18px]'>
                                {
                                    form.item[index]?.price && form.item[index]?.quantity
                                        ? (Number(form.item[index].price) * Number(form.item[index].quantity)).toFixed(2)
                                        : '0.00'
                                }

                                </div>
                                <button className='absolute top-[75px] right-[10px]' >
                                        <Image 
                                            src="/icon-delete.svg"
                                            width={15}
                                            height={18}
                                            alt='Delete Item'
                                        />
                                    <p className='text-[15px] font-bold sr-only'>Delete Item</p>
                                </button>

                            </div>

                            

                        </div>
                        
                    </div>
                    
                ) )
            }
            <button onClick={handleAddNewItem} type="button" className='bg-button w-full py-[18px] rounded-full my-[48px] text-wild_blue_yonder text-[15px] font-bold tracking-[-0.25px]'>+ Add New Item</button>

            <div className='font-Leagie_Spartan flex gap-[7px] pb-[22px]'>
                <button className='h-[48px] w-[84px] cursor-pointer bg-button text-wild_blue_yonder tex-[15px] rounded-full font-bold tracking-[-0.25px]' onClick={() => setIsOpen((prev:any) => !prev)}>Discard</button>

                <button className='h-[48px] w-[117px] cursor-pointer bg-gray text-wild_blue_yonder text-[15px] rounded-full font-bold tracking-[-0.25px]' onClick={() => setIsOpen((prev:any) => !prev)}>Save as Draft</button>

                <button type="submit" className='h-[48px] w-[112px] bg-purple text-white cursor-pointer  text-[15px] font-bold rounded-full'>Save & Send</button>
            </div>


        </form>
    </div>
  )
}

export default NewInvoicesForm
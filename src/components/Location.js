import React from 'react'
import {SlLocationPin} from 'react-icons/sl'
import {TiArrowSortedDown} from 'react-icons/ti'
const Location = () => {
  return (
    <div className='flex flex-col items-start gap-6 absolute w-[789px] h-[138px] p-6 rounded-[20px]  bg-white inset-x-0 top-0'>
        <p className='w-[102px] h-[18px] not-italic font-medium text-2xl leading-[18px] text-[#333333]'>
            Location
        </p>
        <div className='box-border flex flex-row items-center gap-2 w-[741px] h-12 border px-4 py-2.5 rounded-2xl border-solid border-[#CECECE] bg-[#f1f4f8]'>
            <SlLocationPin className=' w-5 h-5'/>
            <p className='w-[653px] h-7 not-italic font-normal text-base leading-6 flex items-center tracking-[0.3px] text-[rgba(47,48,49,0.54)] flex-none order-1 grow'>
                Select Location
            </p>
            
            <TiArrowSortedDown className='w-5 h-5 opacity-50 flex-none order-1  cursor-pointer '/>
            
        </div>
    </div>
  )
}

export default Location
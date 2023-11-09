import React from 'react'
import {CiSquarePlus} from 'react-icons/ci'
import {CiSearch} from 'react-icons/ci'
const WebLinks = () => {
  return (
    <div className='flex flex-col items-start gap-6 absolute w-[789px] h-48 p-6 rounded-[20px] bg-white inset-x-0 top-0'>


        <p className='w-[242px] h-[18px] not-italic font-medium text-2xl leading-[18px] text-[#333333] whitespace-nowrap overflow-hidden pb-5'>
                Web Links & Resources
        </p>
        <div className='flex flex-col items-start gap-4 w-[741px] h-[110px] p-0'>
            <div className='flex flex-row items-center gap-2 w-[741px] h-12 border px-4 py-2.5 rounded-2xl border-solid border-[#CECECE] bg-[#F1F4F8]  font-poppins'>
                <CiSearch className='w-5 h-5 cursor-pointer'/>
                <p className=' w-[681px] h-7 not-italic font-normal text-base leading-6 flex items-center tracking-[0.3px] text-[rgba(47,48,49,0.54)]'>
                    Add URL
                </p>
            </div>
            <div className='flex flex-row items-start gap-2.5 w-[303px] h-[46px] p-0'>
                <div className='box-border flex flex-row justify-center items-center gap-1.5 w-[121px] h-[38px] border flex-none order-1 grow-0 px-4 py-2 rounded-xl border-dashed border-[#793EF5]'>
                    <CiSquarePlus  className='w-[22px] h-[22px] opacity-50 cursor-pointer'/>
                    <p className='  not-italic font-medium text-[15px] leading-[22px] text-[#793EF5] flex-none order-none grow-0'>
                        Add URL
                    </p>
                </div>
               
            </div>
        </div>
    </div>

   
  )
}

export default WebLinks
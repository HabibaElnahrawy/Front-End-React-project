import React from 'react'
import {IoPersonOutline} from 'react-icons/io5'
import {TbMail} from 'react-icons/tb'

const MentorDtails = () => {
  return (
    <div className='flex flex-col items-start gap-6 isolate absolute w-[789px] h-[314px] p-6 rounded-[20px] bg-white inset-x-0 top-0'>
        <p className=' w-[170px] h-[18px] not-italic font-medium text-2xl leading-[18px] text-[#333333] flex-none order-none grow-0 z-0'>
            Mentor Details
        </p>
        <div className='w-20 h-20 flex-none order-1 grow-0 z-[1] rounded-[20px] bg-[#e2e6eb]'></div>
        <TbMail className='flex flex-row items-start gap-2.5 absolute w-7 h-7 flex-none order-4 grow-0 z-[4] p-1.5 rounded-[10px] left-[82px] top-[125px] bg-[#2153FF]'/>
        <div className='flex flex-row items-start gap-6 w-[741px] h-12 flex-none order-2 self-stretch grow-0 z-[2] p-0'>
            <div className='box-border flex flex-row items-start gap-2.5 w-[358.5px] h-12 border flex-none order-none grow pl-4 pr-3 py-3 rounded-xl border-solid border-[#CECECE] bg-white'>
                    <IoPersonOutline className='w-6 h-6 flex-none order-none grow-0'/>                    
                    <div className='flex flex-col justify-between items-start gap-[11px] w-[296.5px] h-6 flex-none order-1 self-stretch grow p-0'>
                       <p className=' w-11 h-6 not-italic font-medium text-base leading-6 flex items-center tracking-[0.3px] text-[#1E1E1E] opacity-50 flex-none order-none grow-0'>
                            Name
                        </p> 
                    </div>
            </div>
            <div className='box-border flex flex-row items-start gap-2.5 w-[358.5px] h-12 border flex-none order-1 grow pl-4 pr-3 py-3 rounded-xl border-solid border-[#CECECE] bg-white'>
                    <TbMail className='w-6 h-6'/>
                    <p className='w-[110px] h-6 not-italic font-medium text-base leading-6 flex items-center tracking-[0.3px] text-[#1E1E1E] opacity-50 flex-none order-none grow-0'>Email address</p>
            </div>
        </div>
        <div className='box-border flex flex-row items-start gap-2.5 w-[741px] h-12 border flex-none order-3 self-stretch grow-0 pl-4 pr-3 py-3 rounded-xl border-solid border-[#CECECE] bg-white'>
            <p className='w-[185px] h-6 not-italic font-medium text-base leading-6 flex items-center tracking-[0.3px] text-[#1E1E1E] opacity-50 flex-none order-none grow-0'>Linkedln URL (optional)</p>
        </div>
    </div>
  )
}

export default MentorDtails
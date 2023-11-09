import React from 'react'
import {MdList ,MdDoubleArrow} from 'react-icons/md'
const hello = () => {
  return (
    <div className='flex flex-row items-start absolute w-[1466px] h-20 p-0 left-[23px] top-5 bg-white rounded-2xl '>
    <div className='flex flex-row items-center w-[300px] h-20 flex-none order-none self-stretch  p-6 rounded-[30px_0px_0px_30px]'>
        <div className='flex flex-row items-center gap-2 w-20 h-7 flex-none order-none  p-0'>
            <MdDoubleArrow className=' w-7 h-7 flex-none order-none '/>
            <p className='w-11 h-6 not-italic font-normal text-lg leading-6 flex items-center tracking-[0.3px] text-[#1E1E1E] flex-none order-1'> Back
            </p>
        </div>
    </div>
    <div className='flex flex-row justify-center items-center w-[866px] h-20 flex-none order-1 self-stretch grow p-6 bg-white'>
        <p className='w-[268px] h-6 not-italic font-semibold text-[28px] leading-6 flex items-center tracking-[0.3px] text-[#1E1E1E]'>Add New Internship
        </p>
    </div>
    <div className='flex flex-row justify-end items-center w-[300px] h-20 flex-none order-2 self-stretch  p-6 rounded-[0px_30px_30px_0px]'>
        <div className='flex  flex-row justify-end items-center gap-2 w-[219px] h-11 flex-none order-none px-4 py-3 rounded-xl bg-slate-200'>
            <p className='w-[159px] h-5 not-italic font-normal text-sm leading-5 text-center tracking-[0.4px] text-[#828282] flex-none order-none '>Continue to Next Step</p>
            <MdDoubleArrow className=' w-5 h-5 '/>
        </div>
    </div>
</div>
  )
}

export default hello
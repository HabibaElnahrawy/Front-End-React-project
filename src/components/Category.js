import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {MdOutlineClose} from 'react-icons/md'
const Category = () => {
  return (
    <div>
        <div className=' flex flex-col items-start gap-6 absolute w-[789px] h-[200px] p-6 rounded-[20px] inset-x-0 top-0 bg-white'>
            <p className='w-[108px] h-[18px] not-italic text-2xl leading-[18px] font-semibold'>
                Category
            </p>
            <div className='flex flex-col items-start gap-4 w-[741px] h-[110px] p-0'>
                <div className='flex flex-row items-center gap-2 w-[741px] h-12 border px-4 py-2.5 rounded-2xl border-solid border-[#CECECE] bg-[#F1F4F8]  font-poppins'>
                    <p className=' w-[681px] h-7 not-italic font-normal text-base leading-6 flex items-center tracking-[0.3px] text-[rgba(47,48,49,0.54)]'>
                        Search Category
                    </p>
                    <CiSearch className='w-5 h-5'/>
                </div>
                <div className='flex flex-row items-start gap-2.5 w-[303px] h-[46px] p-0'>
                    <div className='box-border flex flex-row justify-center items-center gap-1.5 w-[141px] h-[46px] border pl-4 pr-3 py-3 rounded-[32px] border-solid border-[#793EF5] bg-[#665fef] bg-opacity-[0.2]'>
                        <p className='w-[85px] h-[22px] not-italic font-medium text-[15px] leading-[22px] text-[#793EF5]'>
                            Technology
                        </p>
                        <MdOutlineClose className='w-[22px] h-[22px] opacity-50'/>
                    </div>
                    <div className='box-border flex flex-row justify-center items-center gap-1.5 w-[141px] h-[46px] border pl-4 pr-3 py-3 rounded-[32px] border-solid border-[#793EF5] bg-[#665fef] bg-opacity-[0.2]'>
                        <p className='w-[85px] h-[22px] not-italic font-medium text-[15px] leading-[22px] text-[#793EF5]'>
                            Development
                        </p>
                        <MdOutlineClose className='w-[22px] h-[22px] opacity-50'/>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Category
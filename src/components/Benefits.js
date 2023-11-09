import React from 'react'

const Benefits = () => {
  return (
    <div className='flex flex-col items-start gap-6 absolute w-[789px] h-[287px] p-6 rounded-[20px] bg-white inset-x-0 top-0'>
        <p className='w-[98px] h-[18px] not-italic font-medium text-2xl leading-[18px] text-[#333333] flex-none order-none grow-0'>
            Benefits
        </p>
        <div className='box-border flex flex-row items-start gap-2 w-[741px] h-[197px] border flex-none order-1 self-stretch grow-0 px-4 py-2.5 rounded-2xl border-solid border-[#CECECE] bg-[#f1f4f8]'>
            <p className='w-[709px] h-7 not-italic font-normal text-base leading-6 flex items-center tracking-[0.3px] text-[rgba(47,48,49,0.54)] flex-none order-none grow'>Description</p>
        </div>
    </div>
  )
}

export default Benefits
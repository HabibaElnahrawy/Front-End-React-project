import React , { useRef, useState } from 'react'
import {BsFillFileEarmarkArrowUpFill}from 'react-icons/bs'
import {MdOutlineClose} from 'react-icons/md'

const IntroVideo = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
  return (
    <div className='flex flex-col items-start gap-6 absolute w-[789px] h-[222px] p-6 rounded-[20px]  bg-white inset-x-0 top-0'>
      
        <p className='w-[127px] h-[18px] not-italic font-medium text-2xl leading-[18px] text-[#333333] flex-none order-none grow-0'>
            Intro Video
        </p>
        {/** */}

        <div ref={wrapperRef}
             onDragEnter={onDragEnter}
             onDragLeave={onDragLeave}
             onDrop={onDrop}>
                <div className='flex flex-row justify-center items-center gap-2 w-[741px] h-[68px] border flex-none order-1 self-stretch grow-0 px-5 py-6 rounded-lg border-dashed border-[#B2B6BC] relative mb-5'>
                <input  className=' opacity-0 absolute inset-0 flex justify-center items-center z-10 cursor-pointer'  type="file" value="" onChange={onFileDrop} />
                        <p className=' truncate w-[235px] h-5 not-italic font-normal text-sm leading-5 text-center tracking-[0.4px] text-[#778188] flex-none order-none grow-0'> 
                        Drag n drop to upload your video
                        </p>
                        <BsFillFileEarmarkArrowUpFill className='w-5 h-5 flex-none order-1 grow-0 opacity-60 cursor-pointer'/>
                </div>

    
                {
                fileList.length > 0 ? (
                    <div className='flex flex-row gap-3'>
                        
                        {
                            fileList.map((item, index) => (
                              <div key={index} className='flex flex-row items-center gap-6 w-[203px] h-10 flex-none order-2 grow-0 px-4 py-2.5 rounded-xl bg-[#edeaff]'>
                                            <p className='w-[127px] h-5 not-italic font-medium text-base leading-5 flex items-center tracking-[0.3px] text-[#793EF5] flex-none order-none grow-0'>
                                                Intro Video.mp4
                                            </p>
                                    <MdOutlineClose onClick={() => fileRemove(item)} className='w-5 h-5 flex-none order-1 grow-0 opacity-50 cursor-pointer'/>    
                            </div>
                            ))
                        }
                    </div>
                ) : null
            }
            </div>

        {/** */}



        
        

      
        


    </div>
  )
}

export default IntroVideo
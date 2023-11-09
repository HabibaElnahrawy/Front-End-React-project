import React , { useEffect, useState } from 'react'
import {MdList ,MdDoubleArrow} from 'react-icons/md'
import Navbar from './Navbar';
import { InternshipData } from '../Data';
import Category from './Category';
import Description from './Description';
import Location from './Location';
import Benefits from './Benefits';
import IntroVideo from './IntroVideo';
import MentorDtails from './MentorDtails';
import RecommendedRoles from './RecommendedRoles';
import WebLinks from './WebLinks';
const AddNewIntern = () => {
    const {  list } = InternshipData;
    const [isShown, setIsShown] = useState(false);
    const [val, setVal]=useState([]);
    const handleClick = event => {
 
        setIsShown(true);
      };

    const handle =(title)=>
    {
        if(title == "Category")
        {
            setVal("First")    
        }
        else if(title == "Description")
        {
            setVal("Second")  
        }
        else if(title == "Location")
        {
            setVal("Third")  
        }
        else if(title == "Benefits")
        {
            setVal("Fourth")  
        }
        else if(title == "Intro Video")
        {
            setVal("Fifth")  
        }
        else if(title == "Mentor Details")
        {
            setVal("Sixth")  
        }
        else if(title == "Recommended Roles")
        {
            setVal("Seventh")  
        }
        else
        {
            setVal("Eighth")  
        }
    }

  return (
    <div >
        
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


        {/** */}
        <div className='flex flex-row justify-between items-center gap-5 absolute w-[1466px] h-[60px] border p-6 rounded-[20px] border-solid border-[#D0D4DA] left-[23px] top-[118px]'></div>

        {/**el hagat ell ttmli */}
        <div className='flex flex-col items-end gap-4 isolate absolute w-[654px] h-full p-0 left-[23px] top-[212px] '>

             <div className='flex flex-col items-center gap-6 w-full h-16 flex-none order-none  z-[8] p-0 '>
                {list.map((feature, index) => {
                    
                    
                    const { title, delay,href } = feature; 
                    return (
                        <div className='flex flex-row items-center gap-6 w-[654px] h-16 flex-none order-none z-[8] p-0'>
                        <MdList className=' flex flex-row items-start gap-2.5 w-6 h-11 flex-none order-none px-0 py-2.5'/>
                        <div
                        key={index}
                        className='flex flex-row items-center gap-7 w-[606px] h-16 border flex-none order-1 p-5 rounded-2xl border-solid border-[#E0E0E0]  bg-white'
                        data-aos='zoom-in'
                        data-aos-offset='100'
                        data-aos-delay={delay}
                        >
                        {/* text */}
                        <div className='flex flex-row items-center gap-2 w-[514px] h-6 flex-none order-none grow p-0'>
                        
                            <h3>{title}</h3>
                            
                        </div>
                        
                        <MdDoubleArrow className='w-6 h-6 opacity-50 flex-none order-1  cursor-pointer' onClick={() => handle(title) }/>
                        </div>
                        </div>
                    );
                    })}
                
            
                
            </div>


       
     
            <div className='flex flex-row justify-between items-center gap-1 w-[606px] h-14 border flex-none  z-0 px-6 py-4 rounded-xl border-dashed border-[#793EF5] mt-[852px]'>
                <div className='flex flex-row items-center gap-3 w-[106px] h-6 flex-none order-none  p-0'>
                    <div className='w-5 h-5 flex-none order-none  bg-purple-600'></div>
                    <div className='w-[74px] h-6 not-italic font-medium text-base leading-6 text-center text-[#793EF5] flex-none order-1 '>
                        <p>Add More</p>
                     </div>
                </div>
            </div>


        </div>

        {/**content */}
        <div className='flex flex-col justify-center items-center gap-2.5 absolute w-[789px] h-[696px] p-6 rounded-[20px] left-[700px] top-[212px] '>
            {isShown}
            {val === "First" && <Category/>}
            {val === "Second" && <Description/>}
            {val === "Third" && <Location/>}
            {val === "Fourth" && <Benefits/>}
            {val === "Fifth" && <IntroVideo/>}
            {val === "Sixth" && <MentorDtails/>}
            {val === "Seventh" && <RecommendedRoles/>}
            {val === "Eighth" && <WebLinks/>}
        </div>
    </div>
    
  )
}

export default AddNewIntern
import React from 'react'
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Frame1.css';
import{SideBarData} from './SideBarData'

function Frame1() {
  return (
    
    <div className='container'>
        <img className="radical_logo"src='https://s3-alpha-sig.figma.com/img/2ead/c1fc/3364bbfa68a9861a8dc9fd8a123e9f3d?Expires=1667779200&Signature=h1cp67a-0eR8djcG-XTx16dPiVGWzqNRU7qA3vqqEL-rN9Tty11pXueyMGu06mx0eHLQ4Kj9HRuB1jV3Kjo5kiQDD6VcOIJPN6aDaJ0zVc6sY7v-9F~NmjAmSXwkyxlajLKXtO1jcUvZcyodk1AyHt2Rtfh-FCrlv09OcI1696aj~81hNCbRvZ8JlMWc~27NWcK6ry2Xfu7rTG8N3yDOzjRjF9i6aLRZ4aB1td1dtsmBDSZ0BAtA5bD-BXdxAHmNDXIlqoAez9fLt6N0Qic2UIZENJ32ezVmZ0qzXNDTv4f44GL1KykXWbqr8CtHSgU4qkOMGVz1o1D7IfGva4i~yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
        <ul className='container-list' >
            {SideBarData.map((val,key)=>
                {
                    return(
                        <li  className ="row"
                        key={key} 
                        
                        onClick={()=>{ window.location.pathname=val.link }}> 
                            <div>{val.icon}</div><div>{val.title}</div>
                        </li>
                    )
                })}
        </ul>
        <div className='accountContainer'>
                    <div className='accountIcon'></div>
                    <div className='accountName'>Adam Scott</div>
         </div>       
    </div>
   
  )
}

export default Frame1
import { useState } from "react";
import { SiPrime } from "react-icons/si";
import { MessageBox } from "../../MessageBox/MessageBox";
import './primeIcon.css'

export function Image({ src, width, height }) {
  const [messageVisible,setMessageVisible]=useState(false)
  return (
    <div>
      <div className="primeIcon" onMouseOver={
        () => {
          setMessageVisible(true)
        }
      } onMouseLeave={
        () => {
          setMessageVisible(false)
        }
      }>
        <SiPrime size={28}/>
      </div>
    
      {(messageVisible&&<MessageBox/>)}
      <img src={src} alt="" width={width} height={height} />
    </div>
  )
}
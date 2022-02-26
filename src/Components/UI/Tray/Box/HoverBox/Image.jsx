import { useState } from "react";
import { SiPrime } from "react-icons/si";
import { MessageBox } from "../../../MessageBox/MessageBox";
import './primeIcon.css'

export function Image({ src, width, height }) {
  const [messageVisible,setMessageVisible]=useState(false)
  return (
    <div style={{
      backgroundImage: `url(${src})`,
      height: '15rem',
      backgroundSize:'cover'
    }}>
      <div className="primeIcon" onMouseOver={
        () => {
          setMessageVisible(true)
        }
      } onMouseLeave={
        () => {
          setMessageVisible(false)
        }
      }>
        <SiPrime size={30}/>
      </div>
    
      {(messageVisible&&<MessageBox  top= '-6rem' left= '-8rem' width= '110%'  height= '20%'/>)}
      {/* <img src={src} alt="" width={width} height={height} /> */}
    </div>
  )
}
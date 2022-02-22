import { useState } from "react"
import { Box015 } from "./Box015"
import './tray015.css'
export function Tray015({ givenarray, smaller }) {  
  const [array,setArray]=useState([...givenarray])
  return (
    <div className="tray015">
      <div className="arrows015" onClick={() => {
        let temp = array.pop();
        setArray([temp, ...array])
      }}>left</div>
    <div className="traysub015">
      {array.map((el) => {
        return <Box015 key={Date.now()*Math.random()} smaller={smaller} val={el}/>
      })}
    </div>
      <div className="arrows015" onClick={() => {
        let temp=array.shift();
        setArray([...array,temp])
      }}>right</div>
    </div>
  )
}


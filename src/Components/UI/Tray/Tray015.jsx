// Image sizes from TMDB
// "backdrop_sizes": [
//   "w300",
//   "w780",
//   "w1280",
//   "original"
// ],
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io'
import { useEffect, useState } from "react"
import { Box015 } from "./Box/Box015"
import './tray015.css'

export function Tray015({ givenarray, smaller, title}) {     
  const dummyArray = smaller ? new Array(9).fill(1) : new Array(5).fill(1);
  const [start, setStart] = useState(0)   
  return (
    <div style={{      
      textAlign: 'left',
    }}>    
      {console.log('inside tray')}
      {/* {console.log(start)} */}
      <h1>{title}</h1>
      <div className="tray015">
        
      <div className="arrows015" style={{color:start==0?'transparent':'white'}} onClick={() => {
          setStart(p => {
            // if (p == 0) return givenarray.length - 1;
            if (start > 0) return (p - 1)
            else return (p)
          })
        }}><IoIosArrowBack size={70}/></div>
        
    <div className="traysub015">
      {dummyArray.map((el,index) => {
        return <Box015 key={Date.now() * Math.random()} smaller={smaller}
          // val={smaller?givenarray[(index + start)%givenarray.length]:`https://image.tmdb.org/t/p/w300${givenarray[(index + start)%givenarray.length].backdrop_path}`} />
          val={smaller ? givenarray[(index + start) % givenarray.length] : `https://image.tmdb.org/t/p/w300${givenarray[(index + start) % givenarray.length].backdrop_path}`}
          element={smaller ? givenarray[(index + start) % givenarray.length] : givenarray[(index + start) % givenarray.length]}
        />
      })}
        </div>
        
        <div className="arrows015" style={{color:start==givenarray.length-(smaller?9:4)?'transparent':'white'}} onClick={() => {
          // setStart(p=>(p+1)%givenarray.length)
          if(start<=givenarray.length-(smaller?10:5))
          setStart(p=>(p+1))
        }}><IoIosArrowForward size={70} /></div>
        
    </div>
      </div>
  )
}


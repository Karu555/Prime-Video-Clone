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
import axios from 'axios';

// export function Tray015({title, smaller, givenarray1}) {     
export function Tray015(props) {     
  const dummyArray = props.smaller ? new Array(props.pics.length).fill(1) : new Array(5).fill(1);
  const [start, setStart] = useState(0)   
  const [givenarray, setGivenarray] = useState([1])   

  useEffect(() => {
    if(props.pics) setGivenarray(props.pics)
    axios.get(`${props.url1}`).then(res => {
  // filtering the array results to remove elements with no images
      let temp = res.data.results.filter((el) => {
        return el.backdrop_path != null;
            })
            return setGivenarray(()=> temp)
          })  
      }, [])
      
      return (
        <div style={{      
          textAlign: 'left',
        }}>    
        {/* {console.log('123: ',props)} */}
      {console.log('inside tray')}
      
      {/* {console.log(start)} */}
      <h1>{props.title}</h1>
      <div className="tray015">
        
            <div className="arrows015" style={
              {
                color: start == 0 ? 'transparent' : 'white'
              }
            } onClick={() => {
          setStart(p => {
            // if (p == 0) return givenarray.length - 1;
            if (start > 0) return (p - 1)
            else return (p)
          })
        }}><IoIosArrowBack size={70}/></div>
        
            <div className="traysub015">
              
              {dummyArray.map((el, index) => {
                let obj =givenarray[(index + start)%givenarray.length];  
                return <Box015 type={props.type} key={Date.now() * Math.random()} smaller={props.smaller}
                  val={props.smaller ? obj : `https://image.tmdb.org/t/p/w300${obj.backdrop_path}`}
                  element={obj}/>
      })}
             
        </div>
        
            <div className="arrows015" style={
              {
                color: dummyArray.length == 6 && props.smaller == true ? 'transparent' : 
                  (start == (givenarray.length + 1) - (props.smaller ? 10 : 5)) ? 'transparent' : 'white',                
              }
            } onClick={() => {
          // setStart(p=>(p+1)%givenarray.length)
              console.log(props.smaller, start,givenarray.length);
          if(start<=givenarray.length-(props.smaller?10:5))
                setStart(p => (p + 1))              
        }}><IoIosArrowForward size={70} /></div>
        
    </div>
      </div>
  )
}


import { useEffect, useState } from 'react'
import { Circles } from './Circles015';
import './trending015.css'
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io'
import axios from 'axios';
const dummyArray = new Array(12).fill(1);

let intervelId;
export function Trending015({ url1 }) {
  
  const [givenarray, setGivenarray] = useState([1]);
  const [current, setCurrent] = useState(0);
  function handleOnCircleClick(id) {
    setCurrent(id);
  }
  
  useEffect(() => {
    axios.get(url1).then(res => {
      return setGivenarray(() => {
          // filtering the array results to remove elements with no images and further filtering 
          // out out first 12
        let temp = res.data.results.filter((el) => {
          return el.backdrop_path != null;
        }).filter((el, index) => {
          return index<12 
        })
        // console.log(temp)
        return temp
      })
    })
    
    intervelId=setInterval(() => {
      setCurrent(p => {
        if (p < 11) return (p + 1)
        else {
          clearInterval(intervelId);
          return 0
        };
      });
    },3500)
  }, [])  
  
  return (
    <div className="trending015" style={{
      backgroundImage: `URL(https://image.tmdb.org/t/p/original${givenarray[current].backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }}>
       <div div className="arrows015" style={{color:current==0?'transparent':'white'}} onClick={() => {
        setCurrent(p => {
          // if (p == 0) return givenarray.length - 1;
          if(current>0)
            return (p - 1);
          else return p;
        })
      }}><IoIosArrowBack size={70} /></div>
      <div className="tracker015">
        {dummyArray.map((el, index) => <Circles handleOnCircleClick={handleOnCircleClick} key={index} id={index} current={current}/>)}
      </div>  
      <div className="arrows015" style={{color:current==givenarray.length-1?'transparent':'white'}} onClick={() => {        
        setCurrent(p => {
          if (current < givenarray.length - 1) return (p + 1)
          else return p;
        });      
      }}><IoIosArrowForward size={70}/></div>
    </div>
  )
}
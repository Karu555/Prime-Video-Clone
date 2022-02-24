import { useState } from 'react'
import { Circles } from './Circles';
import './trending015.css'
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io'
const dummyArray = new Array(12).fill(1);
export function Trending015({ givenarray }) {
  const [current, setCurrent] = useState(0);
  function handleOnCircleClick(id) {
    setCurrent(id);
  }
  
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
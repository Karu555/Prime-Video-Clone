import {MdOutlineMessage} from 'react-icons/md'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './box015.css'
export function HoverBox({ val, id }) {
  const [element,setElement]=useState({})
  // console.log(element)
  useEffect(() => {
    axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`).then(res => {
      setElement(res.data);
    })
  }, [])
  let hours = Math.floor(element.runtime / 60);
  let minutes = element.runtime - hours * 60
  let year = element.release_date ? element.release_date.trim().split('-')[0] : null;
  

  return (
    <div className='hoverbox'>
      <img src={val} alt="" width='100%' height='100%' />
      <div className='details'>
        <div className="flexBox">
        </div>
        <h4>Included with Prime</h4>
        <h3>{element.original_title}</h3>
        <p>{element.overview}</p>        
        <br />
        <div className="flexBox_bottom">
          <p>{minutes == 1 ? `${hours}h ${minutes}min` : `${hours}h ${minutes}mins`}</p>
          <p>{year}</p>  
          <MdOutlineMessage  size={20}/>
          <p>{element.vote_average}</p>
        </div>
      </div>               
    </div>
  )
}
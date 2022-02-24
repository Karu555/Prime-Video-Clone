import {MdBlock, MdOutlineMessage, MdOutlinePlayCircle} from 'react-icons/md'
import {IoPlayOutline} from 'react-icons/io5'
import {BsPlusLg} from 'react-icons/bs'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './hoverbox015.css'
export function HoverBox({ val, id, type,onCustomClick }) {
  const [element,setElement]=useState({})
  // console.log(element)
  useEffect(() => {
    axios.get(
      // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
      `https://api.themoviedb.org/3/${type}/${id}?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`).then(res => {
          setElement(res.data);
    })
  }, [])
  let hours = Math.floor(element.runtime / 60);
  let minutes = element.runtime - hours * 60
  let year;
  if(type=='tv')
    year = element.first_air_date ? element.first_air_date.trim().split('-')[0] : null;
  else
    year = element.release_date ? element.release_date.trim().split('-')[0] : null;
  

  return (
    <div className='hoverbox' onClick={() => {
      onCustomClick({
        id: element.id,
        type: type,
        title: type == 'tv' ? element.original_name : element.original_title
      });
    }}>
      <img src={val} alt="" width='100%' height='100%' />
      <div className='details'>
        <div className="flexBox">
          <MdOutlinePlayCircle size={65} onClick={() => {
            console.log('Clicked!!')
          }}/> 
          <h3>Play</h3>
          <div>
          <IoPlayOutline size={35} />  
          <BsPlusLg size={35} />
          <MdBlock size={35}/>
          </div>
        </div>
        <h4>Included with Prime</h4>
        <h3>{type=='tv'?element.original_name:element.original_title}</h3>
        <p>{element.overview?element.overview:'No overview found!'}</p>  
        <br />
        <div className="flexBox_bottom">
         {type=='tv'?null:<p>{minutes == 1 ? `${hours}h ${minutes}min` : `${hours}h ${minutes}mins`}</p>}
          <p>{year}</p>  
          <MdOutlineMessage  size={20}/>
          <p>{element.vote_average}</p>
        </div>
      </div>               
    </div>
  )
}
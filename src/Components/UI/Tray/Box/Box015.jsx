import { useState } from 'react'
import './box015.css'
import { HoverBox } from './HoverBox/HoverBox015';
import {useNavigate} from 'react-router-dom'
import { Image } from './HoverBox/Image';
import { SiPrime } from 'react-icons/si';
import axios from 'axios';

export function Box015({ val, smaller,element ,type}) {
  const [hoverVisible, setHoverVisible] = useState(false);
  const [plusVisible, setPlusVisible] = useState(true)

  const navigate = useNavigate();
  
  function sendWatchListtoDB(id, type) {
    // if(id=='flip' && type=='flip') setPlusVisible(true)
    let postWatchList = {
      id,
      type
    }
    
    ///////TOKEN GAINED AFTER LOGIN///////
    let token =JSON.parse(localStorage.getItem('user'))?.token ;
    ///////TOKEN GAINED AFTER LOGIN///////
    
    axios.post('http://localhost:8000/watchList', postWatchList, {
      headers: { Authorization: `Bearer ${token}` }      
    }).then((res) => {
      console.log(res.data)
      if(!plusVisible)setPlusVisible(true)
      else setPlusVisible(false)
    }).catch(err => {
      if (err.response) {
        console.log(err.response.status)
        console.log(err.response.data)
      }
    })
  }

  return (
    <div className={smaller ? "smallerbox015" : 'box015'} onMouseOver={
      () => {
        setHoverVisible(true)
      }
    } onMouseLeave={() => {
      setHoverVisible(false)      
    }

      }>          
            {/* <Image src={val} alt="" width='100%' height='100%' /> */}
        {/* <img src={val} alt="" width='100%' height='100%' /> */}
      {(hoverVisible == true && smaller == false) ? <HoverBox plusVisible={plusVisible} sendWatchListtoDB={sendWatchListtoDB} type={type} id={element.id}  key={Date.now()*Math.random()} className='box015' val={val} onCustomClick={
        (obj) => {
          // let dataobj=localStorage.getItem()
          navigate(`/itemlanding?id=${obj.id}&type=${obj.type}&title=${obj.title}`)
        }
      } /> : (smaller == false) ?
        <div className='image-container' style={{
          backgroundImage: `url(${val})`
        }}>          
          {!hoverVisible? <div className='prime'>
            <SiPrime size={30} />
          </div>:null}
        </div> :<img src={val} alt="" width='100%' height='100%' />}
    </div>
  )
}
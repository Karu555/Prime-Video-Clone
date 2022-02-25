import { useState } from 'react'
import './box015.css'
import { HoverBox } from './HoverBox/HoverBox015';
import {useNavigate} from 'react-router-dom'
import { Image } from './HoverBox/Image';
import { SiPrime } from 'react-icons/si';

export function Box015({ val, smaller,element ,type}) {
  const [hoverVisible, setHoverVisible] = useState(false);
  const navigate = useNavigate();

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
      {(hoverVisible == true && smaller == false) ? <HoverBox type={type} id={element.id} className='box015' val={val} onCustomClick={
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
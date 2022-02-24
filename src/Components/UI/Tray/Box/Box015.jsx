import { useState } from 'react'
import './box015.css'
import { HoverBox } from './HoverBox';
export function Box015({ val, smaller,element }) {
  const [hoverVisible, setHoverVisible] = useState(false);
  return (
    <div className={smaller ? "smallerbox015" : 'box015'} onMouseOver={
      () => {
        setHoverVisible(true)
      }
    } onMouseLeave={() => {
      setHoverVisible(false)      
    }

    }>          
        {/* <img src={val} alt="" width='100%' height='100%' /> */}
      {(hoverVisible==true && smaller==false) ? <HoverBox id={element.id} className='box015' val={ val}/>:<img src={val} alt="" width='100%' height='100%' />}
    </div>
  )
}
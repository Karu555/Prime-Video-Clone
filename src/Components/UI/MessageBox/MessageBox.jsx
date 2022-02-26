
import { SiPrime } from 'react-icons/si'
import { Image } from '../Tray/Box/HoverBox/Image'
import './messageBox.css'

export function MessageBox({message,top,left,width,height}) {
  return (
    <div className="messageBox" style={{
        top,
        left,
        width,
        height,
    }}>
      
      {!message?<div>
        Videos with <div className="primeIc"><SiPrime size={24} /> </div>  are included with a Prime membership        
      </div>:message}
    </div>
  )
}

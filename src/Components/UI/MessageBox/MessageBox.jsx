
import { SiPrime } from 'react-icons/si'
import { Image } from '../Tray/Box/HoverBox/Image'
import './messageBox.css'

export function MessageBox() {
  return (
    <div className="messageBox">
      <div>Videos with <div className="primeIc"><SiPrime size={25}/> </div>  are included with a Prime membership</div>
    </div>
  )
}

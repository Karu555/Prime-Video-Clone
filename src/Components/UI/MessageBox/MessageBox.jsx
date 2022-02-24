
import { SiPrime } from 'react-icons/si'
import { Image } from '../Tray/Box/Image'
import './messageBox.css'

export function MessageBox() {
  return (
    <div className="messageBox">
      <p>Videos with <div className="primeIc"><SiPrime size={25}/> </div>  are included with a Prime membership</p>
    </div>
  )
}

import './itemLandingControls.css'
import {BsPlay} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdCelebration} from 'react-icons/md'
import { FiDownload } from 'react-icons/fi'

export function ItemLandingControls({choice}) {
  return (
    <div className="item-landing-buttons">
      {choice==1 && <BsPlay size={35}/>}
      {choice==2 && <AiOutlinePlus size={35}/>}
      {choice==3 && <MdCelebration size={35}/>}
      {choice==4 && <FiDownload size={35}/>}
    </div>
  )
}
import { MdOutlinePlayCircle } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

export function PlayCircle({type,id}) {
  const navigate = useNavigate();
  return (
    <span>
      <MdOutlinePlayCircle size={65} onClick={ 
        () => {
          navigate(`/watchmoviepage?id=${id}&type=${type}`)
        }
      }/>     
    </span>
  )
}
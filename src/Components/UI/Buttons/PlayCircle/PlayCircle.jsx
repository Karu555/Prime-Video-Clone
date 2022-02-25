import { MdOutlinePlayCircle } from "react-icons/md";

export function PlayCircle() {
  return (
    <div>
      <MdOutlinePlayCircle size={65} onClick={ 
        () => {
          console.log('Clicked!')
        }
      }/>     
    </div>
  )
}
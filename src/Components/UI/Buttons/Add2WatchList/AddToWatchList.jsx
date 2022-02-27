import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MessageBox } from "../../MessageBox/MessageBox";
import {GoTasklist} from 'react-icons/go'

export function AddToWatchList({ id, type,plusVisible, sendWatchListtoDB }) {
  const [messageVisible, setMessageVisible] = useState(false)
 
  let message = (type == 'movie') ?
    (plusVisible ? 'Add to WatchList':'Remove from WatchList')
      :(plusVisible ? 'Add Season to WatchList':'Remove Season from WatchList') 
  
 

  return <span style={{
    border:`3px solid ${!plusVisible?'white':'transparent'}`
  }} onClick={() => {
     sendWatchListtoDB(id, type)
  }} onMouseOver={
    () =>setMessageVisible(true) 
  } onMouseLeave={
    () =>setMessageVisible(false) 
    }>    
    {messageVisible?<MessageBox message={message} top= '12rem' left= '10rem' width= '60%' height= '13%'/>:null}
    {plusVisible ? <BsPlusLg size={35} /> : <GoTasklist size={26} />}
</span>
}
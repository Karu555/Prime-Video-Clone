
import axios from "axios";
import { useEffect, useState } from "react";
// import {useSearchParams } from 'react-router-dom'
import {useSearchParams } from 'react-router-dom'

export function ItemLandingPage() {
  let [searchParams] = useSearchParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    
    axios.get(
      // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
      `https://api.themoviedb.org/3/${searchParams.get('type')}/${searchParams.get('id')}?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`).then(res => {
        
        setItem(res.data);
    })
  }, [])

  return (
    <div>
      <h1>id :{item.id}</h1>
      <h1>title :{searchParams.get('title')}</h1>
      {console.log(item)}
    </div>
  )
}
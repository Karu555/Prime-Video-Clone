import { useState,useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer015";
import "./watchlist2.css"
import axios from "axios";
import { Tray015 } from "../UI/Tray/Tray015";
import {Box015} from '../UI/Tray/Box/Box015'



export function WatchList() {
  const [items,setItems]=useState([])
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('user'))?.token;
    axios.get('http://localhost:8000/watchList', {
      headers:{'Authorization': `Bearer ${token}`}
    }).then((el) => {
      console.log(el.data)
      el.data.map(item => {      
        axios
          .get(
            // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
            `https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
          )
          .then((res) => {
            setItems(p=>[...p,res.data]);
          });
      }
      )
      // setItems(el.data)
    }).catch(err => {
      if (err?.response?.data == 'No token provided! Please login') {
       alert(err.response.data) 
      }
    })
    
  },[])
  
  return (
    <div className="watchlist-main">
    <Navbar />
<div className="maindiv">
  <p>Watchlist</p>
  <div className="subdiv">
    <div><p>All</p></div>
    <div>
      <span>Sort by:</span>
      <span>
        <select name="" id="">
        <option value="">Most recent Addition</option>
          <option value="">Title: A - Z</option>
          <option value="">Title: Z - A</option>
        </select>
      </span>
    </div>
  </div>
        <div className="watched_items">          
          <Tray015 type='tv' title='' smaller={false} array={items}/>
          
          {/* {console.log(items)}
          {items.map(el => {
            return <span style={{
              border: '1px solid red',
              margin: '1rem',
              height: '5rem'
            }}>
              <Box015 val={`https://image.tmdb.org/t/p/w300${el.backdrop_path}`} smaller={false} element={el} type='tv' />
              
            </span>           */}              

          {/* })} */}

  </div>
</div>
<Footer />
</div>
  )
}
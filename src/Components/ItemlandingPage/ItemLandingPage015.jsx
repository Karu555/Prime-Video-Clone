
import axios from "axios";
import { useEffect, useState } from "react";
// import {useSearchParams } from 'react-router-dom'
import {useSearchParams } from 'react-router-dom'
import { Footer } from "../Footer/Footer015";
import './itemlandingpage015.css'
import '../Footer/footer.css'
import { ItemLandingControls } from "../UI/Buttons/ItemlandingControls";
  
export function ItemLandingPage015() {
  let [searchParams] = useSearchParams();
  const [item, setItem] = useState({});
  const [cast, setCast] = useState({});
  useEffect(() => {
    // https://api.themoviedb.org/3/movie/568124/credits?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US
    // https://api.themoviedb.org/3/tv/2734/credits?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US


    axios.get(
      // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
      `https://api.themoviedb.org/3/${searchParams.get('type')}/${searchParams.get('id')}?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`).then(res => {        
        setItem(res.data);
    })
    
    axios.get(
      // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
      `https://api.themoviedb.org/3/${searchParams.get('type')}/${searchParams.get('id')}/credits?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`).then(res => {        
        setCast(res.data);
      })
  }, [])
  
  let hours = Math.floor(item?.runtime / 60);
  let minutes = item?.runtime-hours*60;
  let year = item?.release_date?.trim().split('-')[0];
  console.log(item)
  let url = 'https://image.tmdb.org/t/p/original' + item?.backdrop_path;
  return (
    <div style={{
      backgroundColor: '#0F171E',
      color: 'white',
    }}>
    <div className="itemLandingpage">
        <div style={
          {         
            position: "absolute",
            zIndex: -10,
            border: '3px solid red',
            marginLeft:'30%',
            width: '70%',
            height: '97%',
          backgroundImage: `url(${url})`,
          backgroundSize:'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '99%',
          'box-shadow': '0 0 50px 50px #0F171E inset'
        }
    }></div>
        <h1>{item.title}</h1>
        <div className="item-meta">
          <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png" alt=""  width='100%' height='100%'/></div>
          <div>{ item?.vote_average}</div>
          <div>{hours}h{ minutes}min</div>
          <div>{year}</div>
        </div>
        <div className="flexbox-control-buttons">
          <div className="playBig">Play</div>  
          <ItemLandingControls/>
          <ItemLandingControls/>
          <ItemLandingControls/>
          <ItemLandingControls/>
        </div>
        <div className="itemdesc">
          {item?.overview}
        </div>
        <div className="itemDetails">
          {searchParams.get('type')=='movie'&&<div className="specifics">
            <div>Directors</div>
            <div>{cast?.crew?.filter((el,index) => el.department == 'Directing' && index<4).map(el => {
              return <span>&nbsp;{el.name}&nbsp;</span>
            } )}</div>
          </div>}
          <div className="specifics">
            <div>Starring</div>
            <div>{cast?.cast?.filter((el,index) => el.known_for_department == 'Acting' && index<4).map(el => {
              return <span>&nbsp;{el.name}&nbsp;</span>
            } ) }</div>
          </div>
          <div className="specifics">
            <div>Genres</div>
            <div>{item?.genres?.filter((el,index) => index<4).map(el => {
              return <span>&nbsp;{el.name}&nbsp;</span>
            } )}</div>
          </div>
        </div>
        <div className="prefooter"></div>       
      </div>
      <Footer/>
    </div>
  )
}
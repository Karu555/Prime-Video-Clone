import axios from "axios"
import { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer015.jsx";
import { LanguagesPics } from "./Languagespics.jsx";
import { Tray015 } from "../UI/Tray/Tray015.jsx"
import { Trending015 } from "../UI/Trending/Trending015.jsx"


export function MoviesPage015() {

  return (
    <div style={{
      backgroundColor: '#0F171E',
      color: 'white',
    }}>
      
      <Trending015 url1={'https://api.themoviedb.org/3/movie/upcoming?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=1'} />      
      <Tray015 type='movie' title='Recommended Movies' smaller={false} url1={`https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false`}/>      {/* <Tray015 type='movie' title='Watch in your Language' smaller={true}  pics={LanguagesPics}/> */}
      <Tray015 type='movie' title='Watch in your Language' smaller={true}  pics={LanguagesPics}/>
      <Tray015 type='movie' title='Crime Movies' smaller={false} url1='https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=80'/>
      <Tray015 type='movie' title='Adventure Movies' smaller={false} url1='https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=12'/>
      <Tray015 type='movie' title='Animation Movies' smaller={false} url1='https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=16'/>
      <Footer/>    
    </div>
  )
}
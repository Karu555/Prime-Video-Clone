
import { Footer } from "../Footer/Footer015.jsx";
import { LanguagesPics } from "./Languagespics.jsx";
import { Tray015 } from "../UI/Tray/Tray015"
import { Trending015 } from "../UI/Trending/Trending015.jsx"
import {Link} from 'react-router-dom'

export function LandingPage015() {
  
  return (

    <div style={{
      backgroundColor: '#0F171E',
      color: 'white',
      overflow: "hidden"
    }}>
      <div>
        <Link to="/movies" target='_blank' style={{
          color: 'white',
          fontSize: '1.5rem',
          margin: '1rem'
        }}>Movies</Link>
        <Link to="/tvshows" target='_blank' style={{
          color: 'white',
          fontSize: '1.5rem',
          margin: '1rem'
        }}>Tv Shows</Link>
        <Link to="/login" target='_blank' style={{
          color: 'white',
          fontSize: '1.5rem',
          margin: '1rem'
        }}>Login</Link>
        <Link to="/register" target='_blank' style={{
          color: 'white',
          fontSize: '1.5rem',
          margin: '1rem'
        }}>Register</Link>

      </div>
      <Trending015 url1={'https://api.themoviedb.org/3/movie/upcoming?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=3'} />      
      <Tray015 type='movie' title='Recommended Movies' smaller={false} url1={`https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false`} />
      <Tray015 type='tv' title='Popular TV shows' smaller={false} url1={`https://api.themoviedb.org/3/tv/popular?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=3`}/>
      
      <Tray015 type='movie' title='Watch in your Language' smaller={true}  pics={LanguagesPics}/>
      <Tray015 type='movie' title='Family Movies' smaller={false} url1='https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=10751'/>
      <Tray015 type='movie' title='Drama Movies' smaller={false} url1='https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=18' />
      <Tray015 type='tv' title='Mystery TV shows' smaller={false}
        url1={`https://api.themoviedb.org/3/discover/tv?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=9648`}/>
      <Tray015 type='tv' title='Kids TV shows' smaller={false}
        url1='https://api.themoviedb.org/3/discover/tv?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=10762' />
      
      <Footer/>    
    </div>
  )
}
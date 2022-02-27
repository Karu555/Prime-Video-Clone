
import { Footer } from "../Footer/Footer015.jsx";
import { Navbar } from "../Navbar/Navbar.jsx";
import { Tray015 } from "../UI/Tray/Tray015.jsx"
import { Trending015 } from "../UI/Trending/Trending015.jsx"
import { tvGenrePics } from "./tvGenrePics.jsx";


export function TVShowsPage015() {
  
  return (
    <>
      <Navbar/>
    <div style={{
      backgroundColor: '#0F171E',
      color: 'white',
      overflow: 'hidden'
    }}>
       <Trending015 url1={'https://api.themoviedb.org/3/tv/on_the_air?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=2'} />      
      <Tray015 type='tv' title='Popular TV shows' smaller={false} url1={`https://api.themoviedb.org/3/tv/popular?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=3`}/>
      <Tray015 type='tv' title='Top Rated TV shows' smaller={false} url1={`https://api.themoviedb.org/3/tv/top_rated?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=1`}/>
      <Tray015 type='tv' title='TV Airing Today' smaller={false} url1={`https://api.themoviedb.org/3/tv/airing_today?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=1`}/> 
      <Tray015 type='tv' title='TV genres' smaller={true} pics={tvGenrePics} />
      
      <Tray015 type='tv' title='Crime TV shows' smaller={false}
        url1={`https://api.themoviedb.org/3/discover/tv?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=80`}/>
      <Tray015 type='tv' title='Adventure TV shows' smaller={false}
        url1='https://api.themoviedb.org/3/discover/tv?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=10759' />
      <Tray015 type='tv' title='Comedy TV shows' smaller={false} u
        url1='https://api.themoviedb.org/3/discover/tv?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genres=35' />
      <Footer/>    
    </div>
      </>
  )
}
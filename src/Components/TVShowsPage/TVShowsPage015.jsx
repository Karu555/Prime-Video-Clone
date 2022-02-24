import axios from "axios"
import { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.jsx";
import { Tray015 } from "../UI/Tray/Tray015.jsx"
import { Trending015 } from "../UI/Trending/Trending015.jsx"


export function TVShowsPage015() {
  const [upcomingArray, setUpcomingArray] = useState([1]);   
  const [moviesArray, setMoviesArray] = useState([1]);   
  const [adventureArray, setadventureArray] = useState([1]);   
  const [crimeArray, setCrimeArray] = useState([1]);   
  const [animationArray, setanimationArray] = useState([1]);   

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&page=1').then(res => {
      return setUpcomingArray(()=> res.data.results)
    })    
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false').then(res => {
      return setMoviesArray(()=> res.data.results)
    })    
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=12').then(res => {
      return setadventureArray(()=> res.data.results)
    })    
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=80').then(res => {
      return setCrimeArray(()=> res.data.results)
    })    
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=16').then(res => {
      return setanimationArray(()=> res.data.results)
    })    
  },[])  
  return (
    <div style={{
      backgroundColor: '#0F171E',
      color: 'white',
    }}>
      <Trending015 givenarray={upcomingArray.filter((el, index) => {
        return index<12
      })}/>
      <Tray015 title='Recommended Movies' smaller={false} givenarray={moviesArray}/>
      {/* <Tray015 title='Watch in your Language' smaller={true}  givenarray={LanguagesPics}/> */}
      <Tray015 title='Crime Movies' smaller={false} givenarray={crimeArray}/>
      <Tray015 title='Adventure Movies' smaller={false} givenarray={adventureArray}/>
      <Tray015 title='Animation Movies' smaller={false} givenarray={animationArray} />
      <Footer/>    
    </div>
  )
}
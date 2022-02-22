import { Tray015 } from "./Tray015.jsx"
import { Trending015 } from "./Trending015.jsx"


export function MoviesPage015() {
  let moviesArray=[1,2,3,4,5,6,7,8,9]
  let languagesArray=['Hindi','English','Telugu','Tamil','Malayalam','Kannada','Marathi','Punjabi','Bengali','Gujarathi']
  return (
    <div>
      <Trending015 />
      <Tray015  smaller={false} givenarray={moviesArray}/>
      <Tray015 smaller={true} givenarray={languagesArray}/>
      <Tray015  smaller={false} givenarray={moviesArray}/>
      <Tray015  smaller={false} givenarray={moviesArray}/>
      <Tray015  smaller={false} givenarray={moviesArray}/>
    </div>
  )
}
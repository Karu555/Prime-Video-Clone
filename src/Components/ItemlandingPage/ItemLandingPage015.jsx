import axios from "axios";
import { useEffect, useState } from "react";
// import {useSearchParams } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import { Footer } from "../Footer/Footer015";
import "./itemlandingpage015.css";
import "../Footer/footer.css";
import { Navbar } from "../Navbar/Navbar";
import { FaPlay } from "react-icons/fa";
import { ItemLandingControls } from "../UI/Buttons/ItemLandingControls/ItemlandingControls";
import { Link } from "react-router-dom";

export function ItemLandingPage015() {
  let [searchParams] = useSearchParams();
  const [item, setItem] = useState({});
  const [cast, setCast] = useState({});
  useEffect(() => {
    // https://api.themoviedb.org/3/movie/568124/credits?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US
    // https://api.themoviedb.org/3/tv/2734/credits?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US
    
    // getting movie details
    axios
      .get(
        // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
        `https://api.themoviedb.org/3/${searchParams.get(
          "type"
        )}/${searchParams.get(
          "id"
        )}?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US&append_to_response=videos`
      )
      .then((res) => {
        setItem(res.data);
      });
// getting crew details
    axios
      .get(
        // `https://api.themoviedb.org/3/tv/2051?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
        `https://api.themoviedb.org/3/${searchParams.get(
          "type"
        )}/${searchParams.get(
          "id"
        )}/credits?api_key=dfdce3f4e2798c999d2088421ef5be60&language=en-US`
      )
      .then((res) => {
        setCast(res.data);
      });
  }, []);

  let hours = Math.floor(item?.runtime / 60);
  let minutes = item?.runtime - hours * 60;
  let year = item?.release_date?.trim().split("-")[0];
  // console.log(item);
  console.log(item?.videos?.results[0].key);

  // let youtubeUrl = 'https://www.youtube.com/watch?v='+item?.videos?.results[0].key;
  let url = "https://image.tmdb.org/t/p/original" + item?.backdrop_path;

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#0F171E",
          color: "white",
        }}
      >
        <div className="itemLandingpage">
          <div
            style={{
              position: "absolute",
              marginLeft:'-5rem',
              zIndex: -10,
              // border: "3px solid red",
              marginLeft: "30%",
              width: "70%",
              height: "97%",
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "99%",
              "box-shadow": "0 0 5rem 5rem #0F171E inset",
            }}
          ></div>
          <h1>{item.title}</h1>
          <div className="item-meta">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div>{item?.vote_average}</div>
            <div>
              {searchParams.get("type")=='movie'?`${hours} h ${minutes} min`:null}
            </div>
            <div>{year}</div>
          </div>
          <div className="flexbox-control-buttons">
            <Link style={{borderBottom:'none'}} to={`/watchmoviepage?key=${item?.videos?.results[0].key}`}>
              <div className="playBig">
                <FaPlay size={30} />
                Play
              </div>
            </Link>
            <Link style={{borderBottom:'none'}} to={`/watchmoviepage?key=${item?.videos?.results[0].key}`}>
              <ItemLandingControls choice={1}/>
            </Link>
            <ItemLandingControls choice={2}/>
            <ItemLandingControls choice={3}/>
            <ItemLandingControls choice={4}/>
          </div>

          <div className="itemdesc">{item?.overview}</div>
          <div className="itemDetails">
            {searchParams.get("type") == "movie" && (
              <div className="specifics">
                <div>Directors</div>
                <div>
                  {cast?.crew
                    ?.filter(
                      (el, index) => el.department == "Directing" && index < 4
                    )
                    .map((el) => {
                      return <span>&nbsp;{el.name}&nbsp;</span>;
                    })}
                </div>
              </div>
            )}
            <div className="specifics">
              <div>Starring</div>
              <div>
                {cast?.cast
                  ?.filter(
                    (el, index) =>
                      el.known_for_department == "Acting" && index < 4
                  )
                  .map((el) => {
                    return <span>&nbsp;{el.name}&nbsp;</span>;
                  })}
              </div>
            </div>
            <div className="specifics">
              <div>Genres</div>
              <div>
                {item?.genres
                  ?.filter((el, index) => index < 4)
                  .map((el) => {
                    return <span>&nbsp;{el.name}&nbsp;</span>;
                  })}
              </div>
            </div>
          </div>
          <div className="prefooter"></div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

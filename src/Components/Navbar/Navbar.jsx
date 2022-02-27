import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import {Link} from 'react-router-dom'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import SignIn from "../SignIn";


export const Navbar = () => {
  const nav = useNavigate();
  const [show,setShow] = useState(false);
  const [showlogin, setShowlogin] = useState(false)

  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  if (!user) {    
    nav(`\login`)
    return <SignIn/>
  };  

    return (
      <div className="parent_div">
        <div className="nav">
          <div>
            <Link style={{
            borderBottom:'none'
          }}  to='/home'>
            <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" />
            </Link>
          </div>

          <div className="navlist">
          
          
          {/* <Link to="/login" target='_blank' >Login</Link>
          <Link to="/register" target='_blank' >Register</Link> */}
            <div ><Link to="/home" target='_blank' >Home</Link></div>
            <div><Link to="/tvshows" target='_blank' >Tv Shows</Link></div>
            <div><Link to="/movies" target='_blank' >Movies</Link></div>
            <div>Channels</div>
            <div className="category"  onMouseEnter={() => setShow((e) => !e)} onMouseLeave={() => setShow((e) => !e)}>
              Categories
              <span className="dropdown_icon"><AiFillCaretDown /></span>
              <div className="categoryli" style={{ display: show ? "flex" : "none" }} >
                <div className= "categorydiv" >
                  <div className="firstcategorychild">
                    <h3>Audio Languages</h3>
                    <div className="fivegridcategory">
                      <div>
                        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"></img>
                      </div>
                      <div>
                        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"></img>
                      </div>
                      <div>
                        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"></img>
                      </div>
                      <div>
                        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/Hayu_logo_for_MLP_Grid.jpg"></img>
                      </div>
                      <div>
                        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/ShortsTV-426X2944_V1.jpg"></img>
                      </div>
                    </div>
                  </div>
                  <div className="secondcategorychild">
                    <div>
                      <h3>Audio language</h3>
                      <table>
                        <tr>
                          <td>English</td>
                          <td>Malyalam</td>
                        </tr>
                        <tr>
                          <td>Hindi</td>
                          <td>Punjabi</td>
                        </tr>
                        <tr>
                          <td>Telugu</td>
                          <td>Marathi</td>
                        </tr>
                        <tr>
                          <td>Tamil</td>
                          <td>Bengali</td>
                        </tr>
                        <tr>
                          <td>Kannada</td>
                          <td>Gujarati</td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      <h3>Other category</h3>
                      <table>
                        <tr>
                          <td>Drama</td>
                        </tr>
                        <tr>
                          <td>Action and Adventure</td>
                        </tr>
                        <tr>
                          <td>Romance</td>
                        </tr>
                        <tr>
                          <td>Comedy</td>
                        </tr>
                        <tr>
                          <td>Suspense</td>
                        </tr>
                        <tr>
                          <td>Horror</td>
                        </tr>
                        <tr>
                          <td>Award winness</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="searchnavbar">
          
            <FaSearch className="Search_icon"/>
            
            <input
              type="text"
              style={{ width: "200px", height: "30px", borderRadius: "5px" }}
              placeholder="Search"
            ></input>
            
          </div>
          <div className="User_name">
              {/* <span><img src="https://www.seekpng.com/png/full/115-1150456_avatar-generic-avatar.png" alt="" className="user_icon"/></span> */}
            <span className="LogIn" onClick={() => setShowlogin((e) => !e)} >
              
              {user.name}
            </span>
              <div className="login_div" style={{ display: showlogin ? "flex" : "none" }}>
                  <div className="login_list1">
                      
                          <p><Link to="/watchlist" target='_blank' >Your Watchlist</Link></p>
                          <p>Account & setting</p>
                          <p>watch Anywhere</p>
                          <p>Help</p>
                <p onClick={() => {
                  localStorage.setItem('user', null);
                  nav(`/login`)
                }}>                  
                  Not {user.name}? Sign Out
                </p>
                      
                  </div>
                  <div>
                      <div className="vl"></div>
                  </div>
                  <div className="login_list2">
                      
                      <p>Kids</p>
                      <p>Add new</p>
                      <p>Manage profile</p>
                      <p>Learn more</p>
                      
                  
              </div>
              </div>
          </div>
        </div>
      </div>
    );
  };
  


  //{`categoryli ${setHovering ? "" : "hidden"}`}
  // ${setHovering ? "" : "hidden"}`} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseleave}
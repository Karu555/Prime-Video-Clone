import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css";
import {SiPrimevideo} from 'react-icons/si'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [repassword,setRepassword]=useState('')
  const [email,setEmail]=useState('')
  const [errors,setErrors]=useState([])
  
  function handleRegisterSubmit(email, password, name, repassword) {
    if (repassword != password) alert('Passwords are not matching!! ')
    else {
      let user = {
        email,password,name
      }
      // console.log(user)
      axios.post('http://localhost:8000/register', user).then((res) => {
        console.log(res.data)
        navigate('/login')        
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
          let err = error.response.data;
          if (typeof error.response.data == 'string') {
            err = [{
              msg: error.response.data
            }]
          }
          setErrors(err);
        }
          })      
    }
  }


  
  return (
    <>
      <div className='primevideoIcon'>
      <SiPrimevideo size={200}/>
      </div>
        {errors.length>0&&<div className="errorbox">
        <h2>There was a problem</h2>
        <ul>
        {errors.map(e => {
          return <li>{ e.msg}</li>
        })}          
        </ul>
        </div>}
      <section>
            <div className="sign_container">
                <div className="sign_header">
                    {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
                </div>
                <div  className="sign_form">
                    <form >
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name"
                                onChange={(e)=>setName(e.target.value)}
                                // value={}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                // value={udata.email}
                                id="email" />
                        </div>
                       
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"                                
                  id="password" placeholder="At least 6 characters"
                  onChange={(e) => setPassword(e.target.value)}
                />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Re-enter password</label>
                            <input type="password" name="repassword"                                
                  id="passwordg"
                  onChange={(e) => setRepassword(e.target.value)}
                />
                        </div>
                        <button type="submit" className="signin_btn"
                onClick={(e) => {
                  e.preventDefault()                  
                  handleRegisterSubmit(email, password, name,repassword)
                         }}
                         >Create your Amazon account</button>

            

                        <div className="signin_info">
                            <p>Already have an account?<NavLink to="/login">Sign in</NavLink></p>
                            
                        </div>
                    </form>
                </div>
    
            </div>
      </section>
      </>
    )
}

export default Signup;

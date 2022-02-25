import axios from "axios"
import { useState } from "react"

export function Register() {
  const [email,setEmail]=useState('')
  const [name,setname]=useState('')
const [password,setPassword]=useState('')

  function handleRegisterSubmit(email, password,name) {
    let user = {
      email,password,name
    }
    // console.log(user)
    axios.post('http://localhost:8000/register', user).then((res) => {
          console.log(res.data)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      }
        })
  }
  
  return (
    <div>
      <h1>Register here</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegisterSubmit(email, password,name)
      }}>
        <input type="name" placeholder="Full name here" onChange={(e)=>{
          setname(e.target.value)
        }}/>
        <input type="email" placeholder="email here" onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <input type="password" placeholder="password here" onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <input type="submit" />
      </form>
    </div>
  )
}
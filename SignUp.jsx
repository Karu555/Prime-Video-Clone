
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css";



const Signup = () => {

  
    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                // onChange={adddata}
                                // value={}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                // onChange={adddata}
                                // value={udata.email}
                                id="email" />
                        </div>
                       
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Re-enter password</label>
                            <input type="password" name="repassword"
                                
                                id="passwordg" />
                        </div>
                        <button type="submit" className="signin_btn"
                         onClick={""}
                         >Create your Amazon account</button>

            

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            {/* <NavLink to="/login">Sign in</NavLink> */}
                        </div>
                    </form>
                </div>
    
            </div>
        </section>
    )
}

export default Signup;

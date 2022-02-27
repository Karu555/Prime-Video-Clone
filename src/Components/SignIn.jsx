import React from 'react'
import { NavLink } from 'react-router-dom';




const SignIn = () => {

   

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email or mobile phone number</label>
                            <input type="email" name="email"
                            
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" >Sign-In</button>
                    </form>
               
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    {/* <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button> */}
                </div>
            </div>

        </section>
    )
}

export default SignIn

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { validPassword } from './utils'; 
import NavBar from './NavBar.js';

const LoginPage = () => {

    const [state, setState] = useState(
        {
            registered: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    // These will be assigned values by React

    let usernameField;
    let passwordField;

    const loginUser = () => {

        // Start loading
        setState({...state, loading: true});

        fetch(`${process.env.REACT_APP_API_URL}users/login`, 
            {
                method: 'POST',
                body: JSON.stringify({
                    email: emailField.value,
                    password: passwordField.value
                }),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (result) => result.json()
        )
        .then (
            (json) => {
                const { message, jsonwebtoken } = json;

                // If web token exists (meaning login was successful)
                if(jsonwebtoken) {
                    // update the globalState
                    setGlobalState(
                        {
                            ...globalState,
                            loggedIn: true
                        }
                    )

                    // save the jwt in the browser
                    localStorage.setItem('jwt', jsonwebtoken);

                    // turn off the preloader 
                    setState({...state, loading: false})
                } else {
                    // throw an error
                    alert(message);
                }
            }
        )
    }


    // If the user is loggedIn, redirect them
    if(globalState.loggedIn === true) {
        return(<Redirect to="/home"/>)
    }

    // Otherwise, show the registration form
    else {
        return(
            <div class = "masthead">
                <div>
                    <NavBar />
                </div>
                <div> 
                    <div className="container" style={{position: 'relative', bottom: '180px'}}>
                        <div className="row">
                            <div className="col-sm" 
                                 style={{maxWidth: '400px', margin: '0 auto'}}>
                                <div>

                                <div className="form-group">
                                    <label style={{color:'white'}}>
                                        <b>Username</b>

                                    </label>

                                    <input 
                                    ref={(comp)=>usernameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="username"/>
                                    {
                                            state.messages.indexOf("Please enter a valid username") > -1 &&
                                            <div class="alert alert-danger" role="alert">
                                                {
                                                   <p> Please enter a valid username </p>
                                                }
                                            </div>
                                            
                                    }
                                </div>


                                <div className="form-group" style={{color:'white'}}>
                                    <label>
                                        <b>Password</b>
                                    </label>

                                    <input 
                                    ref={(comp)=>passwordField = comp}
                                    type="password" 
                                    className="form-control" 
                                    aria-describedby="password"/>

                                    {
                                            state.messages.indexOf("Please enter a valid password") > -1 &&
                                            <div class="alert alert-danger" role="alert">
                                                {
                                                   <p> Please enter a valid password </p>
                                                }
                                            </div>
                                            
                                    }
                                </div>

                                <button
                                style={{backgroundColor: 'rgb(248, 179, 29)'}}
                                onClick={loginUser}
                                type="button"
                                className="btn btn-primary"><b>Login</b>
                                </button>
                                <p style={{color:'lightgray'}}>Don't have an account?<a style={{color:'blue'}} href="/register"> Register</a> </p>
                                <br/><br/>
                                
                                <footer><div></div></footer>    
                                

                                {
                                 state.loading && 
                                 <div className="loader">
                                    <svg className="circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;
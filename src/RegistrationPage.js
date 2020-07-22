import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { validEmail, validPassword } from './utils'; 
import NavBar from './NavBar.js';

const RegistrationPage = () => {

    const [state, setState] = useState(
        {
            registered: false,
            loading: false,
            errors: 0,
            messages: []
        }
    );

    // These will be assigned values by React
    let firstNameField;
    let lastNameField;
    let usernameField;
    let emailField;
    let passwordField;

    const registerUser = () => {
        // console.log(
        //     firstNameField.value,
        //     lastNameField.value,
        //     emailField.value,
        //     passwordField.value
        // )

        let errors = 0;
        let messages = [];

        if(firstNameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid first name')
        }
        if(lastNameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid last name')
        }
        if(usernameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid username')
        }
        if(!validEmail(emailField.value)) {
            errors++;
            messages.push('Please enter a valid email')
        }
        if(!validPassword(passwordField.value)) {
            errors++;
            messages.push('Please enter a valid password')
        }

        // If user makes any mistake
        if(errors > 0) {
            setState(
                {
                    ...state,
                    errors: errors,
                    messages: messages,
                }
            )
            return;
        } 
        // If no mistake occurs, reset the errors
        else {
            setState(
                {
                    ...state,
                    errors: 0,
                    messages: [],
                    loading: true
                }
            )
        }

        fetch(`${process.env.REACT_APP_API_URL}users/register`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
                const { message } = json;
                if(message === "User has been saved") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true,
                            loading: false
                        }
                    )
                } else {
                    //alert("Please check all the fields");
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )
    }

    // If the user is registered, redirect them
    if(state.registered === true) {
        return (<Redirect to="/login"/>)
    }

    // Otherwise, show the registration form
    else {
        return(
            <div class = "masthead">
            <div>
                <NavBar />
            </div>
            <div> 
                <div className="container" style={{position: 'relative', bottom: '260px'}}>
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label style={{color:'white'}}>
                                        <b>First Name</b>
                                    </label>

                                    <input 
                                    ref={(comp)=>firstNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="firstName"/>
                                                                        {
                                            state.messages.indexOf("Please enter a valid first name") > -1 &&
                                            <div class="alert alert-danger" role="alert">
                                                {
                                                   <p> Please enter a valid first name </p>
                                                }
                                            </div>
                                            
                                    }
                                </div>

                                <div className="form-group">
                                    <label style={{color:'white'}}>
                                        <b>Last Name</b>
                                    </label>

                                    <input 
                                    ref={(comp)=>lastNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="lastName"/>
                                    {
                                            state.messages.indexOf("Please enter a valid last name") > -1 &&
                                            <div class="alert alert-danger" role="alert">
                                                {
                                                   <p> Please enter a valid last name </p>
                                                }
                                            </div>
                                            
                                    }
                                    
                                </div>

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

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" style={{color:'white'}}>
                                        <b>Email address</b>
                                    </label>

                                    <input 
                                    ref={(comp)=>emailField = comp}
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"/>

                                    <small id="emailHelp" style={{color:'lightgray'}}>We'll never share your email with anyone else.</small>
                                    {
                                            state.messages.indexOf("Please enter a valid email") > -1 &&
                                            <div class="alert alert-danger" role="alert">
                                                {
                                                   <p> Please enter a valid email </p>
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

                                    <small id="emailHelp" style={{color:'lightgray'}}>Have a length of 8, a capital letter and a number</small>
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
                                onClick={registerUser}
                                type="button"
                                className="btn btn-primary"><b>Register</b>
                                </button>
                                <p style={{color:'lightgray'}}>Already have an account?<a style={{color:'blue'}} href="/login"> Login</a> </p>
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

export default RegistrationPage;
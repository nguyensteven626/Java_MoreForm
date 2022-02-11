import React, { useState } from  'react';
    

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateFirstName =(e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <1) {
            setFirstError("First Name is required");
        } else if(e.target.value.length < 3) {
            setFirstError("First Name must be 3 characters or longer");
        }
    }

    const validateLastName =(e) => {
        setLastName(e.target.value);
        if(e.target.value.length <1) {
            setLastError("Last Name is required");
        } else if(e.target.value.length < 3) {
            setLastError("Last Name must be 3 characters or longer");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email must be required");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <1) {
            setPasswordError("Password must be required")
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters long")
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length !== password) {
            setConfirmPasswordError("Password must match");
        }else {
            setConfirmPasswordError("")
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ validateFirstName } />
                {firstError}
                {
                    firstError ?
                    <p> {firstError} </p> : ''
                }
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ validateLastName } />
                {lastError}
                {
                    lastError ?
                    <p> {lastError} </p> : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ validateEmail } />
                {emailError}
                {
                    emailError ?
                    <p> {emailError} </p> : ''

                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ validatePassword } />
                {passwordError}
                {
                    passwordError ?
                    <p> {passwordError} </p> : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="password" onChange={ validateConfirmPassword } />
                {confirmPasswordError}
                {
                    confirmPasswordError ?
                    <p> {confirmPasswordError} </p> : ''
                }
            </div>
            <input type="submit" value="Create User" />
            <br/>
            First name: {firstName}
            <br/>
            Last Name: {lastName}
            <br/>
            Email Address: {email}
            <br/>
            Password: {password}
            <br/>
            Confirm Password: {confirmPassword}
        </form>
        
    );
};
    
export default UserForm;
import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';
const SignInButton = () => {
    return (
        <span>
       <Link className="signInButton" to="/account/signIn">Sign In</Link>
       </span>
    );
};

export default SignInButton;
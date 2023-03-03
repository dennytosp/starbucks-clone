import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';
const SignUpButton = () => {
    return (
        <span>
        <Link className="signUpButton" to="/account/create">Join Now</Link>
        </span>
    );
};

export default SignUpButton;
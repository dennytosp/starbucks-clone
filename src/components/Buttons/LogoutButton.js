import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/user/userSlice';
import { auth } from '../../Firebase/firebase.config';
import './buttons.css';
const LogoutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    const logoutOfApp = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
                dispatch(logout())
                navigate('/');
              }).catch((error) => alert(error.message))
    }
    return (
        <button className='logoutButton' onClick={logoutOfApp}>
        Log Out
      </button>
    );
};

export default LogoutButton;
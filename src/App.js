import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import './App.css';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './Firebase/firebase.config';
import FeaturedScreen from "./screens/FeaturedScreen/FeaturedScreen";
import Home from './screens/Home/Home';
import LoginScreen from './screens/Login/LoginScreen';
import MenuScreen from "./screens/MenuScreen/MenuScreen";
import SignUpScreen from "./screens/SignupScreen/SignUpScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth,(userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account/signIn" element={
          user ? <Navigate replace to='/menu' /> :
          <LoginScreen />} />
          <Route exact path="/account/create" element={
          user ? <Navigate replace to='/menu' /> :
          <SignUpScreen />} />
          <Route exact path="/menu" element={!user?<Navigate replace to='/account/signIn' /> : <MenuScreen/>} />
          <Route exact path="/menu/featured" element={!user?<Navigate replace to='/account/signIn' /> : <FeaturedScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// npm run build && firebase deploy
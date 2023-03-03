import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import TextField from '@mui/material/TextField';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../features/user/userSlice';
import { auth } from '../../Firebase/firebase.config';
import FormSubmit from "./FormSubmit";
import './SignInform.css';

const SignInForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [passwordShow,setPasswordShow] = React.useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const onSubmit = (data )=>{
        console.log(data);
        signInWithEmailAndPassword(auth,data.email,data.password).then((userAuth) => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              })
            )
            navigate('/menu');
          })
          .catch((error) => alert(error.message))
    }
    return (
    
        <form className="signIn__form" onSubmit={handleSubmit(onSubmit)}>
         <div className="loginScreen__inputContainer">
             <TextField  
             label="Email Address"
             variant="standard"
            name='email' 
            type='email' 
            InputLabelProps={{style:{color:"rgba(0,0,0,.56)"}}} 
            InputProps={{style:{fontWeight:"800"}}}className="loginScreen__input"
             {...register('email',{required:true})}
            />
            {errors.email && (
                <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
              )}
              </div>
         <div className="loginScreen__inputContainer">
             <TextField  
             label="Password" 
             variant="standard" 
            name='password' 
            type={passwordShow ? 'text' : 'password'}
            InputLabelProps={{style:{color:"rgba(0,0,0,.56)"}}} 
            InputProps={{style:{fontWeight:"800"}}}className="loginScreen__input"
            {...register('password',{required:true})}
            />
            {passwordShow?(
                <VisibilityOutlinedIcon
                onClick={() => setPasswordShow(!passwordShow)}
                className="loginScreen__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShow(!passwordShow)}
                className="loginScreen__visibilityIcon"
              />
            )}

            {errors.password && (
                <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
              )}
              </div>
              <div className="loginScreen__resetLinks">
                <Link to='/account/reset'>Forgot your username?</Link>
                <Link to='/account/reset'>Forgot your password?</Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>

    
    );
};

export default SignInForm;
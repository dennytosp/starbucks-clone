import { Link } from "react-router-dom";
import FooterSecondary from "../../components/FooterSecondary/FooterSecondary";
import SignInForm from "../../components/Form/SignInForm";
import './LoginScreen.css';
const LoginScreen = () => {
    return (
        <div className='loginScreen'>
            <div className="loginScreen__left">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" srcset="" />
                </Link>
                <div className="loginScreen__info">
                    <h1>Sign on or create an account</h1>
                </div>
            </div>
            <div className="loginScreen__right">
                <SignInForm />
                <div className="loginScreen__rewards">
          <h4>JOIN STARBUCKS® REWARDS</h4>
        </div>
        <div className="loginScreen__joinNow">
          <div className="loginScreen__joinNowContainer">
            <Link to="/account/create">Join now</Link>
            <h4>Create an account and bring on the Rewards!</h4>
            <p>
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
            </div>
        </div>
    );
};

export default LoginScreen;
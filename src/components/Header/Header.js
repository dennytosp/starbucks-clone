import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/user/userSlice';
import LogoutButton from '../Buttons/LogoutButton';
import SignInButton from '../Buttons/SignInButton';
import SignUpButton from '../Buttons/SignUpButton';
import FindStore from '../FindStore/FindStore';
import { Example } from '../FramerMotion/Example';
import './Header.css';
const Header = ({menuPage}) => {
    const user = useSelector(selectUser)
    return (
        <div className={`header ${menuPage && 'header__menuPage'}`}>
                <div className="header__left">
                    <Link className="header__logo" to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" srcset="" />
                    </Link>
                    <Link className="header__link" to="/menu">
                    Menu
                    </Link>   
                    <Link className="header__link" to="/">
                    Rewards
                    </Link>   
                    <Link className="header__link" to="/">
                    Gift Cards
                    </Link>   
                     
                </div>
                <div className="header__right">
                    <Example/>
                    <FindStore/>
                    {/* USER HERE */}
                    {!user?(
                        <>
                        <Link className="header__link" to="/account/signIn">
                            <SignInButton />
                        </Link>
                        <Link className="header__link" to="/account/create">
                            <SignUpButton />
                        </Link>
                        </>
                    ):(
                        <div className="header__logout">
                            {menuPage?<LogoutButton />: <Link to='/menu' >Order Now</Link>}
                        </div>
                    )}
                </div>
           </div>
    );
};

export default Header;
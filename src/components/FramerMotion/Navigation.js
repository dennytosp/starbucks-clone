import { motion } from "framer-motion";
import * as React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import LogoutButton from "../Buttons/LogoutButton";
import SignInButton from "../Buttons/SignInButton";
import SignUpButton from "../Buttons/SignUpButton";
import FindStore from "../FindStore/FindStore";
import MenuLink from "./MenuLink";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = ({toggle}) => {
  const [showMenuCatagories, setShowMenuCatagories] = React.useState(false);
  const user = useSelector(selectUser);
  return (
    <>
    {showMenuCatagories?(
  <motion.ul variants={variants}>
      <MenuLink link="Menu" path='/' goBackIcon onClick={()=>{setShowMenuCatagories(false)}} width="60%"/>
      <MenuLink link="All Products" path='/menu' onClick={()=>{setShowMenuCatagories(false)
      toggle()
      }} />
      <MenuLink link="Featured" path="/menu/featured" onClick={()=>{setShowMenuCatagories(false)
      toggle()
      }} />
      <MenuLink link="Previous Order" path="/" onClick={()=>{setShowMenuCatagories(false)
      toggle()
      }} />
      <MenuLink link="Favorite Products" path="/" onClick={()=>{setShowMenuCatagories(false)
      toggle()
      }} />
  </motion.ul>
    ):(
      <motion.ul variants={variants}>
        <MenuLink link="Menu" path='/' icon onClick={()=>{setShowMenuCatagories(true)}} />
        <MenuLink link="Rewards" path='/'  />
        <MenuLink link="Gift Cards" path='/' />
        <motion.hr variants={variants2} path='/' />
        <motion.div className='navigation__buttons' variants={variants2}>
          {/* we need user here */}
          {!user?(
            <>
              <SignInButton/>
              <SignUpButton/>
            </>
          ):(
            <LogoutButton/>
          )}
        </motion.div>
        <motion.div  variants={variants2}>
          <FindStore />
        </motion.div>

      </motion.ul>
    )}
  </>
  )}

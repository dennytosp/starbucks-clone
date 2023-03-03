import React from 'react';
import Header from '../../components/Header/Header';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuList from '../../components/MenuList/MenuList';
import useMenu from '../../hooks/useMenu';
import './MenuScreen.css';


const MenuScreen = () => {
 
    const menuList = useMenu();

    return (
       <>
           <Header menuPage />
           <div className="menuScreen">
               <MenuHeader />
                <div className="menuScreen__container">
                    <div className="menuScreen__left">
                        <MenuList />
                    </div>
                    <div className="menuScreen__right">
                        <h1>Menu</h1>
                        <div className="menuScreen__category">
                            <h2>Drinks</h2>
                            <div className="menuScreen__items">
                            {menuList.map(menuListCategory => (menuListCategory.drinks.map(({type,path,image}) => (
                                <MenuItem type={type} path={path} image={image} key={type} />
                            ))))}
                            </div>
                        </div>
                        <div className="menuScreen__category">
                            <h2>Foods</h2>
                            <div className="menuScreen__items">
                            {menuList.map(menuListCategory => (menuListCategory.food.map(({type,path,image}) => (
                                <MenuItem type={type} path={path} image={image} key={type} />
                            ))))}
                            </div>
                        </div>
                        <div className="menuScreen__category">
                            <h2>At Home Coffee</h2>
                            <div className="menuScreen__items">
                            {menuList.map(menuListCategory => (menuListCategory.atHomeCoffee.map(({type,path,image}) => (
                                <MenuItem type={type} path={path} image={image} key={type} />
                            ))))}
                            </div>
                        </div>
                        <div className="menuScreen__category">
                            <h2>Merchandise</h2>
                            <div className="menuScreen__items">
                            {menuList.map(menuListCategory => (menuListCategory.merchandise.map(({type,path,image}) => (
                                <MenuItem type={type} path={path} image={image} key={type} />
                            ))))}
                            </div>
                        </div>
                    </div>
                </div>
             </div>
       </>
    );
};

export default MenuScreen;
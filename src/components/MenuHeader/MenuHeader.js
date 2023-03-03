import React from 'react';
import { Link } from 'react-router-dom';
import './MenuHeader.css';
const MenuHeader = () => {
    const [index,setIndex] = React.useState(0);
    return (
        <div className="menuHeader">
            <div className="menuHeader__links">
                <Link to='/menu' className={`${index===0 && "menuHeader__link--active"}`} onClick={()=>setIndex(0)}>All Products</Link>
                <Link to='/menu/featured' className={`${index===1 && "menuHeader__link--active"}`} onClick={()=>setIndex(1)}>Featured</Link>
                <Link to='/menu/PreviousOrders' className={`${index===2 && "menuHeader__link--active"}`} onClick={()=>setIndex(2)}>Previous Orders</Link>
                <Link to='/favoriteProducts'className={`${index===3 && "menuHeader__link--active"}`} onClick={()=>setIndex(3)}>Favorite Products</Link>
            </div>
        </div>
    );
};

export default MenuHeader;
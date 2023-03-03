import React from 'react';
import { Link } from 'react-router-dom';
import './Featured.css';
const Featured = ({title,info,link,path,image,background,color,className,order}) => {
    return (
        <div className='featured' style={{ background }}>
      <div className='featured__left' style={{ order, color }}>
        <h1>{title}</h1>
        <h4>{info}</h4>
        <Link to={path} className={className}>
          {link}
        </Link>
      </div>
      <div className='featured__right'>
        <img src={image} alt='' />
      </div>
    </div>
    );
};

export default Featured;
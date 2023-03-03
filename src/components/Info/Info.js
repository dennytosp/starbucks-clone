import React from 'react';
import { Link } from 'react-router-dom';
import './info.css';
const Info = ({title,image,info,link,color,background,className,path}) => {
    return (
        <div
      className='info'
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt='' className='info__image' />
      <div className='info__text'>
        <h4>{title}</h4>
        <h6>{info}</h6>
        <Link to={path} style={{ color }} className={className}>
          {link}
        </Link>
      </div>
    </div>
    );
};

export default Info;
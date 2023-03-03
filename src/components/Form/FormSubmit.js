import React from 'react';
import './FromSubmit.css';
const FormSubmit = ({name,type,onClick}) => {
    return (
        <button className='formSubmit' type={type}>
        {name}
      </button>
    );
};

export default FormSubmit;
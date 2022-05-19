import React from 'react';
import './Header.css';



// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
       <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <h2>Jonathan Silva Programador Front-End Jr</h2>
                </a>

            </div>
       </header> 
    );
}













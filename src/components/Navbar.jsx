import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>

        <div className='img'>

            <img src="../public/images/brand_logo.png" alt="logo" />
        </div>
        <div className='mid'>

            <ul>
                <li>
                    <a href="#">
                        MENU
                    </a>
                </li>
                <li>
                    <a href="#">
                        LOCATION
                    </a>
                </li>
                <li>
                    <a href="#">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#">
                        CONTACT
                    </a>
                </li>
                
            </ul>


        </div>
        <div className='btn'>

            <button className='btnClass'>Login</button>
        </div>
    </div>
  );
};

export default Navbar;
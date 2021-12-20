import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/download.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory Here</a>
            </div>
            <div className='search-box'>
                <input type="text" placeholder='type here to search' />
                <span> <FontAwesomeIcon icon={faShoppingCart}/> {props.button} </span>
            </div>
        </div>
    );
};

export default Header;
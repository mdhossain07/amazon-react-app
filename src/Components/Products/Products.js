import React, { useState } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react/cjs/react.production.min';

const Products = (props) => {
    const {name, img, seller, price, stock} = props.info;
    return (
        <div className='products-info'>
            <div>
                <img src={img} alt="" />
            </div>
           
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <p>By: {seller}</p>
                <h4>Price: {price} </h4>
                <p>Only {stock} stocks left - Order Soon</p>
                <button className='product-button' onClick={ () => props.cart(props.info)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>
            </div>

        </div>
    );
};

export default Products;
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import './Shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Shop = () => {

    const fewProducts = fakeData.slice(0,15);
    const [proudcts, setProducts] = useState(fewProducts);
    const [cart, setCart] = useState([]);
    
    function cartButton (info) {//console.log('Button Clicked. ', info);
        const newCart = [...cart, info];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                    {
                        proudcts.map(proudct => 
                        <Products info = {proudct} cart = {cartButton}> </Products>)
                    }
            </div>

            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>

            {/* <div>
                <Header button = {cartButton}></Header>
            </div> */}
            
        </div>
    );
};

export default Shop;    
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    let price = 0;

    cart.forEach(element => {
        price = element.price;
        total = total + element.price;
    });

    let shipping = 0;

    if (total > 35){
        shipping = 0; 
    }
    else if(total > 15){
        shipping = 5;
    }
    else if(total > 0){
        shipping = 10;
    }

    const tax = total / 10;

    return (
        <div>
            <div className='heading'>
                <h3>Order Summary </h3>
                <p>Items Ordered : {cart.length}</p>
            </div>
            
            <div className='details'>
                <p> Product Price: <span> ${price} </span> </p>
                <p> Shipping Cost: <span> ${shipping} </span></p>
                <p> Estimated Tax: <span> ${tax.toFixed(2)} </span> </p>
                <p className='order'> Order Total: <span> ${(total+shipping+tax).toFixed(2)} </span></p>
                <button className='review'>Review Your Order</button>
            </div>
            
        </div>
    );
};

export default Cart;
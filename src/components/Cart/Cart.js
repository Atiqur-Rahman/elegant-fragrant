import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(item);
    return (
        <div className="cart">
            <h2>Selected Products</h2>
            <div className="cart-item">
                {cart.map((item) => (
                    <div className="item-info">
                        <p style={{ display: 'inline' }}>
                            <img src={item.img} alt="" />
                            <span>{item.name}</span>
                        </p>
                        <p style={{ position: 'absolute', right: '320px' }}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;

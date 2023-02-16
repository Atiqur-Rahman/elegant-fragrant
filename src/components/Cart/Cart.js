import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleDeleteItemFromCart, handleRemoveAllFromCart, handleSelectOneFromCart }) => {
    console.log(cart);
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
                        <p className="icon" onClick={() => handleDeleteItemFromCart(item)} style={{ position: 'absolute', left: '230px' }}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </p>
                    </div>
                ))}
            </div>
            <button onClick={handleSelectOneFromCart} type="button" className="btn btn-primary">
                CHOOSE 1 FOR ME
            </button>
            <br />
            <button onClick={handleRemoveAllFromCart} type="button" className="btn btn-danger">
                CHOOSE AGAIN
            </button>
        </div>
    );
};

export default Cart;

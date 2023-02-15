import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img } = product;

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="" style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}$</p>
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                        <p className="d-inline text-white me-2">Add to Cart</p>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;

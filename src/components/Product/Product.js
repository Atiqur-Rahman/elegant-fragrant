import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, img } = product;
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="" style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}$</p>
                    <a href="/btn" className="btn btn-primary">
                        <p className="d-inline text-white me-2">Add to Cart</p>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Product;

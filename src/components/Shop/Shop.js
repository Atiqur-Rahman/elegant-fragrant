import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';
import Question from '../Question/Question';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('perfume.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        const exists = cart.find((product) => product.id === selectedProduct.id);
        let newCart = [...cart];
        if (!exists) {
            if (newCart.length < 4) {
                newCart = [...cart, selectedProduct];
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Can't Select more than 4!",
                });
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Ohh...',
                text: 'You have already selected this product',
            });
        }
        setCart(newCart);
    };

    const handleDeleteItemFromCart = (deletedProduct) => {
        console.log(deletedProduct);
        const trash = cart.find((product) => product.id === deletedProduct.id);
        const index = cart.indexOf(trash);
        if (index > -1) {
            cart.splice(index, 1);
        }
        let updatedCart = [...cart];
        setCart(updatedCart);
    };

    const handleRemoveAllFromCart = () => {
        let updatedCart = [];
        setCart(updatedCart);
    };

    const handleSelectOneFromCart = () => {
        const selectedOne = Math.floor(Math.random() * cart.length);
        const updateCart = [cart[selectedOne]];

        setCart(updateCart);
    };

    return (
        <div className="shop-container">
            <div>
                <div className="product-container">
                    {products.map((product) => (
                        <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>
                    ))}
                </div>
                <Question></Question>
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleDeleteItemFromCart={handleDeleteItemFromCart} handleRemoveAllFromCart={handleRemoveAllFromCart} handleSelectOneFromCart={handleSelectOneFromCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

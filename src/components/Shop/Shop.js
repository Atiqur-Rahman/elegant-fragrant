import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';
import Question from '../Question/Question';
import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('perfume.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        const exists = cart.find((product) => product.id === selectedProduct.id);
        let newCart = [...cart];
        if (!exists) {
            console.log(newCart.length);
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
        addToDb(selectedProduct.id);
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
        removeFromDb(deletedProduct.id);
    };

    const handleRemoveAllFromCart = () => {
        let updatedCart = [];
        setCart(updatedCart);
        deleteShoppingCart();
    };

    const handleSelectOneFromCart = () => {
        const selectedOne = Math.floor(Math.random() * cart.length);
        const updateCart = [cart[selectedOne]];

        setCart(updateCart);
        deleteShoppingCart();
        addToDb(cart[selectedOne].id);
    };

    return (
        <div className="shop-container">
            <div>
                <div className="product-container">
                    {products.map((product) => (
                        <div>
                            <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>
                        </div>
                    ))}
                </div>
                <div className="product-question">
                    <Question></Question>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleDeleteItemFromCart={handleDeleteItemFromCart} handleRemoveAllFromCart={handleRemoveAllFromCart} handleSelectOneFromCart={handleSelectOneFromCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

"use client";

import React from 'react';
import { CartItem } from "@/app/components/Interface"; 
import { FaTrash } from 'react-icons/fa'; 

const CartPage = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [thankYouMessage, setThankYouMessage] = React.useState<string | null>(null);

    const updateCart = (updatedCart: CartItem[]) => {
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (id: string) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const incrementQuantity = (id: string) => {
        const updatedCart = cartItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decrementQuantity = (id: string) => {
        const updatedCart = cartItems.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        updateCart(updatedCart);
    };

    const confirmOrder = () => {
        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        setThankYouMessage("Thank you for shopping with us! Your order is confirmed and will be delivered soon.");
        setCartItems([]);
        localStorage.removeItem('cart');
        setShowConfirmation(false);
    };

    const continueShopping = () => {
        window.location.href = '/';
    };

    return (
        <div className="max-w-5xl mx-auto mt-36 p-4">
            <h1 className="text-4xl font-bold mb-6 text-myRed">Shopping Cart</h1>
            
            {thankYouMessage ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md shadow-md mb-4">
                    {thankYouMessage}
                </div>
            ) : (
                <>
                    {cartItems.length === 0 ? (
                        <p className='text-myRed font-bold text-2xl'>Your cart is empty.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            {/* Desktop Table for screens 640px and above */}
                            <table className="hidden sm:table w-full bg-white border border-gray-200 shadow-lg rounded-lg">
                                <thead className="bg-myRed text-white">
                                    <tr className='text-white text-center p-4 font-semibold'>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Weight</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id} className="border-b">
                                            <td className="p-4 flex items-center space-x-4">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                                <span className="font-semibold text-gray-800">{item.title}</span>
                                            </td>
                                            <td className="p-4 text-gray-600 text-center">
                                                <button 
                                                    onClick={() => decrementQuantity(item.id)} 
                                                    className="bg-gray-300 p-2 rounded-full text-myRed hover:bg-gray-400"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button 
                                                    onClick={() => incrementQuantity(item.id)} 
                                                    className="bg-gray-300 p-2 rounded-full text-myRed hover:bg-gray-400"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td className="p-4 text-gray-600 text-center">{item.weight} lbs</td>
                                            <td className="p-4 text-gray-600 text-center">${item.price.toFixed(2)}</td>
                                            <td className="p-4 font-semibold text-gray-800 text-center">${(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="p-4 text-center">
                                                <button 
                                                    onClick={() => removeFromCart(item.id)} 
                                                    className="text-myRed hover:text-gray-500 transition"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Mobile Card Layout for screens below 640px */}
                            <div className="sm:hidden mt-4 space-y-4">
                                {cartItems.map(item => (
                                    <div 
                                        key={item.id} 
                                        className="bg-white border border-gray-200 rounded-lg shadow-lg p-4"
                                    >
                                        <div className="flex items-center space-x-4 mb-4">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                            <span className="text-xl font-semibold text-gray-800">{item.title}</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                                            <span className="font-semibold">Quantity:</span>
                                            <div className="flex items-center">
                                                <button 
                                                    onClick={() => decrementQuantity(item.id)} 
                                                    className="bg-gray-300 p-1 rounded-full text-myRed hover:bg-gray-400"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button 
                                                    onClick={() => incrementQuantity(item.id)} 
                                                    className="bg-gray-300 p-1 rounded-full text-myRed hover:bg-gray-400"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <span className="font-semibold">Weight:</span>
                                            <span>{item.weight} lbs</span>

                                            <span className="font-semibold">Price:</span>
                                            <span>${item.price.toFixed(2)}</span>

                                            <span className="font-semibold">Total:</span>
                                            <span className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                        <div className="mt-4 text-right">
                                            <button 
                                                onClick={() => removeFromCart(item.id)} 
                                                className="text-myRed font-medium hover:text-gray-500 transition flex items-center justify-end space-x-2"
                                            >
                                                <FaTrash />
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {cartItems.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-4 pb-10 sm:justify-between">
                            <button 
                                onClick={continueShopping} 
                                className="bg-myRed hover:bg-gray-500 transition text-white font-semibold px-5 py-3 rounded-md w-full sm:w-auto shadow-md"
                            >
                                Continue Shopping
                            </button>
                            <button 
                                onClick={confirmOrder} 
                                className="bg-myRed hover:bg-gray-500 transition text-white font-semibold px-5 py-3 rounded-md w-full sm:w-auto shadow-md"
                            >
                                Confirm Order
                            </button>
                        </div>
                    )}
                </>
            )}

            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white rounded-lg p-6 shadow-xl w-11/12 max-w-sm sm:max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Confirm Order</h2>
                        <p className="text-gray-700">Are you sure you want to confirm your order?</p>
                        <div className="mt-4 flex justify-between">
                            <button 
                                onClick={handleConfirm} 
                                className="bg-myRed hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
                            >
                                Yes
                            </button>
                            <button 
                                onClick={() => setShowConfirmation(false)} 
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-md"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;

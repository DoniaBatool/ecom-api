"use client";
import React, { useEffect, useState } from 'react';
import { CakeItem } from "@/app/components/Interface";
import Image from 'next/image';
import Link from 'next/link';

const DetailPage = ({ params }: { params: { id: string } }) => {
    const [cake, setCake] = useState<CakeItem | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchCake = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/cakes');
                if (!res.ok) {
                    throw new Error("Failed to fetch cakes");
                }
                const cakes: CakeItem[] = await res.json();
                const foundCake = cakes.find((item) => item.id === params.id);

                if (foundCake) {
                    setCake(foundCake);
                    setSelectedImage(foundCake.image[0]);
                } else {
                    setError("Cake not found!");
                }
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchCake();
    }, [params.id]);

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const addToCart = () => {
        if (cake) {
            const newItem = {
                id: cake.id,
                title: cake.title,
                image: cake.image[0],
                quantity: quantity,
                weight: cake.weight,
                price: cake.price,
            };
    
            const existingCart = localStorage.getItem('cart');
            const cartItems = existingCart ? JSON.parse(existingCart) : [];
            cartItems.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cartItems));
    
            // Emit custom event to update cart count
            window.dispatchEvent(new Event('cartUpdated'));
    
            setSuccessMessage("Item added to cart!");
        }
    };
    
    if (error) {
        return <div><h1>{error}</h1></div>;
    }

    if (!cake) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <div className="container mx-auto p-4 mt-36">
            {/* Success Modal */}
            {successMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-md text-center">
                        <h2 className="text-xl font-bold text-myRed mb-4">Success!</h2>
                        <p>{successMessage}</p>
                        <button
                            onClick={() => setSuccessMessage(null)}
                            className="mt-4 bg-myRed text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Main Layout Container */}
            <div className="flex flex-col sm:flex-row gap-8">
                {/* Main Image Section and slider */}
                <div className='flex flex-col w-full sm:w-1/2 mb-6 sm:mb-0'>
                    <div>
                        <Image
                            src={selectedImage || cake.image[0]} 
                            alt="cake image"
                            layout="responsive"
                            width={700}
                            height={500}
                            className="rounded-md shadow-md object-cover"
                        />
                    </div>
                    <div className="overflow-hidden mt-6">
                        <div className="flex gap-2 xl:gap-4">
                            {cake.image.map((img, index) => (
                                <div 
                                    key={index} 
                                    className="flex-none w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 cursor-pointer"
                                    onClick={() => setSelectedImage(img)} // Set selected image on click
                                >
                                    <Image
                                        src={img}
                                        alt={`image ${index}`}
                                        width={100}
                                        height={100}
                                        className="rounded-md object-cover items-center shadow-lg w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col lg:w-1/2 justify-between p-6">
                    <h1 className="text-3xl font-semibold text-myRed">{cake.title}</h1>
                    <p className="text-lg text-gray-900 mt-4">{cake.description}</p>

                    {/* Weight Info */}
                    <div className="mt-6">
                        <span className="text-lg font-semibold">Weight: {cake.weight} lbs</span>
                    </div>

                    {/* Price Info */}
                    <div className="flex items-center mt-6">
                        <span className="text-3xl font-semibold text-myRed">${cake.price}</span>
                    </div>

                    {/* Quantity and Buttons */}
                    <div className="mt-6 flex items-center gap-2">
                        <label className="ml-2">Qty</label>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleQuantityChange(quantity - 1)}
                                className="px-2 py-1 bg-gray-200 rounded-md"
                                disabled={quantity === 1}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="w-12 h-10 border border-gray-300 rounded-md text-center"
                                value={quantity}
                                min={1}
                                max={10}
                                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                            />
                            <button
                                onClick={() => handleQuantityChange(quantity + 1)}
                                className="px-2 py-1 bg-gray-200 rounded-md"
                                disabled={quantity === 10}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart and Checkout Buttons */}
                    <div className="mt-6 flex justify-start gap-2 whitespace-nowrap ">
                        <button onClick={addToCart} className="bg-myRed text-white px-6 py-3 rounded-md">
                            Add to Cart
                        </button>
                        <Link href="/cart">
                            <button className="bg-myRed text-white px-6 py-3 rounded-md">
                                Check Out
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
 
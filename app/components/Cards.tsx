"use client"
import React, { useEffect, useState } from 'react';
import { CakeItem } from "@/app/components/Interface";
import Link from 'next/link';

const Cards = () => {
    const [cakes, setCakes] = useState<CakeItem[]>([]);

    // Function to fetch the cake data
    const fetchCards = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/cakes", { method: "GET" });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCakes(data); // Set the fetched data into the state
        } catch (error) {
            console.error("Failed to fetch cakes:", error);
        }
    };

    // Fetch the cake data when the component mounts
    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <>
            {cakes.map((data) => (
                <div key={data.id} className='relative shadow-xl max-w-sm '>
                    
                        <div className='relative h-72 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300'>
                            <img src={data.image[0]} alt={data.title} className="w-full h-full object-contain" />
                        </div>
                    
                    <div className='p-4 space-y-2'>
                        <h1 className="text-myRed hover:text-gray-700 text-3xl font-semibold">{data.title}</h1>
                        <div className="absolute bottom-0 right-0 p-2 bg-[#F5F3FF] shadow-md">
                            <span className="text-myRed text-lg font-semibold">$ {data.price}</span>
                        </div>
                        <div className='mt-4'>
                           <Link href={`/DetailPage/${data.id}`}><button className='bg-myRed text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300'>
                                Details
                            </button></Link> 
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;

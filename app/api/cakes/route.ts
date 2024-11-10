import { NextResponse } from "next/server";
import { CakeItem } from "@/app/components/Interface";

export const cakes: CakeItem[] = [
    {
        id: "1c",
        image: ["/chococake.png", "/choco2.jpg", "/choco3.jpg"],
        title: "Chocolate Cake",
        description: "Chocolate Cake with Chocolate Ganache",
        price: 80.99,
        quantity: 1,
        weight: 1,
        selectedWeight: 1 // Add selectedWeight here
    },
    {
        id: "2c",
        image: ["/coffee.jpg", "/coffee2.jpg", "/coffee3.jpg"],
        title: "Coffee Cake",
        description: "Coffee Cake With Walnuts",
        price: 90.37,
        quantity: 1,
        weight: 1,
        selectedWeight: 1 // Add selectedWeight here
    },
    {
        id: "3c",
        image: ["/lemon.jpg", "/lemon2.jpg", "/lemon3.jpg"],
        title: "Lemon Cake",
        description: "Lemon Cake With Lemon Icing",
        price: 87.99,
        quantity: 1,
        weight: 1,
        selectedWeight: 1 // Add selectedWeight here
    },
    {
        id: "4c",
        image: ["/lotus.png", "/lotus2.jpg", "/lotus3.jpeg"],
        title: "Lotus Cake",
        description: "Lotus Cake With Cream Cheese Filling",
        price: 92.99,
        quantity: 1,
        weight: 1,
        selectedWeight: 1 // Add selectedWeight here
    },
    {
        id: "5c",
        image: ["/strawberry.jpg", "/straw2.jpeg", "/straw3.jpg"],
        title: "Strawberry Cake",
        description: "Strawberry Cake With Strawberry Cream",
        price: 80.99,
        quantity: 1,
        weight: 1,
        selectedWeight: 1 // Add selectedWeight here
    },
    {
        id: "6c",
        image: ["/redvelvet.jpg", "/velvet2.jpg", "/velvet3.jpg"],
        title: "Red Velvet Cake",
        description: "Red Velvet Cake With Cream Cheese",
        price: 86.43,
        quantity: 1,
        weight: 1,
        selectedWeight: 1 // Add selectedWeight here
    }
];

export async function GET() {
    return NextResponse.json(cakes);
}

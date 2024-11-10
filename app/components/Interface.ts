export interface CakeItem {
    selectedWeight?: number;
    id: string;
    image: string[];
    title: string;
    description: string;
    price: number;
    quantity:number;
    weight:number;
    
}
export interface CartItem {
    id: string;
    title: string;
    image: string;
    quantity: number;
    weight: number;
    price: number;
}

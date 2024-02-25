import { IProduct } from "@/interfaces/product.interface";



export const calcTotalPrice = (products: IProduct[], qtys: number[]) =>{
    let totalPrice = 0;
    products.forEach((product, index) =>{
        totalPrice+= product.price * qtys[index];
    })
    return totalPrice; 
}
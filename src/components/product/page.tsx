"use client";
import { IProduct } from "@/interfaces/product.interface";
import useCart from "@/stores/cart-store";
import { useState } from "react";

type Props = {
  item: IProduct;
};

const Product = ({ item }: Props) => {
  const { carts, addCart, increaseQty } = useCart();
  const [isChecked, setChecked] = useState(false);
  const checkProductExists = (products: IProduct[]) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].name == item.name) {
        increaseQty(i);
        return true;
      }
    }
    addCart(item, 1);
    return false;
  };
  const addProductIntoCart = () => {
    setChecked(true);
    checkProductExists(carts.products);
  };

  return (
    <li className="w-full text-[#303841] mb-[80px]">
      <div
        className={`w-full h-[280px] rounded-[28px]`}
        style={{ backgroundColor: item.color }}
      >
        <img src={item.image} className={`w-full h-ful rounded-[28px] `} />
      </div>
      <h3 className=" font-bold text-[17px] my-[13px]">{item.name}</h3>
      <p className="text-[#777777] text-[13px]">{item.description}</p>
      <div className="flex justify-between items-center my-[10px]">
        <span className="font-bold text-[16px]">${item.price}</span>
        {!isChecked ? (
          <button
            className="bg-[#F6C90E] font-bold text-[14px] rounded-[20px] px-[10px] py-[7px] flex items-center justify-center shadow-md hover:brightness-90 "
            onClick={addProductIntoCart}
          >
            ADD TO CART
          </button>
        ) : (
          <button className="bg-[#F6C90E] font-bold text-[15px] rounded-[25px] px-[10px] py-[7px] flex items-center justify-center shadow-md hover:brightness-90 animate-in slide-in-from-left duration-300">
            <img src="./check.png" className="h-[25px] w-[22px]" />
          </button>
        )}
      </div>
    </li>
  );
};

export default Product;

"use client";

import { IProduct } from "@/interfaces/product.interface";
import { useEffect, useState } from "react";
import CartItem from "../cart-item/page";
import useCart from "@/stores/cart-store";

type Props = {
  title: string;
  listCart?: IProduct[];
};

const CardRight = ({ title }: Props) => {
  const { carts, totalPrice } = useCart();
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(totalPrice());
  }, [carts]);
  return (
    <div className="md:ml-[20px] mt-[40px] md:mt-0 mb-[50px] md:mb-0 bg-white  h-[500px] w-[320px] rounded-[28px]  shadow-2xl relative animate-in spin-in-1">
      <img src="./card.png" className="w-full h-full" />
      <div className="w-full h-full absolute top-0 left-0 rounded-[28px] px-[28px] py-[12px] overflow-hidden">
        <img src="./nike.png" className="h-[30px] w-[45px] ml-[-5px]" />
        <div className="flex justify-between text-[#303841] my-[5px]">
          <h2 className="font-bold text-[18px]  ">{title}</h2>
          <h2 className="font-bold text-[20px]  ">{`$${total}`}</h2>
        </div>

        <ul className="w-[100% - 56px] h-[400px] overflow-y-scroll scrollbar-hide mt-[10px]">
          {carts.products.length > 0 ? (
            carts.products.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  qty={carts.qtys[index]}
                  id={index}
                />
              );
            })
          ) : (
            <h2 className="text-[15px]">Your cart is empty</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CardRight;

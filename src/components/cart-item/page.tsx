"use client";

import { IProduct } from "@/interfaces/product.interface";
import useCart from "@/stores/cart-store";
import { useState } from "react";

type Props = {
  item: IProduct;
  qty: number;
  id: number;
};

const CartItem = ({ item, qty, id }: Props) => {
  const { increaseQty, decreaseQty, removeCart, carts } = useCart();
  const [isDeleted, setDeleted] = useState<boolean>(false);

  const decreaseQtyProduct = () => {
    if (carts.qtys[id] == 1) removeCart(id);
    else decreaseQty(id);
  };

  const deleteCart = () => {
    setTimeout(() => {
      removeCart(id);
      setDeleted(false);
    }, 1000);
    setDeleted(true);
  };
  return (
    <li
      className={`w-full text-[#303841] mb-[40px] flex justify-between h-[100px] ${
        isDeleted ? "animate-out fade-out duration-1500" : ""
      } `}
    >
      <div
        className={`h-[90px] w-[90px] rounded-full `}
        style={{ backgroundColor: item.color }}
      >
        <img
          src={item.image}
          className=" w-[125px] -rotate-[30deg] animate-in zoom-in duration-1500 mb-[10px] -translate-y-4"
        />
      </div>

      <div className="flex flex-col justify-between ml-[5px] max-w-[160px] ">
        <h2 className="text-[13px] min-w-[160px] font-bold animate-in slide-in-from-right-96 duration-300 ">
          {item.name}
        </h2>
        <h2 className="font-bold text-[18px] animate-in slide-in-from-right-96 delay-300 ">{`$${item.price}`}</h2>
        <div className="flex justify-between items-center  ">
          <div className="flex justify-between items-center ">
            <button
              className="bg-[#E7E7E8] h-[28px] w-[28px] rounded-full flex justify-center items-center hover:brightness-90"
              onClick={() => increaseQty(id)}
            >
              <img src="./plus.png" className="h-[18px] w-[18px]" />
            </button>
            <span className="text-[14px] mx-[8px]">{qty}</span>
            <button
              className="bg-[#E7E7E8] h-[28px] w-[28px] rounded-full flex justify-center items-center hover:brightness-90"
              onClick={decreaseQtyProduct}
            >
              <img src="./minus.png" className="h-[18px] w-[18px]" />
            </button>
          </div>
          <button
            className="bg-[#F6C90E] h-[28px] w-[28px] rounded-full flex justify-center items-center hover:brightness-90"
            onClick={deleteCart}
          >
            <img src="./trash.png" className="h-[20px] w-[20px]" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

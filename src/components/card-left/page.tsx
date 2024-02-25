"use client";

import { IProduct } from "@/interfaces/product.interface";
import Product from "../product/page";
import { useEffect, useState } from "react";
import ProductService from "@/services/api/product-api";
import { Skeleton } from "antd";

type Props = {
  title: string;
};

const CardLeft = ({ title }: Props) => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await ProductService.getAllProduct();
        if (response && response.type == "Success") {
          setProduct(response.message);
        }
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="md:mr-[20px] mt-[400px] md:mt-0 bg-white  h-[500px] w-[320px] rounded-[28px]  shadow-2xl relative">
      <img src="./card.png" className="w-full h-full" />
      <div className="w-full h-full absolute top-0 left-0 rounded-[28px] px-[28px] py-[12px] overflow-hidden">
        <img src="./nike.png" className="h-[30px] w-[45px] ml-[-5px]" />
        <h2 className="font-bold text-[18px] my-[5px] text-[#303841]">
          {title}
        </h2>
        <ul className="w-[100% - 56px] h-[400px] overflow-y-scroll scrollbar-hide mt-[10px]">
          {isLoading && <Skeleton className=" bg-white" active />}
          {!isLoading &&
            products.map((item: IProduct, index: number) => {
              return <Product key={index} item={item} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default CardLeft;

import { IProduct } from '@/interfaces/product.interface';
import { calcTotalPrice } from '@/utils/calc-total-price';
import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


type Store = {
    carts: {
        products: IProduct[],
        qtys: number[]
    },
    setCart: (products: IProduct[], qtys: number[]) => void,
    addCart: (product: IProduct, qty: 1 )=>void,
    removeCart: (id: number)=>void,
    decreaseQty:(id: number) => void,
    increaseQty:(id: number) => void,
    totalPrice: ()=> number
   
}

  

const initialState={
    products: [],
    qtys:[],
}

const useCart = create<Store>()(
  persist((set, get) => ({
    carts: initialState,
    setCart: (products, qtys) =>
      set({
        carts: {
          products,
          qtys,
        },
      }),
    addCart: (product, qty) =>
      set((state) => ({
        carts: {
          products: [product, ...state.carts.products],
          qtys: [qty, ...state.carts.qtys],
        },
      })),
    removeCart: (id) =>
      set((state) => ({
        carts: {
          products: state.carts.products.filter((ele, index) => index != id),
          qtys: state.carts.qtys.filter((ele, index) => index != id),
        },
      })),
    decreaseQty: (id) =>
      set((state) => ({
        carts: {
          products: state.carts.products,
          qtys: state.carts.qtys.map((ele, index) => {
            if (index == id) return ele - 1;
            return ele;
          }),
        },
      })),
    increaseQty: (id) =>
      set((state) => ({
        carts: {
          products: state.carts.products,
          qtys: state.carts.qtys.map((ele, index) => {
            if (index == id) return ele + 1;
            return ele;
          }),
        },
      })),
    totalPrice: () => {
      const { products, qtys } = get().carts; // Lấy trạng thái hiện tại của giỏ hàng
      return parseFloat(calcTotalPrice(products, qtys).toFixed(2)); // Tính toán tổng giá trị và trả về
    },
  }),{
    name: 'storage-cart',
    storage: createJSONStorage(() => sessionStorage),

    

  })
);

export default useCart;

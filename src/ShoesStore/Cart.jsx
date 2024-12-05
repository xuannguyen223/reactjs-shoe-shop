import { Button } from "flowbite-react";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Cart = (props) => {
  const { setOpenModalCart, countProduct } = props;
  return (
    <div className="flex justify-end text-3xl fixed top-10 right-12 z-20">
      <Button
        gradientDuoTone="tealToLime"
        onClick={() => {
          setOpenModalCart(true);
        }}
      >
        <HiShoppingCart className=" h-6 w-6 text-indigo-500" />
        <span className="text-sm italic text-red-500 absolute bottom-0 left-1/2 ml-2">
          {countProduct()}
        </span>
      </Button>
      <p></p>
    </div>
  );
};

export default Cart;

import React from "react";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

const ProductItem = (props) => {
  const { detail, setProductDetail, setOpenModal, handleAddProduct } = props;
  return (
    <div className="bg-orange-100/50 p-4 rounded-md">
      <img src={detail.image} alt={detail.name} />
      <h3>{detail.name}</h3>
      <p>Price: ${detail.price}</p>
      <div className="my-4 focus:outline-none flex justify-center">
        <Button
          color="gray"
          onClick={() => {
            setProductDetail(detail);
            setOpenModal(true);
          }}
        >
          See Details
        </Button>
        <Button
          className="ml-4"
          color="blue"
          onClick={() => {
            handleAddProduct(detail);
          }}
        >
          <HiShoppingCart className="mr-2 h-5 w-5" /> Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

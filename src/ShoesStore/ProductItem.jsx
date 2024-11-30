import React from "react";
import { Button } from "flowbite-react";

const ProductItem = (props) => {
  const { detail, setProductDetail, setOpenModal } = props;
  return (
    <div>
      <img src={detail.image} alt={detail.name} />
      <h3>{detail.name}</h3>
      <p>Price: ${detail.price}</p>
      <div className="my-4 focus:outline-none flex justify-center">
        <Button
          onClick={() => {
            setProductDetail(detail);
            setOpenModal(true);
          }}
        >
          See Details
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

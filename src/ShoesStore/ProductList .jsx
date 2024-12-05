import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products, setProductDetail, setOpenModal, handleAddProduct } = props;
  const renderProduct = () => {
    return products.map((item) => {
      return (
        <ProductItem
          key={item.id}
          detail={item}
          setProductDetail={setProductDetail}
          setOpenModal={setOpenModal}
          handleAddProduct={handleAddProduct}
        />
      );
    });
  };

  return <div className="grid grid-cols-4 gap-4 mt-12">{renderProduct()}</div>;
};

export default ProductList;

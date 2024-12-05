import React, { useState } from "react";
import ProductList from "./ProductList ";
import ModalProduct from "./Modal";
import Cart from "./Cart";
import ModalCart from "./ModalCart";

const DEFAULT_NO_PRODUCT = {
  id: 0,
  name: "",
  alias: "",
  price: 0,
  description: "",
  shortDescription: "",
  quantity: 0,
  image: "",
};
const products = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 465,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 542,
    image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
  },
  {
    id: 5,
    name: "Adidas Swift Run",
    alias: "adidas-swift-run",
    price: 550,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 674,
    image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
  },
  {
    id: 6,
    name: "Adidas Tenisky Super Star",
    alias: "adidas-tenisky-super-star",
    price: 250,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 456,
    image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
  },
  {
    id: 7,
    name: "Adidas Ultraboost 4",
    alias: "adidas-ultraboost-4",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 854,
    image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
  },
  {
    id: 8,
    name: "Adidas Yeezy 350",
    alias: "adidas-yeezy-350",
    price: 750,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 524,
    image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
  },
  {
    id: 9,
    name: "Nike Adapt BB",
    alias: "nike-adapt-bb",
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 599,
    image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
  },
  {
    id: 10,
    name: "Nike Air Max 97",
    alias: "nike-air-max-97",
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 984,
    image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
  },
  {
    id: 11,
    name: "Nike Air Max 97 Blue",
    alias: "nike-air-max-97-blue",
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 875,
    image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
  },
  {
    id: 12,
    name: "Nike Air Max 270 React",
    alias: "nike-air-max-270-react",
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 445,
    image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
  },
];

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState({
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  });
  const [openModal, setOpenModal] = useState(false);
  const [openModalCart, setOpenModalCart] = useState(false);
  let [cart, setCart] = useState([]);

  const handleAddProduct = (productInfo) => {
    const productCart = { ...productInfo, orderQty: 1 };

    const prod = cart.find((item) => {
      return item.id === productCart.id;
    });

    if (prod) {
      prod.orderQty += 1;
    } else {
      cart = [...cart, productCart];
    }
    const newCart = [...cart];
    setCart(newCart);
  };

  const countProduct = () => {
    let totalOrderQuantity = 0;
    for (let item of cart) {
      totalOrderQuantity += item.orderQty;
    }
    return totalOrderQuantity;
  };

  const totalPriceProduct = () => {
    let totalPrice = 0;
    for (let item of cart) {
      totalPrice += item.orderQty * item.price;
    }
    return totalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  };

  const delProduct = (id) => {
    const delCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(delCart);
  };

  const updateOrderQuantity = (id, quantity) => {
    const prod = cart.find((item) => {
      return item.id === id;
    });
    prod.orderQty += quantity;

    if (prod.orderQty === 0) {
      if (
        window.confirm(
          `Do you want to delete the product with ID number ${id} ?`
        )
      ) {
        delProduct(id);
      } else {
        prod.orderQty = 1;
      }
      return;
    }
    const newCart = [...cart];
    setCart(newCart);
  };

  const onCloseFunction = () => {
    setProductDetail(DEFAULT_NO_PRODUCT);
    setOpenModal(false);
  };

  return (
    <div className="container">
      <Cart setOpenModalCart={setOpenModalCart} countProduct={countProduct} />
      <ModalCart
        openModalCart={openModalCart}
        setOpenModalCart={setOpenModalCart}
        cart={cart}
        countProduct={countProduct}
        totalPriceProduct={totalPriceProduct}
        delProduct={delProduct}
        updateOrderQuantity={updateOrderQuantity}
      />
      <h1 className="title">Shoe Store</h1>
      <ProductList
        products={products}
        setProductDetail={setProductDetail}
        setOpenModal={setOpenModal}
        handleAddProduct={handleAddProduct}
      />
      <ModalProduct
        content={productDetail}
        openModal={openModal}
        onCloseFunction={onCloseFunction}
      />
    </div>
  );
};

export default ShoesStore;

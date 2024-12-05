import React from "react";
import { Button, Table, Modal } from "flowbite-react";

const ModalCart = (props) => {
  const {
    openModalCart,
    setOpenModalCart,
    cart,
    countProduct,
    totalPriceProduct,
    delProduct,
    updateOrderQuantity,
  } = props;

  const rendereTrCart = () => {
    return cart.map((item) => {
      return (
        <Table.Row
          key={item.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.id}
          </Table.Cell>
          <Table.Cell>
            <img src={item.image} alt="" width={100} />
          </Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell className="flex gap-5 items-center justify-center my-8">
            <Button
              color="blue"
              onClick={() => {
                updateOrderQuantity(item.id, -1);
              }}
            >
              -
            </Button>
            {item.orderQty}
            <Button
              color="blue"
              onClick={() => {
                updateOrderQuantity(item.id, 1);
              }}
            >
              +
            </Button>
          </Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
          <Table.Cell>{item.price * item.orderQty}</Table.Cell>
          <Table.Cell className="flex items-center justify-center">
            <Button
              color="failure"
              onClick={() => {
                delProduct(item.id);
              }}
            >
              Delete
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <>
      <Modal
        size="6xl"
        show={openModalCart}
        onClose={() => {
          setOpenModalCart(false);
        }}
      >
        <Modal.Header>Modal Cart</Modal.Header>
        <div className="total text-center flex gap-6 justify-start px-5 py-2 bg-orange-100/50">
          <h2 className="text-indigo-500 font-bold capitalize">
            Total Quantity:
            <span className="text-green-500 text-xl font-normal ml-2">
              {countProduct()}
            </span>
          </h2>
          <h2 className="text-indigo-500 font-bold capitalize">
            Total Price:
            <span className="text-green-500 text-xl font-normal ml-2">
              {totalPriceProduct()}
            </span>
          </h2>
        </div>
        <Modal.Body>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head className="text-center capitalize text-black/60 text-sm">
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Subtotal</Table.HeadCell>
                <Table.HeadCell>
                  <span>Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">{rendereTrCart()}</Table.Body>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="warning"
            onClick={() => {
              setOpenModalCart(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCart;

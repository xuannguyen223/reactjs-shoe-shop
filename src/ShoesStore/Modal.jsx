import React from "react";
import { Button, Modal } from "flowbite-react";

const ModalProduct = (props) => {
  const { content, openModal, onCloseFunction } = props;

  return (
    <Modal
      show={openModal}
      onClose={() => {
        onCloseFunction();
      }}
    >
      <Modal.Header>{content.name}</Modal.Header>
      <Modal.Body>
        <div>
          <img src={content.image} alt={content.name} />
          <h2>{content.name}</h2>
          <p>{content.description}</p>
          <p>Price: ${content.price}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onCloseFunction();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProduct;

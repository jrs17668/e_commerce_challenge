import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EstimateDate(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const estimateShipping = (aProduct) => {
    var date = new Date();
    if (aProduct.shipOnWeekends === true) {
      date.setDate(new Date().getDate() + aProduct.maxBusinessDaysToShip);
      return date.toDateString();
    } else {
      date.setDate(new Date().getDate() + aProduct.maxBusinessDaysToShip + 2);
      return date.toDateString();
    }
  };
  const estimatedDate = estimateShipping(props.aProduct.aProduct);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Calculate Date
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Estimated Shipping Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>This product should arrive by: {estimatedDate}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EstimateDate;

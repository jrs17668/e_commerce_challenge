import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import EstimateDate from "./EstimateDate";

function Product(props) {
  return (
    <React.Fragment>
      <Card className="h-100 ">
        <Card.Body>
          <div className="text-center">
            <h4 className="mb-0 text-truncate">{props.aProduct.productName}</h4>
            <p className="mb-0 fs-6 text-muted">
              Product ID: {props.aProduct.productId}
            </p>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2 mt-4">
            <span>Inventory Quantity: </span>
            <span className="text-dark">
              {props.aProduct.inventoryQuantity}
            </span>
          </div>
          <div className="d-flex justify-content-between border-bottom py-2">
            <span>Ships on Weekends?:</span>
            <span className="text-warning">
              {props.aProduct.shipOnWeekends.toString()}
            </span>
          </div>
          <div className="d-flex justify-content-between pt-2">
            <span>Max Time to Ship:</span>
            <span className="text-dark">
              {props.aProduct.maxBusinessDaysToShip}{" "}
            </span>
          </div>
          <div className="d-flex justify-content-between pt-3">
            <EstimateDate aProduct={props} />
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Product;

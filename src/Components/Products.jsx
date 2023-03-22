import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Product from "./Product";

function Products() {
  const [pageData, setPageData] = useState([
    {
      productId: 1,
      productName: "fugiat exercitation adipisicing",
      inventoryQuantity: 43,
      shipOnWeekends: true,
      maxBusinessDaysToShip: 13,
    },
    {
      productId: 2,
      productName: "mollit cupidatat Lorem",
      inventoryQuantity: 70,
      shipOnWeekends: true,
      maxBusinessDaysToShip: 18,
    },
    {
      productId: 3,
      productName: "non quis sint",
      inventoryQuantity: 33,
      shipOnWeekends: false,
      maxBusinessDaysToShip: 15,
    },
    {
      productId: 4,
      productName: "voluptate cupidatat non",
      inventoryQuantity: 52,
      shipOnWeekends: false,
      maxBusinessDaysToShip: 18,
    },
    {
      productId: 5,
      productName: "anim amet occaecat",
      inventoryQuantity: 39,
      shipOnWeekends: true,

      maxBusinessDaysToShip: 19,
    },
    {
      productId: 6,
      productName: "cillum deserunt elit",
      inventoryQuantity: 47,
      shipOnWeekends: false,
      maxBusinessDaysToShip: 20,
    },
    {
      productId: 7,
      productName: "adipisicing reprehenderit et",
      inventoryQuantity: 71,
      shipOnWeekends: false,
      maxBusinessDaysToShip: 15,
    },
    {
      productId: 8,
      productName: "ex mollit laboris",
      inventoryQuantity: 80,
      shipOnWeekends: false,
      maxBusinessDaysToShip: 15,
    },
  ]);

  return (
    <React.Fragment>
      <Container className="pt-5">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="mb-5">
              <h2 className="mb-1 mt-20 ">Products</h2>
              <p className="mb-0">
                Select "Calculate date" to estimate shipping times!{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mb-6">
          {pageData.map((product) => {
            return (
              <Col
                lg={3}
                md={6}
                sm={12}
                key={"Product" + product.productId}
                className="pb-4"
              >
                <Product aProduct={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Products;

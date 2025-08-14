// src/components/order/OrderCard.jsx
import React from "react";
import { Card, Row, Col, Button, Dropdown } from "react-bootstrap";
import "./OrderCard.css"; // external CSS for speed + caching

const OrderCard = ({ order = {}, products = [] }) => {
  return (
    <article className="order-card mb-4">
      <Card>
        {/* Header */}
        <Card.Header as="header" className="order-header">
          <Row className="align-items-center">
            <Col>
              <small>ORDER PLACED</small>
              <div>{order.date || "20 October 2024"}</div>
            </Col>
            <Col>
              <small>TOTAL</small>
              <div>₹{order.total || "519.00"}</div>
            </Col>
            <Col>
              <small>SHIP TO</small>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="ship-to-toggle"
                >
                  {order.shipTo || "Customer Name"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Address 1</Dropdown.Item>
                  <Dropdown.Item>Address 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="text-end">
              <small>ORDER #</small>
              <div>{order.id || "4545"}</div>
              <div className="mt-1">
                <Button variant="outline-secondary" size="sm" className="me-2">
                  View Order Details
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Invoice
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Header>

        {/* Body */}
        <Card.Body as="section">
          <Row className="mb-3">
            <Col>
              <strong>Delivered On Date …/…/….</strong>
            </Col>
          </Row>

          <Row>
            {/* Product List */}
            <Col md={8}>
              {products.map((prod) => (
                <Row key={prod.id} className="align-items-center mb-3">
                  <Col xs={2}>
                    <img
                      src={prod.image || "/placeholder.png"}
                      alt={`${prod.name} - ${prod.variant || ""}`}
                      loading="lazy"
                      className="product-image"
                    />
                  </Col>
                  <Col>
                    <div className="product-name">{prod.name}</div>
                    <small className="text-muted">
                      {prod.variant || ""} - {prod.quantity} Piece
                    </small>
                    <div>₹{prod.price}</div>
                    {prod.oldPrice && prod.oldPrice !== prod.price && (
                      <small className="text-muted text-decoration-line-through">
                        ₹{prod.oldPrice}
                      </small>
                    )}
                  </Col>
                </Row>
              ))}
            </Col>

            {/* Action Buttons */}
            <Col
              md={4}
              className="d-flex flex-column align-items-end justify-content-start gap-2"
            >
              <Button className="btn-light-yellow">Return Item</Button>
              <Button className="btn-light-yellow">Write Product Review</Button>
              <Button className="btn-green">Reorder</Button>
            </Col>
          </Row>

          {/* Divider */}
          <hr className="mt-3 mb-3" />

          {/* Cancel Row */}
          <Row className="align-items-center">
            <Col className="text-start">
              <small className="text-danger">
                Return eligible only before shipping
              </small>
            </Col>
            <Col className="text-end">
              <Button className="btn-orange">Cancel Order</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </article>
  );
};

export default OrderCard;

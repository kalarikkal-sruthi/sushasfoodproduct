// components/OrderCard.jsx
import React from "react";
import { Card, Dropdown, Button } from "react-bootstrap";

const OrderCard = ({ order }) => {
  if (!order) {
    return null; // could also be a skeleton loader
  }

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Header
        style={{
          backgroundColor: "#fde7c1",
          padding: "0.5rem 0.75rem"
        }}
      >
        <div className="d-flex align-items-center" style={{ gap: "0.8rem", width: "100%" }}>
          <div style={{ minWidth: 160 }} className="text-nowrap">
            <small className="text-uppercase fw-bold d-block">Order placed at</small>
            <div className="fw-bold">{order?.date}</div>
          </div>

          <div style={{ minWidth: 110 }} className="text-nowrap">
            <small className="text-uppercase fw-bold d-block">Total</small>
            <div className="fw-bold">{order?.total}</div>
          </div>

          <div style={{ minWidth: 170 }} className="text-nowrap">
            <small className="text-uppercase fw-bold d-block">Ship to</small>
            <Dropdown>
              <Dropdown.Toggle variant="light" size="sm" className="py-0 px-2">
                {order?.shipTo}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {order?.addresses?.map((a, i) => (
                  <Dropdown.Item key={i}>{a}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="ms-auto text-end" style={{ minWidth: 180 }}>
            <div className="fw-bold text-uppercase">Order #{order?.id}</div>
            <div className="mt-1 d-flex justify-content-end" style={{ gap: "0.5rem" }}>
              <Button variant="outline-primary" size="sm">View order details</Button>
              <Button variant="outline-secondary" size="sm">Invoice</Button>
            </div>
          </div>
        </div>
      </Card.Header>

      <Card.Body style={{ padding: "0.75rem" }}>
        {order?.items?.length ? (
          order.items.map((it, idx) => (
            <div key={idx} className="mb-2">{it}</div>
          ))
        ) : (
          <div>No items</div>
        )}
      </Card.Body>
    </Card>
  );
};

export default OrderCard;

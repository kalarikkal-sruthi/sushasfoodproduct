// src/pages/CheckoutPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, Form } from "react-bootstrap";
import { getAddresses } from "../../store/authService";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.auth.addresses || []);
  const user = useSelector((state) => state.auth.user);

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  // Totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0; // change if you have coupon logic
  const payable = subtotal - discount;

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  useEffect(() => {
  if (addresses.length > 0 && selectedAddressId === null) {
    // Try to pick default address, else first address
    const defaultAddr = addresses.find(addr => addr.is_default);
    setSelectedAddressId(defaultAddr ? defaultAddr.id : addresses[0].id);
  }
}, [addresses, selectedAddressId]);

  const handlePlaceOrder = async () => {
    if (!selectedAddressId) {
      alert("Please select an address before placing order.");
      return;
    }

    const orderData = {
      user_id: user?.id,
      address: selectedAddressId,
      special_instructions: "", // optional
      cash_on_delivery: true,
      cart: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
        product_size_id: item.size_id || null,
        product_prize_id: item.prize_id || null,
      })),
    };

    await dispatch(createOrder(orderData));
    navigate("/orders");
  };

  return (
    <div className="padding-horizontal">
      <div className="padding-top"></div>
      <h1>Checkout</h1>
      <Row>
        {/* Cart Items */}
    <Col md={7} className="d-flex flex-column">
  <Card style={{ flex: "1 1 auto" }}>
    <Card.Header>Your Cart</Card.Header>
    <Card.Body
      style={{
        maxHeight: "400px", // limit height so it scrolls if too many items
        overflowY: "auto",  // vertical scroll only
        overflowX: "hidden",
        paddingRight: "5px",
      }}
    >
      {cartItems.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body className="d-flex align-items-center">
            <img
              src={item.image || "/placeholder.jpg"}
              alt={item.product_name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                marginRight: "15px",
              }}
            />
            <div className="flex-grow-1">
              <h5>{item.product_name}</h5>
              <p>Qty: {item.quantity}</p>
              <p>₹ {item.price}</p>
            </div>
            <div>₹ {item.price * item.quantity}</div>
          </Card.Body>
        </Card>
      ))}
    </Card.Body>
  </Card>

  {/* Sticky Totals */}
  <div
    style={{
      position: "sticky",
      bottom: 0,
      background: "#fff",
      padding: "10px 0",
      borderTop: "1px solid #ddd",
      marginTop: "10px",
    }}
  >
    <Card>
      <Card.Body>
        <Row>
          <Col>Subtotal</Col>
          <Col className="text-end">₹ {subtotal.toFixed(2)}</Col>
        </Row>
        <Row>
          <Col>Discount</Col>
          <Col className="text-end">₹ {discount.toFixed(2)}</Col>
        </Row>
        <Row>
          <Col><strong>Payable</strong></Col>
          <Col className="text-end"><strong>₹ {payable.toFixed(2)}</strong></Col>
        </Row>
      </Card.Body>
    </Card>
  </div>
</Col>

        {/* Address Selection */}
    {/* Address Selection */}

<Col md={5} className="d-flex flex-column">
  <Card style={{ flex: "1 1 auto" }}>
    <Card.Header>Delivery Address</Card.Header>
    <Card.Body
      style={{
        maxHeight: "300px", // controls vertical scroll area
        overflowY: "auto",  // vertical scroll only
        overflowX: "hidden", // no horizontal scroll
        paddingRight: "5px",
      }}
    >
      {addresses.map((addr) => (
        <Card
          key={addr.id}
          className={`p-2 mb-2 ${
            selectedAddressId === addr.id ? "border-success" : "border-light"
          }`}
          style={{
            cursor: "pointer",
            borderWidth: "2px",
          }}
          onClick={() => setSelectedAddressId(addr.id)}
        >
          <Form.Check
            type="radio"
            name="address"
            checked={selectedAddressId === addr.id}
            onChange={() => setSelectedAddressId(addr.id)}
            label={
              <>
                <strong>
                  {addr.first_name} {addr.last_name}
                </strong>
                <div style={{ fontSize: "0.9em", color: "#555" }}>
                  {addr.address}
                </div>
              </>
            }
          />
        </Card>
      ))}

      <Button
        variant="link"
        className="p-0 mt-2"
        onClick={() => navigate("/addresses")}
      >
        + Add New Address
      </Button>
    </Card.Body>
  </Card>

  {/* Sticky Button */}
  <div
    style={{
      position: "sticky",
      bottom: "0",
      background: "#fff",
      padding: "10px 0",
      marginTop: "10px",
    }}
  >
    <Button
      variant="success"
      className="w-100"
      onClick={handlePlaceOrder}
      disabled={cartItems.length === 0}
    >
      Complete Order
    </Button>
  </div>
</Col>



      </Row>
    </div>
  );
};

export default CheckoutPage;

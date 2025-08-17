// src/pages/CheckoutPage.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, Form, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { getAddresses } from "../../store/authService";

const CheckoutPage = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.auth.addresses || []);
  const user = useSelector((state) => state.auth.user);

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const { subtotal, discount, payable } = useMemo(() => {
    const subtotalCalc = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return {
      subtotal: subtotalCalc,
      discount: 0,
      payable: subtotalCalc - 0,
    };
  }, [cartItems]);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  useEffect(() => {
    if (addresses.length > 0 && selectedAddressId === null) {
      const defaultAddr = addresses.find((addr) => addr.is_default);
      setSelectedAddressId(defaultAddr ? defaultAddr.id : addresses[0].id);
    }
  }, [addresses, selectedAddressId]);

  const handlePlaceOrder = useCallback(async () => {
    if (!selectedAddressId) {
      alert("Please select an address before placing order.");
      return;
    }

    const orderData = {
      user_id: user?.id,
      address: selectedAddressId,
      special_instructions: "",
      cash_on_delivery: true,
      cart: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
        product_size_id: item.size_id || null,
        product_prize_id: item.prize_id || null,
      })),
    };

    // Assuming createOrder is already imported
    await dispatch(createOrder(orderData));
    navigate("/orders");
  }, [selectedAddressId, user, cartItems, dispatch, navigate]);

  return (
    <main>
      <Helmet>
        <title>Checkout - Your Store</title>
        <meta
          name="description"
          content="Complete your purchase securely and quickly on our checkout page."
        />
      </Helmet>
      <div className="padding-top" />
      <div className="padding-top" />
      <Container className="mt-5">
        <div class="calculation-padding">
          <section aria-labelledby="cart-heading">
            <header className="header-bar">
              <Row>
                <Col xs={12}>
                  <h1
                    id="checkout-heading-heading"
                    className="display-8 fw-bold mb-3"
                    style={{ color: "#294085" }}
                  >
                    Checkout Items
                  </h1>
                </Col>
              </Row>
            </header>
            <Row>
             <Col md={7} className="d-flex flex-column">
                <Card className="flex-grow-1">
                  <Card.Header>Delivery Address</Card.Header>
                  <Card.Body className="address-scroll">
                    {addresses.map((addr) => (
                      <Card
                        key={addr.id}
                        className={`p-2 mb-2 ${
                          selectedAddressId === addr.id
                            ? "border-success"
                            : "border-light"
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
                              <div className="text-muted small">
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

                {/* Place Order */}
                <div className="sticky-bottom-btn">
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

              <Col md={5} className="d-flex flex-column">
                <Card className="flex-grow-1">
                  <Card.Header>Your Cart</Card.Header>
                  <Card.Body className="cart-items-scroll">
                    {cartItems.map((item) => (
                      <Card key={item.id} className="mb-3">
                        <Card.Body className="d-flex align-items-center">
                          <img
                            src={item.image || "/placeholder.jpg"}
                            alt={item.product_name}
                            loading="lazy"
                            width="60"
                            height="60"
                            style={{
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

                {/* Totals */}
                <div className="sticky-bottom-summary">
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
                        <Col>
                          <strong>Payable</strong>
                        </Col>
                        <Col className="text-end">
                          <strong>₹ {payable.toFixed(2)}</strong>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              {/* Address Section */}
            
            </Row>
          </section>
        </div>
      </Container>
    </main>
  );
});

export default CheckoutPage;
// src/pages/CheckoutPage.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, Form, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { getAddresses, setDefaultAddress } from "../../store/authService";
import AddressForm from "../../components/order/AddressForm";
import { motion } from "framer-motion";
// import { createOrder } from "../../store/orderService"; // <-- make sure this exists

const CheckoutPage = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.auth.addresses || []);
  const user = useSelector((state) => state.auth.user);

  const [addressMode, setAddressMode] = useState("list");
  const [editData, setEditData] = useState(null);

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const { subtotal, discount, payable } = useMemo(() => {
    const subtotalCalc = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return {
      subtotal: subtotalCalc,
      discount: 0,
      payable: subtotalCalc,
    };
  }, [cartItems]);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  // 🔹 Always keep default address selected
  useEffect(() => {
    if (addresses.length > 0) {
      const defaultAddr = addresses.find((addr) => addr.is_default);
      setSelectedAddressId(defaultAddr ? defaultAddr.id : addresses[0].id);
    }
  }, [addresses]);

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

    // Assuming createOrder is imported
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
        <div className="calculation-padding">
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
                  <Card.Header>
                    <strong>Delivery Address</strong>
                  </Card.Header>
                  <Card.Body className="address-scroll">
                    {addressMode === "list" ? (
                      <>
                        {addresses.map((addr) => (
                          <Card
                            key={addr.id}
                            className={`p-2 mb-2 ${
                              selectedAddressId === addr.id
                                ? "border-success"
                                : "border-light"
                            }`}
                            style={{ cursor: "pointer", borderWidth: "2px" }}
                          >
                            <Row className="align-items-center">
                              <Col xs={9}>
                                <Form.Check
                                  type="radio"
                                  name="address"
                                  checked={selectedAddressId === addr.id}
                                  onChange={() => {
                                    setSelectedAddressId(addr.id);
                                    dispatch(setDefaultAddress(addr.id)); // 🔹 update backend
                                  }}
                                  label={
                                    <>
                                      <strong>
                                        {addr.first_name} {addr.last_name}
                                      </strong>
                                      {addr.is_default && (
                                        <span
                                          style={{
                                            color: "green",
                                            marginLeft: "6px",
                                            fontSize: "0.85rem",
                                          }}
                                        >
                                          (Default)
                                        </span>
                                      )}
                                      <div className="text-muted small">
                                        {addr.address}
                                      </div>
                                    </>
                                  }
                                />
                              </Col>
                              <Col xs={3} className="text-end">
                                <motion.button
                                  whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                  className="btn btn-outline btn-sm mt-2"
                                  style={{
                                    borderRadius: "6px",
                                    fontWeight: "500",
                                    border: "1px solid #294085",
                                    backgroundColor: "#294085",
                                    color: "#fff",
                                  }}
                                  aria-label="edit address"
                                  onClick={() => {
                                    setEditData(addr);
                                    setAddressMode("edit");
                                  }}
                                >
                                  Edit →
                                </motion.button>
                              </Col>
                            </Row>
                          </Card>
                        ))}

                        {/* Add new address button */}
                        <Button
                          variant="link"
                          className="p-0 mt-2"
                          onClick={() => setAddressMode("add")}
                        >
                          + Add New Address
                        </Button>
                      </>
                    ) : (
                      <AddressForm
                        initialData={addressMode === "edit" ? editData : {}}
                        mode={addressMode}
                        onCancel={() => {
                          setAddressMode("list");
                          setEditData(null);
                        }}
                      />
                    )}
                  </Card.Body>
                </Card>

                {/* Place Order */}
                <div className=" mt-3">
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
                <div>
                  <Card>
                    <Card.Header>
                      <strong>Price Details</strong>
                    </Card.Header>
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
                        <Col>Shipping Charge</Col>
                        <Col className="text-end">₹ {discount.toFixed(2)}</Col>
                      </Row>
                      <hr />
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
            </Row>
          </section>
        </div>
      </Container>
    </main>
  );
});

export default CheckoutPage;

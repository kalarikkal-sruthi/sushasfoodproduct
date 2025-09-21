import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Form, Container, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import {
  getAddresses,
  setDefaultAddress,
  getUser,
} from "../../store/authService";
import { createOrderApi } from "../../store/orderService";
import AddressForm from "../../components/order/AddressForm";
import { motion } from "framer-motion";

import { clearCart } from "../../store/cartSlice";
import { calculateShippingApi } from "../../store/shippingServices";
import { openRazorpay } from "../../store/razorpayService";

const CheckoutPage = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const cartItems = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.auth.addresses || []);
  const userId = useSelector((state) => state.auth.user?.id);
  const [addressMode, setAddressMode] = useState("list");
  const [editData, setEditData] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [shippingCharge, setShippingCharge] = useState(0);

  const { subtotal, payable } = useMemo(() => {
    const subtotalCalc = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.selectPrice || 0);
      return sum + price * item.quantity;
    }, 0);

    const shipping = Number(shippingCharge) || 0; 

    return {
      subtotal: subtotalCalc,
      discount: 0,
      payable: subtotalCalc + shipping, 
    };
  }, [cartItems, shippingCharge]);

  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (addresses.length > 0) {
      const defaultAddr = addresses.find((addr) => addr.is_default);
      const selectedAddr = defaultAddr ? defaultAddr : addresses[0];
      setSelectedAddressId(selectedAddr.id);
    }
  }, [addresses]);

  console.log(selectedAddressId);
  console.log(cartItems);

  useEffect(() => {
    if (!selectedAddressId || cartItems.length === 0) return;

    const fetchShipping = async () => {
      try {
        const payload = {
          address_id: selectedAddressId,
          items: cartItems.map((item) => ({
            product_size_id: item.sizeId,
            qty: item.quantity,
          })),
        };

        const shippingRes = await calculateShippingApi(token, payload);
        console.log("Shipping Response:", shippingRes);

        const shippingCharged = shippingRes.shipping_charge || 0;
        setShippingCharge(shippingCharged);
      } catch (err) {
        console.error("Shipping calculation failed:", err);
        setShippingCharge(0);
      }
    };

    fetchShipping();
  }, [token, selectedAddressId, cartItems]);
  console.log(shippingCharge);

  const handlePlaceOrder = useCallback(async () => {
    if (!selectedAddressId) {
      setPopupMessage("Please select an address before placing order.");
      setShowPopup(true);
      return;
    }

    if (!paymentMethod) {
      setPopupMessage("Please select a payment method before placing order.");
      setShowPopup(true);
      return;
    }

    const orderData = {
      amount: payable,
      shipping_charge: shippingCharge,
      user_id: userId,
      address: selectedAddressId,
      payment_method: paymentMethod,
      cash_on_delivery: paymentMethod === "COD",

      cart: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.selectPrice,
        product_size_id: item.sizeId || null,
        product_prize_id: item.priceId || null,
      })),
    };
    console.log(orderData);

    try {
      if (paymentMethod === "COD") {
        await createOrderApi(orderData, token);
        dispatch(clearCart());
        navigate("/order-confirmation");
      } else if (paymentMethod === "RAZORPAY") {
        openRazorpay(
          orderData,
          token,
          dispatch,
          navigate,
          setPopupMessage,
          setShowPopup
        );
      }
    } catch (err) {
      console.error("Order Error:", err);
      setPopupMessage("Order failed. Please try again.");
      setShowPopup(true);
    }
  }, [
    selectedAddressId,
    paymentMethod,
    userId,
    cartItems,
    subtotal,
    shippingCharge,
    token,
    dispatch,
    navigate,
  ]);

 
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <main className="res-header-top">
      <Helmet>
        <title>Checkout | Susha's Food | Prakash Farm | Organic Food </title>
        <meta
          name="description"
          content="Complete your purchase securely and quickly on our checkout page."
        />
        <meta
          name="description"
          content="Explore our premium range of value-added farm products, crafted with care to deliver freshness, health, and sustainability from our fields to your table."
        />
        <meta
          name="keywords"
          content="farm products, organic produce, value added products, fresh produce, healthy food"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <div className="padding-top"></div>
      <div className="padding-top d-lg-block d-none"></div>

      <Container className="mt-3 mt-lg-5">
        <Row>
          <Row>
            <header className="header-bar">
              <Row>
                <Col xs={12}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                  >
                    <motion.h1
                      className="heading-res fw-bold"
                      style={{ color: "#294085" }}
                      variants={itemVariants}
                    >
                      Checkout Your Items
                    </motion.h1>
                  </motion.div>
                </Col>
              </Row>
            </header>
          </Row>

        
          <Col md={7}>
            <Card>
              <Card.Header className="fs-5">
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
                                dispatch(setDefaultAddress(addr.id));
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
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              className="btn btn-outline btn-sm mt-2"
                              style={{
                                borderRadius: "6px",
                                fontWeight: "500",
                                border: "1px solid #294085",
                                backgroundColor: "#294085",
                                color: "#fff",
                              }}
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

                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-outline btn-sm mt-2"
                      style={{
                        borderRadius: "6px",
                        fontWeight: "500",
                        border: "1px solid #294085",
                        backgroundColor: "#294085",
                        color: "#fff",
                      }}
                      onClick={() => setAddressMode("add")}
                    >
                      + Add New Address
                    </motion.button>
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

           
            <Card className="mt-3">
              <Card.Header className="fs-5">
                <strong>Payment Method</strong>
              </Card.Header>
              <Card.Body>
                <Form.Check
                  type="radio"
                  label="Cash on Delivery"
                  name="payment"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Razorpay"
                  name="payment"
                  value="RAZORPAY"
                  checked={paymentMethod === "RAZORPAY"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </Card.Body>
            </Card>

            <div className="mt-3 text-end">
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline mb-3 mb-lg-0"
                style={{
                  borderRadius: "50px",
                  fontWeight: "500",
                  border: "1px solid #294085",
                  backgroundColor: "#294085",
                  color: "#fff",
                }}
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
              >
                Complete Order →
              </motion.button>
            </div>
          </Col>

        
          <Col md={5}>
            <Card>
              <Card.Header className="fs-5">
                <strong>Price Details</strong>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>Subtotal</Col>
                  <Col className="fs-5 text-end">
                    <strong> ₹ {subtotal.toFixed(2)}</strong>
                  </Col>
                </Row>

                <Row>
                  <Col>Shipping Charge</Col>
                  <Col className="fs-5 text-end">
                    <strong>
                      ₹ {(Number(shippingCharge) || 0).toFixed(2)}
                    </strong>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="fs-5">
                    <strong>Payable</strong>
                  </Col>
                  <Col className="fs-5 text-end">
                    <strong>₹ {payable.toFixed(2)}</strong>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <h5 style={{ color: "#294085" }}>{popupMessage}</h5>
        </Modal.Body>
      </Modal>
    </main>
  );
});

export default CheckoutPage;

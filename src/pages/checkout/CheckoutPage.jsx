import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Form, Container, Modal } from "react-bootstrap";
import { calculateShippingApi } from "../../store/shippingServices";
import { Helmet } from "react-helmet-async";
import {
  getAddresses,
  setDefaultAddress,
  getUser,
} from "../../store/authService";
import { createOrderApi } from "../../store/orderService";
import AddressForm from "../../components/order/AddressForm";
import { motion } from "framer-motion";
import axios from "axios";
import { clearCart } from "../../store/cartSlice";

const CheckoutPage = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const cartItems = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.auth.addresses || []);
  const userId = useSelector((state) => state.auth.user?.id);
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");
  const [addressMode, setAddressMode] = useState("list");
  const [editData, setEditData] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [shippingCharge, setShippingCharge] = useState(0);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // 🧮 Subtotal and Payable Calculation
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

  // 🔄 Load addresses and user info
  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getUser());
  }, [dispatch]);

  // ✅ Auto-select default address
  useEffect(() => {
    if (addresses.length > 0) {
      const defaultAddr = addresses.find((addr) => addr.is_default);
      const selectedAddr = defaultAddr ? defaultAddr : addresses[0];
      setSelectedAddressId(selectedAddr.id);
    }
  }, [addresses]);

  // 🚚 Fetch shipping charge when address or cart changes
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
        const shippingCharged = shippingRes.shipping_charge || 0;
        setShippingCharge(shippingCharged);
      } catch (err) {
        console.error("Shipping calculation failed:", err);
        setShippingCharge(0);
      }
    };

    fetchShipping();
  }, [token, selectedAddressId, cartItems]);

  // 🧾 Place Order
  const handlePlaceOrder = useCallback(async () => {
    if (!selectedAddressId) {
      setPopupMessage("Please select an address before placing order.");
      setShowPopup(true);
      return;
    }

    const orderData = {
      amount: payable,
      shipping_charge: shippingCharge,
      user_id: userId,
      address: selectedAddressId,
      special_instructions: "New checkout order",
      payment_method: paymentMethod,
      cash_on_delivery: paymentMethod === "COD",
      cart: cartItems.map((item) => ({
        product_id: item.product_id || item.id,
        quantity: item.quantity,
        price: item.price || item.selectPrice,
        product_size_id: item.product_size_id || item.sizeId || null,
        product_prize_id: item.product_prize_id || item.priceId || null,
      })),
    };
    setIsButtonDisabled(true);
    try {
      if (paymentMethod === "COD") {
        await createOrderApi(orderData, token);
        dispatch(clearCart());
        navigate("/order-confirmation");
      } else if (paymentMethod === "RAZORPAY") {
        openRazorpay(orderData);
      }
    } catch (err) {
      console.error("Order Error:", err);
      setPopupMessage("Order failed. Please try again.");
      setShowPopup(true);
      setIsButtonDisabled(false);
    }
  }, [
    selectedAddressId,
    paymentMethod,
    userId,
    cartItems,
    shippingCharge,
    token,
    dispatch,
    navigate,
  ]);

  // 💳 Razorpay Integration
  async function openRazorpay(orderData) {
    try {
      const { data } = await axios.post(
        "https://admin.sushasfoodproducts.com/api/create-order",
        { amount: orderData.amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.order_id,
        name: "Sushas Food Products",
        description: "Order Payment",
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "https://admin.sushasfoodproducts.com/api/verify-payment",
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            if (verifyRes.data.status === "success") {
              const finalOrderData = {
                ...orderData,
                payment_method: "RAZORPAY",
                payment_status: "PAID",
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
              };

              await axios.post(
                "https://admin.sushasfoodproducts.com/api/store_order_user",
                finalOrderData,
                { headers: { Authorization: `Bearer ${token}` } }
              );

              dispatch(clearCart());
              navigate("/order-confirmation");
            } else {
              setPopupMessage("Payment verification failed. Please try again.");
              setShowPopup(true);
            }
          } catch (err) {
            console.error("Error verifying/storing order:", err);
            setPopupMessage("Error while storing order. Try again.");
            setShowPopup(true);
          }
        },
        theme: { color: "#5caf47" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        setPopupMessage("Payment failed: " + response.error.description);
        setShowPopup(true);
      });
      rzp.open();
    } catch (err) {
      console.error("Error opening Razorpay:", err);
      setPopupMessage("Unable to initiate payment. Please try again.");
      setShowPopup(true);
    }
  }

  // 🎞 Animation Variants
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
        <title>Checkout | Susha's Foods | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Complete your purchase securely and quickly on our checkout page."
        />
        <meta
          name="keywords"
          content="farm products, organic produce, fresh produce, healthy food, checkout"
        />
      </Helmet>

      <div className="padding-top"></div>
      <div className="padding-top d-lg-block d-none"></div>

      <Container className="mt-3 mt-lg-5">
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

          {/* Address Section */}
          <Col md={7}>
            <Card>
              <Card.Header className="fs-3">
                <strong>Delivery</strong>
              </Card.Header>

              <Card.Body className="address-scroll">
                {addressMode === "list" ? (
                  <>
                    {addresses.map((addr) => (
                      <Row className="align-items-center mb-2" key={addr.id}>
                        <Col xs={12}>
                          <Form.Check
                            type="radio"
                            name="address"
                            checked={selectedAddressId === addr.id}
                            onChange={() => {
                              setSelectedAddressId(addr.id);
                              dispatch(setDefaultAddress(addr.id));
                            }}
                            id={`address-${addr.id}`}
                            className="custom-radio"
                            label={
                              <label
                                htmlFor={`address-${addr.id}`}
                                className="cursor-pointer w-full"
                                style={{ display: "block" }}
                              >
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
                              </label>
                            }
                          />
                        </Col>
                        <Col xs={12} className="text-start">
                          <motion.button
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline btn-sm"
                            style={{
                              borderRadius: "6px",
                              fontWeight: "500",
                              color: "#294085",
                              paddingLeft: "25px",
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
                    ))}

                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-outline btn-sm mt-2 p-2"
                      style={{
                        borderRadius: "6px",
                        fontWeight: "500",
                        border: "1px solid #000",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                      onClick={() => setAddressMode("add")}
                    >
                      <h6 className="mb-0">
                        {addresses && addresses.length > 0
                          ? "Add New Shipping Address"
                          : "Add Shipping Address"}
                      </h6>
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

            {/* Payment */}
            {/* <Card className="mt-3">
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
                  className="mb-3"
                />
                <Form.Check
                  type="radio"
                  label="Razorpay Secure (UPI, Cards, Wallets)"
                  name="payment"
                  value="RAZORPAY"
                  checked={paymentMethod === "RAZORPAY"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </Card.Body>
            </Card> */}
            <Card className="mt-3">
              <Card.Header className="fs-5">
                <strong>Payment Method</strong>
                <h6>All transactions are secure and encrypted.</h6>
              </Card.Header>
              <Card.Body>
                <Form.Check
                  type="radio"
                  className="custom-radio"
                  label={
                    <>Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</>
                  }
                  name="payment"
                  value="RAZORPAY"
                  checked={paymentMethod === "RAZORPAY"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </Card.Body>
            </Card>

            {/* Order Button */}
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
                disabled={isButtonDisabled || cartItems.length === 0}
              >
                Complete Order →
              </motion.button>
            </div>
          </Col>

          {/* Price Details */}
          <Col md={5}>
            <Card>
              <Card.Header className="fs-5">
                <strong>Price Details</strong>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>Subtotal</Col>
                  <Col className="fs-5 text-end">
                    <strong>₹ {subtotal.toFixed(2)}</strong>
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

      {/* Popup */}
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        centered
        backdrop="static"
        keyboard={false}
        dialogClassName="modern-modal"
      >
        <Modal.Header
          closeButton
          style={{
            borderBottom: "none",
            paddingBottom: "0",
          }}
        ></Modal.Header>

        <Modal.Body
          style={{
            textAlign: "center",
            padding: "30px 20px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #294085 0%, #3c64d4 100%)",
              color: "#fff",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            <i className="bi bi-info-circle"></i>
          </div>

          <h5
            style={{
              color: "#294085",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            {popupMessage || "Operation Successful"}
          </h5>

          {/* <p style={{ color: "#555", fontSize: "14px", marginBottom: "0" }}>
      Thank you for your action. You can now continue with your process.
    </p> */}
        </Modal.Body>

        {/* <Modal.Footer
    style={{
      borderTop: "none",
      justifyContent: "center",
      paddingBottom: "25px",
    }}
  >
    <button
      className="btn"
      style={{
        backgroundColor: "#294085",
        color: "#fff",
        borderRadius: "50px",
        padding: "8px 25px",
        border: "none",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "#1e3066")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = "#294085")
      }
      onClick={() => setShowPopup(false)}
    >
      Close
    </button>
  </Modal.Footer> */}
      </Modal>
    </main>
  );
});

export default CheckoutPage;

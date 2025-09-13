import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Form, Container, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { getAddresses, setDefaultAddress } from "../../store/authService";
import { createOrderApi } from "../../store/orderService";
import AddressForm from "../../components/order/AddressForm";
import { motion } from "framer-motion";
import { getUser } from "../../store/authService";
import axios from "axios";
import { clearCart } from "../../store/cartSlice";


const CheckoutPage = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const addresses = useSelector((state) => state.auth.addresses || []);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const userId = useSelector((state) => state.auth.user?.id);

  const [addressMode, setAddressMode] = useState("list");
  const [editData, setEditData] = useState(null);

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [activeTab, setActiveTab] = useState("orders");

  const { subtotal, discount, payable } = useMemo(() => {
    const subtotalCalc = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.selectPrice || 0);
      return sum + price * item.quantity;
    }, 0);

    return {
      subtotal: subtotalCalc,
      discount: 0,
      payable: subtotalCalc,
    };
  }, [cartItems]);

  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (addresses.length > 0) {
      const defaultAddr = addresses.find((addr) => addr.is_default);
      const selectedAddr = defaultAddr ? defaultAddr : addresses[0];

      setSelectedAddressId(selectedAddr.id);
      console.log("Selected User ID:", selectedAddr.user_id);
    }
  }, [addresses]);

  
async function openRazorpay(orderData) {
  try {
    const { data } = await axios.post("https://admin.sushasfoodproducts.com/api/create-order", {
      amount: orderData.amount,
      
    });
console.log(data);

   
    
    const options = {
      key: data.rzp_live_RFNxpVLvSSFqUQ,
      amount: data.amount,
      currency: data.currency,
      order_id: data.order_id,
      name: "Your Store",
      description: "Order Payment",
      handler: async function (response) {
        await axios.post("https://admin.sushasfoodproducts.com/api/verify-payment", {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Error opening Razorpay:", err);
  }
}


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
       amount : subtotal,
      user_id: userId,
      address: selectedAddressId,
      special_instructions: "vvv",
      cash_on_delivery: paymentMethod === "COD",
      cart: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.selectPrice,
        product_size_id: item.sizeId || null,
        product_prize_id: item.priceId || null,
      })),
    };
    console.log("Order Data Sent:", orderData);

 
    try {
      if (paymentMethod === "COD") {
        await createOrderApi(orderData, token);
        navigate("/order-confirmation");
        dispatch(clearCart());
        setActiveTab(activeTab);
        // 100ms delay
        // window.location.reload().
        // window.location.href = "/myaccount";
        setActiveTab(activeTab);
      } else if (paymentMethod === "RAZORPAY") {
       openRazorpay(orderData);
      }
    } catch (err) {
      console.error("Order Error:", err);
      setPopupMessage("Order failed. Please try again.");
      setShowPopup(true);
    }
  }, [selectedAddressId, paymentMethod, userId, cartItems, user, navigate]);
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
        <title>Checkout | SUSHA'S FOODS | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Complete your purchase securely and quickly on our checkout page."
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
                      id="value-added-products-title"
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
          {/* Address Section */}
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

            {/* Payment Method */}
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              ></motion.div>
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

          {/* Price Details */}
          <Col md={5}>
            <Card>
              <Card.Header className="fs-5">
                <strong>Price Details</strong>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>Subtotal</Col>
                  <Col className="text-end">₹ {subtotal.toFixed(2)}</Col>
                </Row>
                <Row>
                  <Col>Shipping Charge</Col>
                  <Col className="text-end">₹ {discount.toFixed(2)}</Col>
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

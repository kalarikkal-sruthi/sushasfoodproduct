import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/cartSlice";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { productURL } from "../../utils/api";

import EmptyCart from "../../components/buttons/EmptyCart";
import EmptyCartCart from "../../components/buttons/EmptyCartCart";

function CartPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const token = useSelector((state) => state.auth.token);
  console.log("token:", token);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!token) {
      navigate("/login", { state: { from: location } });
    } else {
      navigate("/checkoutpage");
    }
  };

  const grandTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.selectPrice * item.quantity,
        0
      ),
    [cartItems]
  );

  useEffect(() => {
    console.log("Cart items changed:", cartItems);
  }, [cartItems]);
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
        <title>My Cart | Susha's Foods | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Review and manage items in your shopping cart at Susha's Food Products. Secure checkout with high-quality organic products."
        />
        <link rel="canonical" href="https://www.sushasfoodproduct.com/cart" />
        <link
          rel="preload"
          href="https://www.sushasfoodproduct.com/cart"
          as="document"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <div className="padding-top d-lg-block d-none"></div>
      <div className="padding-top"></div>
      <Container className="mt-3 mt-lg-5">
        <div class="calculation-padding">
          <section aria-labelledby="cart-heading">
            <header className="header-bar">
              <Row>
                <Col xs={12}>
                  <header>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={containerVariants}
                    >
                      <motion.h1
                        id="about-heading"
                        className=" heading-res fw-bold mb-1 mb-lg-3"
                        variants={itemVariants}
                        style={{ color: "#294085" }}
                      >
                        My Cart
                      </motion.h1>
                    </motion.div>
                  </header>
                </Col>
              </Row>
            </header>

            <section aria-live="polite">
              {cartItems.length === 0 ? (
                <EmptyCartCart />
              ) : (
                <>
                  <Row>
                    <Col md={8}>
                      <ul
                        className="list-group border"
                        aria-labelledby="cart-heading"
                      >
                        <li
                          className="fs-5 list-group-item d-none d-md-flex fw-bold bg-light"
                          role="presentation"
                        >
                          <div className="col-4">Product</div>
                          <div className="col-2">Quantity</div>
                          <div className="col-2">Price</div>
                          <div className="col-2">Total</div>
                          <div className="col-2">Action</div>
                        </li>

                        {cartItems.map((item) => (
                          <li
                            key={item.id}
                            className="p-3 list-group-item"
                            role="article"
                            aria-label={`Cart item: ${item.product_name}`}
                          >
                            <div className="row align-items-center">
                              <div className="col-7 col-md-4 d-flex align-items-center mb-2 mb-md-0">
                                <img
                                  className="cart-image me-2"
                                  src={`${productURL}${item.image}`}
                                  alt={item.product_name}
                                  style={{ maxWidth: "100px", height: "auto" }}
                                />
                                <span>{item.product_name}</span>
                              </div>

                              <div className="col-5 col-md-2 mb-2 mb-md-3 ">
                                <p className=" mt-2 d-block d-md-none mb-0">
                                  Quantity:
                                </p>
                                <div>
                                  <small className="text-muted">
                                    {item.quantity} ({item.size})
                                  </small>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                  <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-sm btn-outline-secondary me-2"
                                    onClick={() =>
                                      dispatch(
                                        decrementQuantity({
                                          id: item.id,
                                          sizeId: item.sizeId,
                                        })
                                      )
                                    }
                                    disabled={item.quantity === 1}
                                  >
                                    -
                                  </motion.button>
                                  <span>{item.quantity}</span>
                                  <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-sm btn-outline-secondary ms-2"
                                    onClick={() =>
                                      dispatch(
                                        incrementQuantity({
                                          id: item.id,
                                          sizeId: item.sizeId,
                                        })
                                      )
                                    }
                                  >
                                    +
                                  </motion.button>
                                </div>
                              </div>

                              <hr className="d-flex mt-1 d-sm-none" />
                              <div className="col-7 col-md-2 mb-2 mb-md-0">
                                <p className=" d-block d-md-none mb-0">
                                  Price:
                                </p>
                                ₹ {item.selectPrice}
                              </div>

                              <div className="col-5 col-md-2 mb-2 mb-md-0 ">
                                <p className=" d-block d-md-none mb-0">
                                  Total:
                                </p>
                                ₹ {item.selectPrice * item.quantity}
                              </div>

                              <div className="col-6 col-md-2 p-0">
                                <motion.button
                                  whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                  className="btn btn-sm p-0"
                                  style={{
                                    borderRadius: "50px",
                                    fontWeight: "500",
                                    // border: "1px solid #d33838",
                                    // backgroundColor: "#d33838",
                                    color: "#d33838",
                                  }}
                                  onClick={() =>
                                    dispatch(
                                      removeFromCart({
                                        id: item.id,
                                        sizeId: item.sizeId,
                                      })
                                    )
                                  }
                                >
                                  Remove →
                                </motion.button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={4} className="mt-3 mt-lg-0">
                      <div className=" p-4 border rounded shadow-sm bg-light">
                        <h3 className="mb-4  fw-bold">Price Details</h3>

                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-semibold">Subtotal</span>
                          <span>₹ {grandTotal}</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mb-3">
                          <h4 className="fw-bold">Grand Total</h4>
                          <h4 className="fw-bold">₹ {grandTotal}</h4>
                        </div>

                        <div className="mb-3">
                          <motion.button
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline btn-sm"
                            style={{
                              borderRadius: "50px",
                              fontWeight: "500",
                              border: "1px solid #294085",
                              backgroundColor: "#294085",
                              color: "#fff",
                            }}
                            aria-label={`Proceed to checkout cart`}
                            onClick={handleProceed}
                          >
                            Proceed to Checkout →
                          </motion.button>
                        </div>
                        <div>
                          {/* <Link
                            to="/login"
                            state={{ from: location }}
                            aria-label="Proceed to checkout"
                          > */}
                               <motion.button
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="btn btn-outline btn-sm"
      style={{
        borderRadius: "50px",
        fontWeight: "500",
        border: "1px solid #294085",
        backgroundColor: "#fff",
        color: "#294085",
      }}
      onClick={() => navigate(-1)} 
      aria-label="Go back to previous page"
    >
      Go Back To Previous Page →
    </motion.button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </section>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default CartPage;

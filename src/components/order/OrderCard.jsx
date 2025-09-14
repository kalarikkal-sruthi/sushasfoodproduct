import { Card, Row, Col, Button, Dropdown } from "react-bootstrap";
import { getOrders } from "../../store/orderSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderItems } from "../../store/orderSlice";
import { cancelOrder } from "../../store/orderSlice";

import { productURL } from "../../utils/api";
const OrderCard = () => {
  const dispatch = useDispatch();
const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.order.orders);
  console.log(orders);
  const token = useSelector((state) => state.auth.token);
  const { items, loading, error } = useSelector((state) => state.order);
  console.log(items);

  const orderId = orders.map((order) => order.id);

  console.log(orderId);
  // Fetch orders once
  useEffect(() => {
    if (user?.id) {
      dispatch(getOrders(user.id));
    }
  }, [dispatch, user?.id]);

  // Fetch items after orders are loaded
  useEffect(() => {
    if (orders.length > 0 && token) {
      orders.forEach((order) => {
        dispatch(getOrderItems({ orderId: order.id, token }));
      });
    }
  }, [orders.length, token, dispatch]);

  const handleCancel = (orders) => {
    dispatch(cancelOrder({ orderId: orders.id, token }));
  };

  if (orders.loading) return <p>Loading order items...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <article className="order-card mb-4">
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        Object.entries(items).map(([orderId, orderItems]) => {
          const order = orders.find((o) => o.id === Number(orderId));

          if (!order) return null;
          return (
            <Card key={orderId} className="mb-3">
              {/* Header */}
              <Card.Header as="header" className="order-header">
                <Row className="align-items-center">
                  <Col>
                    <small>ORDER PLACED</small>
                    <div>{order.date}</div>
                  </Col>
                  <Col>
                    <small>TOTAL</small>
                    <div>₹{order.total_amount}</div>
                  </Col>
                  <Col>
                    <small>SHIP TO</small>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="link"
                          className="ship-to-toggle p-0"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {order.billing_first_name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>{order.address}</Dropdown.Item>
                          <Dropdown.Item>{order.billing_city}</Dropdown.Item>
                          <Dropdown.Item>{order.billing_state}</Dropdown.Item>
                          <Dropdown.Item>
                            {order.billing_post_code}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col className="text-end">
                    <small>ORDER #</small>
                    <div>{order.order_no || orderId}</div>
                  </Col>
                </Row>
              </Card.Header>

              {/* Body */}
              <Card.Body as="section">
                <Row className="mb-3">
                  <Col>
                    <strong>Delivered On Date - {order.date}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    {orderItems.length > 0 ? (
                      orderItems.map((prod) => (
                        <Row
                          key={prod.id || prod.product_id}
                          className="align-items-center mb-3"
                        >
                          <Col xs={3}>
                            <img
                              src={`${productURL}${prod.product.image}`}
                              style={{ width: "80%" }}
                              alt={prod.product.product_name}
                            />
                          </Col>
                          <Col xs={9}>
                            <div className="product-name">
                              {prod.product.product_name}
                            </div>
                            <small className="text-muted">
                              Quantity : {prod.quantity}
                            </small>
                            <div>
                              Price : ₹{prod.price || prod.original_price}
                            </div>
                            {prod.oldPrice && prod.oldPrice !== prod.price && (
                              <small className="text-muted text-decoration-line-through">
                                ₹{prod.oldPrice}
                              </small>
                            )}
                          </Col>
                        </Row>
                      ))
                    ) : (
                      <p>No items found for this order.</p>
                    )}
                  </Col>

                  <Col
                    md={4}
                    className="d-flex flex-column align-items-end justify-content-start gap-2"
                  ></Col>
                </Row>
                <Row className="align-items-center">
                  <Col className="text-end">
                    {order.status === "cancelled" ? (
                      <span className="text-danger fw-bold">
                        Order Cancelled
                      </span>
                    ) : (
                      <button
                        onClick={() => handleCancel(order.id)}
                        disabled={loading.cancel}
                        className="btn btn-danger btn-sm"
                      >
                        {loading.cancel ? "Cancelling..." : "Cancel Order"}
                      </button>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })
      )}
    </article>
  );
};

export default OrderCard;

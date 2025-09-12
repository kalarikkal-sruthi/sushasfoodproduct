import { Card, Row, Col, Button, Dropdown } from "react-bootstrap";
import { getOrders } from "../../store/orderSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderItems } from "../../store/orderSlice";


import { productURL } from "../../utils/api";
const OrderCard = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);
  console.log(orders);
  const token = useSelector((state) => state.auth.token);
  const { items, loading, error } = useSelector((state) => state.order);
  console.log(items);
  const orderId = orders.map((order) => order.id);

  console.log(orderId);
  useEffect(() => {
    dispatch(getOrders());
    if (orderId && token) {
      dispatch(getOrderItems({ orderId, token }));
    }
  }, [dispatch, token]);

  if (orders.loading) return <p>Loading order items...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <article className="order-card mb-4">
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <Card key={order.id} className="mb-3">
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
                        <Dropdown.Item>{order.billing_post_code}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
                <Col className="text-end">
                  <small>ORDER #</small>
                  <div>{order.order_no || "4545"}</div>
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
                  {items.length > 0 ? (
                    items.map((prod) => (
                      <Row
                        key={prod.id || prod.product_id}
                        className="align-items-center mb-3"
                      >
                        <Col xs={3}>
                          <img
                            src={`${productURL}${prod.product.image}`}
                            style={{ width: "80%" }}
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
                            {" "}
                            Price : ₹{prod.price || prod.original_price}
                          </div>
                          {prod.oldPrice && prod.oldPrice !== prod.price && (
                            <small className="text-muted text-decoration-line-through">
                              ₹{prod.price}
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
                  <button className="btn btn-danger btn-sm" disabled={loading}>
                    {loading ? "Cancelling..." : "Cancel Order"}
                  </button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}
    </article>
  );
};

export default OrderCard;

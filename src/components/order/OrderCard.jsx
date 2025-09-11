import { Card, Row, Col, Button, Dropdown } from "react-bootstrap";
import { getOrderItems } from "../../store/orderSlice";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { cancelOrder } from "../../store/orderSlice";
const OrderCard = ({ order = {} }) => {
  

// console.log(order);

  

 const dispatch = useDispatch();
const orderDetails = order.orderdetails;
const orderId= orderDetails.map(detail => detail.order_id);

// console.log(orderId);

  const orderItems = useSelector(
    (state) => state.orders?.orderItems?.[orderId] || []
  );

  const token = useSelector((state) => state.auth.token);

  const handleCancel = (orderId) => {
    dispatch(cancelOrder({ orderId, token }));
  };

  useEffect(() => {
   
    
    if (orderId) {
      // console.log("Dispatching getOrderItems for order:", orderId);
      dispatch(getOrderItems({orderId, token}));
    }
  }, [dispatch, orderId,token]);

  // console.log("Order Items for order", orderId, ":", orderItems);

  return (
    <article className="order-card mb-4">
      <Card>
       
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
                <Dropdown.Toggle variant="link" className="ship-to-toggle p-0" style={{textDecoration:'none',color:'black'}}>
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
              <div className="mt-1">
                {/* <Button variant="outline-secondary" size="sm" className="me-2">
                  View Order Details
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Invoice
                </Button> */}
              </div>
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
                    <Col xs={4}>
                      <img
                        src={prod.image || "/placeholder.png"}
                        alt={`${prod.name || prod.product_name} - ${
                          prod.variant || ""
                        }`}
                        loading="lazy"
                        className="product-image"
                      />
                    </Col>
                    <Col xs={8}>
                      <div className="product-name">
                        {prod.name || prod.product_name}
                      </div>
                      <small className="text-muted">
                        {prod.variant || prod.size || ""} - {prod.quantity}{" "}
                        Piece
                      </small>
                      <div>₹{prod.price || prod.original_price}</div>
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

            {/* Action Buttons */}
            <Col
              md={4}
              className="d-flex flex-column align-items-end justify-content-start gap-2"
            >
              {/* Future buttons like return/reorder */}
            </Col>
          </Row>

          {/* Divider */}
          <hr className="mt-3 mb-3" />

          {/* Cancel Row */}
          <Row className="align-items-center">
            <Col className="text-end">
              <Button onClick={() => handleCancel(orderId)} className="btn-orange">Cancel Order</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </article>
  );
};

export default OrderCard;

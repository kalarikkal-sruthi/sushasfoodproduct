import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Row, Col, Tabs, Tab, Button, Modal, Form } from "react-bootstrap";

const Profile = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const [key, setKey] = useState("profile");
  const [showEditModal, setShowEditModal] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91-9876543210",
    address: "123, Some Street, City",
  };

  const orders = [
    {
      id: "ORD123",
      date: "2025-07-25",
      total: "₹999",
      status: "Delivered",
    },
    {
      id: "ORD124",
      date: "2025-07-28",
      total: "₹499",
      status: "Shipped",
    },
  ];

  const handleLogout = () => {
    console.log("User logged out");
    // Add real logout logic here (clear token, redirect, etc.)
  };

  return (
    <>
      <div className="padding-top"></div>
      <div className="padding-top"></div>

      <section className="padding-horizontal">
        <section className="header-bar">
          <Row>
            <Col xs={12} className="heading-main-div mt-4">
              <div className="heading-main mt-4">
                <motion.h1
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="scroll-section"
                  style={{
                    position: "sticky",
                    top: "30vh",
                    textAlign: "center",
                    zIndex: 2,
                    margin: 0,
                  }}
                >
                  My Account
                </motion.h1>
              </div>
            </Col>
          </Row>
        </section>

        <div className="container my-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Tabs
              id="account-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-0"
            >
              <Tab eventKey="profile" title="My Profile" />
              <Tab eventKey="orders" title="My Orders" />
            </Tabs>
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          {/* Tab Content */}
          {key === "profile" && (
            <div className="p-4 border rounded">
              <h4>{user.name}</h4>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <Button variant="primary" onClick={() => setShowEditModal(true)}>
                Edit Profile
              </Button>
            </div>
          )}

          {key === "orders" && (
            <div className="p-4 border rounded">
              <h5>Order History</h5>
              {orders.length === 0 ? (
                <p>No orders found.</p>
              ) : (
                <ul className="list-group">
                  {orders.map((order) => (
                    <li
                      key={order.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <div>
                        <strong>Order ID:</strong> {order.id} <br />
                        <strong>Date:</strong> {order.date}
                      </div>
                      <div>
                        <strong>Total:</strong> {order.total} <br />
                        <strong>Status:</strong> {order.status}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ✏️ Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={user.name} />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={user.email} />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" defaultValue={user.phone} />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={2} defaultValue={user.address} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowEditModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
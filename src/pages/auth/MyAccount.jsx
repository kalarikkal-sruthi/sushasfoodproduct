import React, { useState } from "react";

import { Row, Col, Tabs, Tab, Button, Modal, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import UserDetail from "../../components/auth/UserDetail";
import OrderDetails from "../../components/auth/OrderDetails";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const [key, setKey] = useState("profile");

  

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <main>
      <Helmet>
        <title>My Account | User Profile & Orders</title>
        <meta
          name="description"
          content="Manage your profile, view order history, and edit your account details."
        />
      </Helmet>
      <div className="padding-top"></div>
      <section
        className="padding-horizontal"
        aria-labelledby="profile-page-heading"
      >
        <header className="header-bar">
          <Row>
            <Col xs={12} className="heading-main-div ">
              <div className="heading-main mt-4">
                <h1>My Account</h1>
              </div>
            </Col>
          </Row>
        </header>

        <div className=" ">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Tabs
              id="account-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-0"
              role="tablist"
            >
              <Tab eventKey="profile" title="My Profile" tabClassName="px-3" />
              <Tab eventKey="orders" title="My Orders" tabClassName="px-3" />
            </Tabs>
            <Button
              variant="outline-danger"
              onClick={handleLogout}
              aria-label="Logout"
            >
              Logout
            </Button>
          </div>

          {key === "profile" && <UserDetail />}

          {key === "orders" && <OrderDetails />}
        </div>
      </section>
    </main>
  );
};

export default Profile;

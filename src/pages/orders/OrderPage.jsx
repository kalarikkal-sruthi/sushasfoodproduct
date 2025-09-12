import React, { useEffect, useState, useCallback, Suspense } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  getUser,
  getAddresses,
  deleteAddress,
  setDefaultAddress,
} from "../../store/authService";
import { logout as logoutAction } from "../../store/authSlice";

import { getOrders } from "../../store/orderSlice";
import { useNavigate } from "react-router-dom";

const OrderCard = React.lazy(() => import("../../components/order/OrderCard"));
const AddressForm = React.lazy(() =>
  import("../../components/order/AddressForm")
);

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    token,
    user,
    addresses = [],
  } = useSelector((state) => state.auth || {});
  const ordersState = useSelector((state) => state.order);
  const orders = ordersState?.orders || [];

  const cartItems = useSelector((state) => state.cart.items);

  const [activeTab, setActiveTab] = useState("address");

  const [addressMode, setAddressMode] = useState("list");
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getAddresses()).then((res) => {
      console.log("addresses after fetch (OrderPage):", res.payload);
    });
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      setActiveTab("orders");
    }
  }, [orders]);

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("access");
    navigate("/login");
  };

  const renderAddressCard = useCallback(
    (address) => (
      <Card className="p-2 h-100" key={address.id}>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="fw-bold mb-2">
            {address.first_name
              ? `${address.first_name} ${address.last_name || ""}`
              : address.name}
          </h6>

          <div>
            <input
              type="radio"
              name="defaultAddress"
              checked={Boolean(address.is_default)}
              onChange={() => {
                console.log("Setting default address:", address);
                dispatch(setDefaultAddress(address.id));
              }}
              aria-label="set default address"
            />
            <small className="text-muted">Default</small>
          </div>
        </div>

        <p className="mb-1">{address.address || address.line1}</p>
        {address.landmark && <p className="mb-1">{address.landmark}</p>}
        {address.city && (
          <p className="mb-1">
            {address.city}{" "}
            {address.state_id ? `(${address.state_id})` : address.state}{" "}
            {address.pincode || address.zip}
          </p>
        )}
        {address.country && <p className="mb-2">{address.country}</p>}
        <div className="d-flex justify-content-between">
          <motion.button
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
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
              setEditData(address);
              setAddressMode("edit");
            }}
          >
            Edit →
          </motion.button>

          <motion.button
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline btn-sm mt-2"
            style={{
              borderRadius: "6px",
              fontWeight: "500",
              border: "1px solid #d33838",
              backgroundColor: "#d33838",
              color: "#fff",
            }}
            aria-label="delete address"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this address?")
              ) {
                dispatch(deleteAddress(address.id));
              }
            }}
          >
            Remove →
          </motion.button>
        </div>
      </Card>
    ),
    [dispatch]
  );

  const renderAddCard = (
    <Card
      className="p-2 p-lg-3 h-100 d-flex align-items-center justify-content-center text-center border-2 border-dashed"
      style={{ cursor: "pointer", minHeight: "150px" }}
      onClick={() => {
        setAddressMode("add");
        setEditData(null);
      }}
    >
      <Plus size={40} className="mb-2 text-success" />
      <span className="fw-bold">Add New Address</span>
    </Card>
  );

  return (
    <main>
      <Helmet>
        <title>My Orders & Addresses - {user?.name || "User"}</title>
        <meta
          name="description"
          content="View and manage your orders and delivery addresses. Update your account and track your purchases."
        />
      </Helmet>
      <Container>
        <Row className=" mb-3">
          <Col className="p-0">
            <h3>Hello, {user?.name || "User"}</h3>
          </Col>
          <Col className="text-end">
            <motion.button
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-outline btn-sm"
              style={{
                borderRadius: "6px",
                fontWeight: "500",
                border: "1px solid #d33838",
                backgroundColor: "#d33838",
                color: "#fff",
              }}
              aria-label="logout"
              onClick={handleLogout}
            >
              Logout →
            </motion.button>
          </Col>
        </Row>

        <Row className="g-3 g-lg-5">
          <Col xs={12} lg={3} className="d-flex flex-column gap-2 p-0">
            <Button
              onClick={() => {
                setActiveTab("orders");
                setAddressMode("list");
              }}
              style={{
                backgroundColor: activeTab === "orders" ? "#294085" : "#fff",
                color: activeTab === "orders" ? "#fff" : "#736e6e",
                fontWeight: "bold",
                border: "none",
                textAlign: "left",
              }}
            >
              Order Summary
              <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
                View your orders
              </div>
            </Button>
            <Button
              onClick={() => {
                setActiveTab("address");
                setAddressMode("list");
              }}
              style={{
                backgroundColor: activeTab === "address" ? "#294085" : "#fff",
                color: activeTab === "address" ? "#fff" : "#736e6e",
                fontWeight: "bold",
                border: "none",
                textAlign: "left",
              }}
            >
              Address
              <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
                Manage address
              </div>
            </Button>
          </Col>

          {/* Content */}
          <Col xs={12} lg={9}>
            <Suspense fallback={<p>Loading...</p>}>
              {activeTab === "orders" &&
                orders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    products={cartItems}
                  />
                ))}
              {activeTab === "address" &&
                (addressMode === "list" ? (
                  <Row className="mb-4 g-3">
                    {addresses.map((address) => (
                      <Col xs={12} lg={6} key={address.id}>
                        {renderAddressCard(address)}
                      </Col>
                    ))}
                    <Col xs={6}>{renderAddCard}</Col>
                  </Row>
                ) : (
                  <AddressForm
                    initialData={addressMode === "edit" ? editData : {}}
                    mode={addressMode}
                    onCancel={() => {
                      setAddressMode("list");
                      setEditData(null);
                    }}
                  />
                ))}
            </Suspense>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default OrderPage;

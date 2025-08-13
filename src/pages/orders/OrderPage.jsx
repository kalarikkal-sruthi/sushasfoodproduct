

// src/pages/order/OrderPage.jsx
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import { Plus } from "react-bootstrap-icons";
// import { useDispatch, useSelector } from "react-redux";

// // 🆕 sid change: use these thunks from your store (adjust path as you asked)
// import {
//   getUser,
//   getAddresses,
//   createAddress,
//   updateAddress,
//   deleteAddress,
// } from "../../store/authService";

// import OrderCard from "../../components/order/OrderCard";
// import AddressForm from "../../components/order/AddressForm";
// import { useNavigate } from "react-router-dom";
// import { logout as logoutAction } from "../../store/authSlice";

// const OrderPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);// this fo rlogut
//     useEffect(() => { //this useeffect fter logout, token is null.
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);


// const handleLogout = () => {
//   dispatch(logoutAction()); // Redux clears user + token
//   localStorage.removeItem("access");
//   navigate("/login");
// };
//   // 🆕 sid change: read user + addresses from redux
//   const { user, addresses = [] } = useSelector((state) => state.auth || {});

//   // keep your existing UI state shapes
//   const [activeTab, setActiveTab] = useState("orders");
//   const [addressMode, setAddressMode] = useState("list"); // list | add | edit
//   const [editData, setEditData] = useState(null);

//   // dummy orders (unchanged)
//   const orders = [
//     { id: 4545, date: "Aug 5, 2025", total: "$120", shipTo: "John Doe" },
//     { id: 4546, date: "Aug 6, 2025", total: "$250", shipTo: "Jane Smith" },
//   ];

//   // 🆕 sid change: load user & addresses once on mount
//   useEffect(() => {
//     dispatch(getUser());
//     dispatch(getAddresses());
//   }, [dispatch]);
  

//   // 🆕 sid change: handle saving address (create or update)
//   const handleSaveAddress = async (form) => {
//     try {
//       if (addressMode === "add") {
//         await dispatch(createAddress(form));
//         await dispatch(getAddresses());//AUTO RELOAD LIST OF ADDRESS AFTER SUBMIT
//      } else if (addressMode === "edit" && editData?.id) {
//   await dispatch(updateAddress({ ...form, id: editData.id }));
//   await dispatch(getAddresses());
// }

//       // return to list view
//       setAddressMode("list");
//       setEditData(null);
//       // (your slice already updates addresses on fulfilled, so no extra fetch required)
//     } catch (err) {
//       console.error("Error saving address:", err);
//     }
//   };



//   // Render single address card — preserved styling but showing API fields
//   const renderAddressCard = (address) => (
//     <Card className="p-3 h-100" key={address.id}>
//       <h6 className="fw-bold mb-2">
//         {/* API fields: first_name, last_name */}
//         {address.first_name ? `${address.first_name} ${address.last_name || ""}` : address.name}
//       </h6>

//       {/* fallback for older dummy shape (line1/line2) vs new API (address/landmark) */}
//       {address.address ? <p className="mb-1">{address.address}</p> : <p className="mb-1">{address.line1}</p>}
//       {address.landmark && <p className="mb-1">{address.landmark}</p>}
//       {address.city && (
//         <p className="mb-1">
//           {address.city} {address.state_id ? `(${address.state_id})` : address.state} {address.pincode || address.zip}
//         </p>
//       )}
//       {address.country && <p className="mb-2">{address.country}</p>}
//       <div className="d-flex justify-content-between">
//         <Button
//           variant="link"
//           size="sm"
//           className="p-0"
//           onClick={() => {
//             setEditData(address);
//             setAddressMode("edit");
//           }}
//         >
//           Edit
//         </Button>
//         <Button
//           variant="link"
//           size="sm"
//           className="p-0 text-danger"
//           onClick={() => {
//             if (window.confirm("Are you sure you want to delete this address?")) {
//               dispatch(deleteAddress(address.id));
//             }
//           }}
//         >
//           Remove
//         </Button>

//       </div>
//     </Card>
//   );

//   // Add card (same look you had)
//   const renderAddCard = () => (
//     <Card
//       className="p-3 h-100 d-flex align-items-center justify-content-center text-center border-2 border-dashed"
//       style={{ cursor: "pointer", minHeight: "150px" }}
//       onClick={() => {
//         setAddressMode("add");
//         setEditData(null);
//       }}
//     >
//       <Plus size={40} className="mb-2 text-success" />
//       <span className="fw-bold">Add New Address</span>
//     </Card>
//   );


//   const renderAddressGrid = () => (
//   <Row className="mb-4 g-3">
//     {addresses.map((address) => (
//       <Col xs={6} key={address.id}>
//         {renderAddressCard(address)}
//       </Col>
//     ))}
//     <Col xs={6}>{renderAddCard()}</Col>
//   </Row>
// );

//   return (
//     <Container className="p-3 my-5">
//       <div className="padding-top"></div>

//       {/* Top Row (kept your original look) */}
//       <Row className="align-items-center mb-3">
//         <Col>
//           <h4>Hello, {user?.name || "Username"}</h4> {/* 🆕 sid change */}
//         </Col>
//         <Col className="text-end">
//           <Button
//             style={{
//               backgroundColor: "#fff",
//               color: "#527e3e",
//               border: "none",
//               boxShadow: "none",
//             }}
//              onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Col>
//       </Row>

//       {/* Second Row - Sidebar + Main */}
//       <Row className="g-4">
//         {/* Sidebar */}
//         <Col xs={2} className="d-flex flex-column gap-2 p-0">
//           <Button
//             className={activeTab === "orders" ? "custom-active" : ""}
//             onClick={() => {
//               setActiveTab("orders");
//               setAddressMode("list");
//             }}
//             style={{
//               backgroundColor: activeTab === "orders" ? "#294085" : "#fff",
//               color: activeTab === "orders" ? "#fff" : "#736e6e",
//               fontWeight: "bold",
//               border: "none",
//               textAlign: "left",
//             }}
//           >
//             Orders
//             <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>View your orders</div>
//           </Button>

//           <Button
//             className={activeTab === "address" ? "custom-active" : ""}
//             onClick={() => {
//               setActiveTab("address");
//               setAddressMode("list");
//             }}
//             style={{
//               backgroundColor: activeTab === "address" ? "#294085" : "#fff",
//               color: activeTab === "address" ? "#fff" : "#736e6e",
//               fontWeight: "bold",
//               border: "none",
//               textAlign: "left",
//             }}
//           >
//             Address
//             <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>Manage address</div>
//           </Button>
//         </Col>

//         {/* Main content */}
//         <Col xs={8}>
//           {/* Orders tab (unchanged) */}
//           {activeTab === "orders" && orders.map((order) => <OrderCard key={order.id} order={order} />)}

//           {/* Address tab */}
//           {activeTab === "address" &&
//             (addressMode === "list" ? (
//               renderAddressGrid()
//             ) : (
//               <AddressForm
//                 // AddressForm expects initialData, onSubmit, onCancel (your existing form)
//                 initialData={addressMode === "edit" ? editData : {}}
//                 onSubmit={handleSaveAddress} // 🆕 sid change: create/update via thunk
//                 onCancel={() => {
//                   setAddressMode("list");
//                   setEditData(null);
//                 }}
//               />
//             ))}
//         </Col>

//         {/* optional right column (kept minimal; your previous layout used only 2 cols) */}
//         <Col xs={2} className="d-flex align-items-start justify-content-end">
//           {/* you mentioned 'rest of balance logout' — nothing was placed here previously,
//               keep empty or put extra controls if needed */ }
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderPage;


// src/pages/order/OrderPage.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../../store/authService";
import OrderCard from "../../components/order/OrderCard";
import AddressForm from "../../components/order/AddressForm";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../../store/authSlice";

// 🆕 ADDED: cart and order related
import { clearCart } from "../../store/cartSlice";
// import { createOrder } from "../../store/orderService";
import { getOrders, createOrder } from "../../store/orderSlice";


const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("access");
    navigate("/login");
  };

  const { user, addresses = [] } = useSelector((state) => state.auth || {});

  // 🆕 CHANGED: orders from Redux state instead of dummy
const ordersState = useSelector((state) => state.order); 
console.log("📦 ordersState from Redux:", ordersState); // <--- check what's inside
const orders = ordersState?.orders || [];

  // 🆕 cart + address for placing order
  const cartItems = useSelector((state) => state.cart.items);
  const selectedAddress = useSelector((state) =>
    state.auth.addresses.find((a) => a.is_default)
  );

  const [activeTab, setActiveTab] = useState("orders");
  const [addressMode, setAddressMode] = useState("list");
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAddresses());
  }, [dispatch]);
  
  useEffect(() => {
  console.log("Fetching orders...");
  dispatch(getOrders());
}, [dispatch]);


  const handleSaveAddress = async (form) => {
    try {
      if (addressMode === "add") {
        await dispatch(createAddress(form));
        await dispatch(getAddresses());
      } else if (addressMode === "edit" && editData?.id) {
        await dispatch(updateAddress({ ...form, id: editData.id }));
        await dispatch(getAddresses());
      }
      setAddressMode("list");
      setEditData(null);
    } catch (err) {
      console.error("Error saving address:", err);
    }
  };

  // 🆕 NEW: place order from cart
  // const handlePlaceOrder = async () => {
  //   const orderPayload = {
  //     address_id: selectedAddress?.id,
  //     items: cartItems.map((item) => ({
  //       product_id: item.id,
  //       quantity: item.quantity,
  //     })),
  //   };
  //   const result = await dispatch(createOrder(orderPayload));
  //   if (result.meta.requestStatus === "fulfilled") {
  //     dispatch(clearCart());
  //     navigate(`/order-confirmation/${result.payload.id}`);
  //   }
  // };
  const handlePlaceOrder = async () => {
  if (cartItems.length === 0) return alert("Your cart is empty!");

  const orderPayload = {
    user_id: user.id,
    address: selectedAddressId, // you must store which address user selects
    special_instructions: "Leave at gate",
    cash_on_delivery: true,
    cart: cartItems.map(item => ({
      product_id: item.id,
      quantity: item.quantity,
      price: item.price,
      product_size_id: item.size_id || null,
      product_prize_id: item.prize_id || null
    }))
  };

  await dispatch(createOrder(orderPayload));
  dispatch(clearCart());
  dispatch(getOrders());
};


  const renderAddressCard = (address) => (
    <Card className="p-3 h-100" key={address.id}>
      <h6 className="fw-bold mb-2">
        {address.first_name
          ? `${address.first_name} ${address.last_name || ""}`
          : address.name}
      </h6>
      {address.address ? (
        <p className="mb-1">{address.address}</p>
      ) : (
        <p className="mb-1">{address.line1}</p>
      )}
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
        <Button
          variant="link"
          size="sm"
          className="p-0"
          onClick={() => {
            setEditData(address);
            setAddressMode("edit");
          }}
        >
          Edit
        </Button>
        <Button
          variant="link"
          size="sm"
          className="p-0 text-danger"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this address?")) {
              dispatch(deleteAddress(address.id));
            }
          }}
        >
          Remove
        </Button>
      </div>
    </Card>
  );

  const renderAddCard = () => (
    <Card
      className="p-3 h-100 d-flex align-items-center justify-content-center text-center border-2 border-dashed"
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

  const renderAddressGrid = () => (
    <Row className="mb-4 g-3">
      {addresses.map((address) => (
        <Col xs={6} key={address.id}>
          {renderAddressCard(address)}
        </Col>
      ))}
      <Col xs={6}>{renderAddCard()}</Col>
    </Row>
  );

  return (
    <Container className="p-3 my-5">
      <div className="padding-top"></div>
      <Row className="align-items-center mb-3">
        <Col>
          <h4>Hello, {user?.name || "Username"}</h4>
        </Col>
        <Col className="text-end">
          <Button
            style={{
              backgroundColor: "#fff",
              color: "#527e3e",
              border: "none",
              boxShadow: "none",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Col>
      </Row>

      <Row className="g-4">
        <Col xs={2} className="d-flex flex-column gap-2 p-0">
          <Button
            className={activeTab === "orders" ? "custom-active" : ""}
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
            Orders
            <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              View your orders
            </div>
          </Button>
          <Button
            className={activeTab === "address" ? "custom-active" : ""}
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

        <Col xs={8}>
          {activeTab === "orders" &&
            orders.map((order) => (
              <OrderCard key={order.id} order={order} products={cartItems} /> // 🆕 PASSED cartItems here
            ))}

          {activeTab === "address" &&
            (addressMode === "list" ? (
              renderAddressGrid()
            ) : (
              <AddressForm
                initialData={addressMode === "edit" ? editData : {}}
                onSubmit={handleSaveAddress}
                onCancel={() => {
                  setAddressMode("list");
                  setEditData(null);
                }}
              />
            ))}
        </Col>

        <Col xs={2} className="d-flex align-items-start justify-content-end">
          {activeTab === "orders" && cartItems.length > 0 && (
            <Button
              variant="success"
              onClick={handlePlaceOrder}
              style={{ fontWeight: "bold" }}
            >
              Place Order
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;

// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import { Plus } from "react-bootstrap-icons";
// import OrderCard from "../../components/order/OrderCard";
// import AddressForm from "../../components/order/AddressForm"; // Adjust import path

// const OrderPage = () => {
//   const [activeTab, setActiveTab] = useState("orders");
//   const [addressMode, setAddressMode] = useState("list"); // list | add | edit
//   const [editData, setEditData] = useState(null);

//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       line1: "123 Main Street",
//       line2: "Apt 4B",
//       city: "New York",
//       state: "NY",
//       zip: "10001",
//       country: "USA",
//       isDefault: true,
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       line1: "456 Market Street",
//       line2: "",
//       city: "San Francisco",
//       state: "CA",
//       zip: "94105",
//       country: "USA",
//       isDefault: false,
//     },
//   ]);

//   const orders = [
//     { id: 4545, date: "Aug 5, 2025", total: "$120", shipTo: "John Doe" },
//     { id: 4546, date: "Aug 6, 2025", total: "$250", shipTo: "Jane Smith" },
//   ];

//   const handleSaveAddress = (form) => {
//     if (addressMode === "add") {
//       setAddresses([...addresses, { id: Date.now(), ...form }]);
//     } else if (addressMode === "edit") {
//       setAddresses(
//         addresses.map((addr) =>
//           addr.id === editData.id ? { ...addr, ...form } : addr
//         )
//       );
//     }
//     setAddressMode("list");
//     setEditData(null);
//   };

//   const renderAddressCard = (address) => (
//     <Card className="p-3 h-100">
//       <h6 className="fw-bold mb-2">{address.name}</h6>
//       <p className="mb-1">{address.line1}</p>
//       {address.line2 && <p className="mb-1">{address.line2}</p>}
//       <p className="mb-1">
//         {address.city}, {address.state} {address.zip}
//       </p>
//       <p className="mb-2">{address.country}</p>
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
//         <Button variant="link" size="sm" className="p-0 text-danger">
//           Remove
//         </Button>
//       </div>
//     </Card>
//   );

//   const renderAddCard = () => (
//     <Card
//       className="p-3 h-100 d-flex align-items-center justify-content-center text-center border-2 border-dashed"
//       style={{ cursor: "pointer", minHeight: "150px" }}
//       onClick={() => setAddressMode("add")}
//     >
//       <Plus size={40} className="mb-2 text-success" />
//       <span className="fw-bold">Add New Address</span>
//     </Card>
//   );

//   const renderAddressGrid = () => {
//     const rows = [];
//     for (let i = 0; i < addresses.length; i++) {
//       const address = addresses[i];
//       if (i % 2 === 0) {
//         if (i === 0) {
//           rows.push(
//             <Row key={`row-${i}`} className="mb-4 g-3">
//               <Col xs={6}>{renderAddCard()}</Col>
//               <Col xs={6}>{renderAddressCard(address)}</Col>
//             </Row>
//           );
//         } else {
//           rows.push(
//             <Row key={`row-${i}`} className="mb-4 g-3">
//               <Col xs={6}>{renderAddressCard(address)}</Col>
//               <Col xs={6}>{renderAddCard()}</Col>
//             </Row>
//           );
//         }
//       }
//     }
//     return rows;
//   };

//   return (
//     <Container>
//       {/* Top Row */}
//       {/* <Row className="align-items-center mb-3">
//         <Col>
//           <h4>Hello, Username</h4>
//         </Col>
//         <Col className="text-end">
//           <Button
//             style={{
//               backgroundColor: "#fff",
//               color: "#527e3e",
//               border: "none",
//             }}
//           >
//             Logout
//           </Button>
//         </Col>
//       </Row> */}

//       {/* Second Row */}
//       <Row className="g-4">
//         {/* Sidebar */}
//         <Col xs={2} className="d-flex flex-column gap-2 p-0">
//           <Button
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
//             <div style={{ fontSize: "0.8rem" }}>View your orders</div>
//           </Button>

//           <Button
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
//             <div style={{ fontSize: "0.8rem" }}>Manage address</div>
//           </Button>
//         </Col>

//         {/* Main content */}
//         <Col xs={8}>
//           {activeTab === "orders" &&
//             orders.map((order) => <OrderCard key={order.id} order={order} />)}

//           {activeTab === "address" &&
//             (addressMode === "list" ? (
//               renderAddressGrid()
//             ) : (
//               <AddressForm
//                 initialData={addressMode === "edit" ? editData : {}}
//                 onSubmit={handleSaveAddress}
//                 onCancel={() => {
//                   setAddressMode("list");
//                   setEditData(null);
//                 }}
//               />
//             ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderPage;
////commentedfor test redux based dynamic address

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import { Plus } from "react-bootstrap-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { getAddresses } from "../../store/authService";
// // import { getAddresses } from "../../services/authService"; // thunk for API
// import OrderCard from "../../components/order/OrderCard";
// import AddressForm from "../../components/order/AddressForm"; // Adjust import path

// const OrderPage = () => {
//   const dispatch = useDispatch();
//   const { addresses, user } = useSelector((state) => state.auth);

//   const [activeTab, setActiveTab] = useState("orders");
//   const [addressMode, setAddressMode] = useState("list"); // list | add | edit
//   const [editData, setEditData] = useState(null);

//   const orders = [
//     { id: 4545, date: "Aug 5, 2025", total: "$120", shipTo: "John Doe" },
//     { id: 4546, date: "Aug 6, 2025", total: "$250", shipTo: "Jane Smith" },
//   ];

//   useEffect(() => {
//     dispatch(getAddresses());
//   }, [dispatch]);

//   const handleSaveAddress = (form) => {
//     console.log("Save to API:", form);
//     // Later:
//     // if (addressMode === "add") dispatch(createAddress(form))
//     // if (addressMode === "edit") dispatch(updateAddress(form))
//     setAddressMode("list");
//     setEditData(null);
//   };

//   const renderAddressCard = (address) => (
//     <Card className="p-3 h-100" key={address.id}>
//       <h6 className="fw-bold mb-2">
//         {address.first_name} {address.last_name}
//       </h6>
//       <p className="mb-1">{address.address}</p>
//       {address.landmark && <p className="mb-1">{address.landmark}</p>}
//       <p className="mb-1">{address.city}</p>
//       <p className="mb-1">Pincode: {address.pincode}</p>
//       <p className="mb-2">Phone: {address.phone_number}</p>
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
//         <Button variant="link" size="sm" className="p-0 text-danger">
//           Remove
//         </Button>
//       </div>
//     </Card>
//   );

//   const renderAddCard = () => (
//     <Card
//       className="p-3 h-100 d-flex align-items-center justify-content-center text-center border-2 border-dashed"
//       style={{ cursor: "pointer", minHeight: "150px" }}
//       onClick={() => setAddressMode("add")}
//     >
//       <Plus size={40} className="mb-2 text-success" />
//       <span className="fw-bold">Add New Address</span>
//     </Card>
//   );

//   const renderAddressGrid = () => {
//     const rows = [];
//     const addrList = addresses || [];
//     for (let i = 0; i < addrList.length; i++) {
//       const address = addrList[i];
//       if (i % 2 === 0) {
//         if (i === 0) {
//           rows.push(
//             <Row key={`row-${i}`} className="mb-4 g-3">
//               <Col xs={6}>{renderAddCard()}</Col>
//               <Col xs={6}>{renderAddressCard(address)}</Col>
//             </Row>
//           );
//         } else {
//           rows.push(
//             <Row key={`row-${i}`} className="mb-4 g-3">
//               <Col xs={6}>{renderAddressCard(address)}</Col>
//               <Col xs={6}>{renderAddCard()}</Col>
//             </Row>
//           );
//         }
//       }
//     }
//     if (addrList.length === 0) {
//       return (
//         <Row className="mb-4 g-3">
//           <Col xs={6}>{renderAddCard()}</Col>
//         </Row>
//       );
//     }
//     return rows;
//   };

//   return (
//     <Container>
//       {/* Top Row */}
//       {/* <Row className="align-items-center mb-3">
//         <Col>
//           <h4>Hello, {user?.name}</h4>
//         </Col>
//         <Col className="text-end">
//           <Button
//             style={{
//               backgroundColor: "#fff",
//               color: "#527e3e",
//               border: "none",
//             }}
//           >
//             Logout
//           </Button>
//         </Col>
//       </Row> */}

//       {/* Second Row */}
//       <Row className="g-4">
//         {/* Sidebar */}
//         <Col xs={2} className="d-flex flex-column gap-2 p-0">
//           <Button
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
//             <div style={{ fontSize: "0.8rem" }}>View your orders</div>
//           </Button>

//           <Button
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
//             <div style={{ fontSize: "0.8rem" }}>Manage address</div>
//           </Button>
//         </Col>

//         {/* Main content */}
//         <Col xs={8}>
//           {activeTab === "orders" &&
//             orders.map((order) => <OrderCard key={order.id} order={order} />)}

//           {activeTab === "address" &&
//             (addressMode === "list" ? (
//               renderAddressGrid()
//             ) : (
//               <AddressForm
//                 initialData={addressMode === "edit" ? editData : {}}
//                 onSubmit={handleSaveAddress}
//                 onCancel={() => {
//                   setAddressMode("list");
//                   setEditData(null);
//                 }}
//               />
//             ))}
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

// 🆕 sid change: use these thunks from your store (adjust path as you asked)
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

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);// this fo rlogut
    useEffect(() => { //this useeffect fter logout, token is null.
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);


const handleLogout = () => {
  dispatch(logoutAction()); // Redux clears user + token
  localStorage.removeItem("access");
  navigate("/login");
};
  // 🆕 sid change: read user + addresses from redux
  const { user, addresses = [] } = useSelector((state) => state.auth || {});

  // keep your existing UI state shapes
  const [activeTab, setActiveTab] = useState("orders");
  const [addressMode, setAddressMode] = useState("list"); // list | add | edit
  const [editData, setEditData] = useState(null);

  // dummy orders (unchanged)
  const orders = [
    { id: 4545, date: "Aug 5, 2025", total: "$120", shipTo: "John Doe" },
    { id: 4546, date: "Aug 6, 2025", total: "$250", shipTo: "Jane Smith" },
  ];

  // 🆕 sid change: load user & addresses once on mount
  useEffect(() => {
    dispatch(getUser());
    dispatch(getAddresses());
  }, [dispatch]);
  

  // 🆕 sid change: handle saving address (create or update)
  const handleSaveAddress = async (form) => {
    try {
      if (addressMode === "add") {
        await dispatch(createAddress(form));
     } else if (addressMode === "edit" && editData?.id) {
  await dispatch(updateAddress({ ...form, id: editData.id }));
}

      // return to list view
      setAddressMode("list");
      setEditData(null);
      // (your slice already updates addresses on fulfilled, so no extra fetch required)
    } catch (err) {
      console.error("Error saving address:", err);
    }
  };

  // Render single address card — preserved styling but showing API fields
  const renderAddressCard = (address) => (
    <Card className="p-3 h-100" key={address.id}>
      <h6 className="fw-bold mb-2">
        {/* API fields: first_name, last_name */}
        {address.first_name ? `${address.first_name} ${address.last_name || ""}` : address.name}
      </h6>

      {/* fallback for older dummy shape (line1/line2) vs new API (address/landmark) */}
      {address.address ? <p className="mb-1">{address.address}</p> : <p className="mb-1">{address.line1}</p>}
      {address.landmark && <p className="mb-1">{address.landmark}</p>}
      {address.city && (
        <p className="mb-1">
          {address.city} {address.state_id ? `(${address.state_id})` : address.state} {address.pincode || address.zip}
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

  // Add card (same look you had)
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

      {/* Top Row (kept your original look) */}
      <Row className="align-items-center mb-3">
        <Col>
          <h4>Hello, {user?.name || "Username"}</h4> {/* 🆕 sid change */}
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

      {/* Second Row - Sidebar + Main */}
      <Row className="g-4">
        {/* Sidebar */}
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
            <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>View your orders</div>
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
            <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>Manage address</div>
          </Button>
        </Col>

        {/* Main content */}
        <Col xs={8}>
          {/* Orders tab (unchanged) */}
          {activeTab === "orders" && orders.map((order) => <OrderCard key={order.id} order={order} />)}

          {/* Address tab */}
          {activeTab === "address" &&
            (addressMode === "list" ? (
              renderAddressGrid()
            ) : (
              <AddressForm
                // AddressForm expects initialData, onSubmit, onCancel (your existing form)
                initialData={addressMode === "edit" ? editData : {}}
                onSubmit={handleSaveAddress} // 🆕 sid change: create/update via thunk
                onCancel={() => {
                  setAddressMode("list");
                  setEditData(null);
                }}
              />
            ))}
        </Col>

        {/* optional right column (kept minimal; your previous layout used only 2 cols) */}
        <Col xs={2} className="d-flex align-items-start justify-content-end">
          {/* you mentioned 'rest of balance logout' — nothing was placed here previously,
              keep empty or put extra controls if needed */ }
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;

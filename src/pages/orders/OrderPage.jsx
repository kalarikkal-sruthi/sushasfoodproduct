

// // pages/order/OrderPage.jsx
// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import OrderCard from "../../components/order/OrderCard";
// import AddressForm from "../../components/order/AddressForm";

// const OrderPage = () => {
//   const [activeTab, setActiveTab] = useState("orders");

//   // Dummy data
//   const orders = [
//     {
//       id: 4545,
//       date: "Aug 5, 2025",
//       total: "$120",
//       shipTo: "John Doe",
//       addresses: ["John Doe - Home", "John Doe - Office"],
//       items: ["Product A", "Product B"]
//     },
//     {
//       id: 4546,
//       date: "Aug 6, 2025",
//       total: "$250",
//       shipTo: "Jane Smith",
//       addresses: ["Jane Smith - Home"],
//       items: ["Product X"]
//     }
//   ];

//   return (
//     <Container className="p-3 my-5">
//       <div className="padding-top"></div>
//       {/* Top Row */}
//       <Row className="align-items-center mb-3">
//         <Col>
//           <h4>Hello, Username</h4>
//         </Col>
//         <Col className="text-end">
//          <Button
//   style={{
//     backgroundColor: "#fff",
//     color: "#527e3e",
//     border: "none",
//     boxShadow: "none"
//   }}
// >
//   Logout
// </Button>

//         </Col>
//       </Row>

//       {/* Second Row */}
//       <Row className="g-4">
//         {/* Sidebar */}
//         <Col xs={2} className="d-flex flex-column gap-2 p-0">
//         <Button
//   className={activeTab === "orders" ? "custom-active" : ""}
//   onClick={() => setActiveTab("orders")}
//   style={{
//     backgroundColor: activeTab === "orders" ? "#86b86ff6" : "#fff",
//     color: activeTab === "orders" ? "#fff" : "#736e6e",
//     fontWeight: "bold",
//     border: "none",
//     textAlign: "left"
//   }}
// >
//   Orders
//   <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
//     View your orders
//   </div>
// </Button>

// <Button
//   className={activeTab === "address" ? "custom-active" : ""}
//   onClick={() => setActiveTab("address")}
//   style={{
//     backgroundColor: activeTab === "address" ? "#86b86ff6" : "#fff",
//     color: activeTab === "address" ? "#fff" : "#736e6e",
//     fontWeight: "bold",
//     border: "none",
//     textAlign: "left"
//   }}
// >
//   Address
//   <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
//     Manage address
//   </div>
// </Button>

//         </Col>

//         {/* Main content */}
//         <Col xs={8}>
//           {activeTab === "orders" &&
//             orders.map((order) => (
//               <OrderCard key={order.id} order={order} />
//             ))}

//           {activeTab === "address" && <AddressForm />}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderPage;


// src/pages/order/OrderPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import OrderCard from "../../components/order/OrderCard";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // Dummy order data
  const orders = [
    {
      id: 4545,
      date: "Aug 5, 2025",
      total: "$120",
      shipTo: "John Doe",
      items: ["Product A", "Product B"]
    },
    {
      id: 4546,
      date: "Aug 6, 2025",
      total: "$250",
      shipTo: "Jane Smith",
      items: ["Product X"]
    }
  ];

  // Dummy address data
  const addresses = [
    {
      id: 1,
      name: "John Doe",
      line1: "123 Main Street",
      line2: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      isDefault: true
    },
    {
      id: 2,
      name: "John Doe",
      line1: "456 Market Street",
      line2: "",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA",
      isDefault: false
    }
  ];

  const renderAddressCard = (address) => (
    <Card className="p-3 h-100">
      <h6 className="fw-bold mb-2">{address.name}</h6>
      <p className="mb-1">{address.line1}</p>
      {address.line2 && <p className="mb-1">{address.line2}</p>}
      <p className="mb-1">
        {address.city}, {address.state} {address.zip}
      </p>
      <p className="mb-2">{address.country}</p>
      <div className="d-flex justify-content-between">
        <Button variant="link" size="sm" className="p-0">
          Edit
        </Button>
        <Button variant="link" size="sm" className="p-0 text-danger">
          Remove
        </Button>
      </div>
    </Card>
  );

  const renderAddCard = () => (
    <Card
      className="p-3 h-100 d-flex align-items-center justify-content-center text-center border-2 border-dashed"
      style={{ cursor: "pointer", minHeight: "150px" }}
    >
      <Plus size={40} className="mb-2 text-success" />
      <span className="fw-bold">Add New Address</span>
    </Card>
  );

  const renderAddressGrid = () => {
    const rows = [];

    for (let i = 0; i < addresses.length; i++) {
      const address = addresses[i];

      if (i % 2 === 0) {
        // Row starts with Add card if first address
        if (i === 0) {
          rows.push(
            <Row key={`row-${i}`} className="mb-4 g-3">
              <Col xs={6}>{renderAddCard()}</Col>
              <Col xs={6}>{renderAddressCard(address)}</Col>
            </Row>
          );
        } else {
          rows.push(
            <Row key={`row-${i}`} className="mb-4 g-3">
              <Col xs={6}>{renderAddressCard(address)}</Col>
              <Col xs={6}>{renderAddCard()}</Col>
            </Row>
          );
        }
      }
    }

    return rows;
  };

  return (
    <Container className="p-3 my-5">
      <div className="padding-top"></div>

      {/* Top Row */}
      <Row className="align-items-center mb-3">
        <Col>
          <h4>Hello, Username</h4>
        </Col>
        <Col className="text-end">
          <Button
            style={{
              backgroundColor: "#fff",
              color: "#527e3e",
              border: "none",
              boxShadow: "none"
            }}
          >
            Logout
          </Button>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="g-4">
        {/* Sidebar */}
        <Col xs={2} className="d-flex flex-column gap-2 p-0">
          <Button
            className={activeTab === "orders" ? "custom-active" : ""}
            onClick={() => setActiveTab("orders")}
            style={{
              backgroundColor: activeTab === "orders" ? "#86b86ff6" : "#fff",
              color: activeTab === "orders" ? "#fff" : "#736e6e",
              fontWeight: "bold",
              border: "none",
              textAlign: "left"
            }}
          >
            Orders
            <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              View your orders
            </div>
          </Button>

          <Button
            className={activeTab === "address" ? "custom-active" : ""}
            onClick={() => setActiveTab("address")}
            style={{
              backgroundColor: activeTab === "address" ? "#86b86ff6" : "#fff",
              color: activeTab === "address" ? "#fff" : "#736e6e",
              fontWeight: "bold",
              border: "none",
              textAlign: "left"
            }}
          >
            Address
            <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
              Manage address
            </div>
          </Button>
        </Col>

        {/* Main content */}
        <Col xs={8}>
          {activeTab === "orders" &&
            orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}

          {activeTab === "address" && renderAddressGrid()}
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;

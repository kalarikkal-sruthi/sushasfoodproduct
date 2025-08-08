

// import React from "react";
// import { Container, Row, Col, Button, Nav, Card, Dropdown } from "react-bootstrap";
// import { HouseDoor, GeoAlt } from "react-bootstrap-icons";

// const OrderPage = ({ username }) => {
//   return (
//     <Container className="p-3 my-5">
//       <div className="padding-top" />

//       {/* Top Row */}
//       <Row className="align-items-center mb-3">
//         <Col>
//           <h4>Hello, {username}</h4>
//         </Col>
//         <Col className="text-end">
//           <Button
//             style={{
//               backgroundColor: "#527e3e",
//               borderColor: "#527e3e",
//               color: "#fff",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#406631")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#527e3e")}
//           >
//             Logout
//           </Button>
//         </Col>
//       </Row>

//       {/* Second Row */}
//       <Row>
//         {/* Left: Vertical Tabs */}
//         <Col xs={2} className="border-end">
//           <Nav variant="pills" className="flex-column gap-2">
//             <Nav.Item>
//               <Nav.Link
//                 active
//                 style={{
//                   // backgroundColor: "#527e3e",
//                   backgroundColor: "#86b86ff6",
//                   // backgroundColor: "#cferbf",
//                   color: "#fff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <HouseDoor size={18} className="me-2" />
//                 Orders
//                 <div style={{ fontSize: "0.8rem", fontWeight: "normal", color: "#e0e0e0" }}>
//                   View your orders
//                 </div>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 style={{
//                   backgroundColor: "#fff",
//                   color: "#736e6e",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <GeoAlt size={18} className="me-2" />
//                 Address
//                 <div style={{ fontSize: "0.8rem", fontWeight: "normal", color: "#736e6e" }}>
//                   Manage address
//                 </div>
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>

//         {/* Middle: My Orders */}
//         <Col xs={8}>
//           {/* <h5>My Orders</h5> */}

//           <Card className="mb-3 shadow-sm">
//             <Card.Header
//               style={{
//                 backgroundColor: "#fde7c1",
//                 padding: "0.55rem 0.75rem",
//               }}
//             >
//               <Row className="align-items-center g-1">
//                 <Col xs={3}>
//                   <small className="text-uppercase fw-bold d-block">Order placed at</small>
//                   <div className="fw-bold">Aug 5, 2025</div>
//                 </Col>

//                 <Col xs={2}>
//                   <small className="text-uppercase fw-bold d-block">Total</small>
//                   <div className="fw-bold">$120.00</div>
//                 </Col>

//                 <Col xs={2}>
//                   <small className="text-uppercase fw-bold d-block">Ship to</small>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       variant="light"
//                       size="sm"
//                       className="py-0 px-2"
//                       style={{ whiteSpace: "nowrap" }}
//                     >
//                       John Doe
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item>John Doe</Dropdown.Item>
//                       <Dropdown.Item>Jane Doe</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </Col>

//                 <Col xs={5} className="d-flex flex-column align-items-end">
//                   <div className="fw-bold">ORDER #4545</div>

//                   <div className="mt-1 d-flex gap-2">
//                     <Button variant="outline-primary" size="sm">
//                       View order details
//                     </Button>
//                     <Button variant="outline-secondary" size="sm">
//                       Invoice
//                     </Button>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>

//             <Card.Body style={{ padding: "0.75rem" }}>
//               Product items will go here...
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Right: empty space */}
//         <Col xs={0} />
//       </Row>
//     </Container>
//   );
// };

// export default OrderPage;






// // pages/OrderPage.jsx
// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import OrderCard from "../../components/order/OrderCard";

// const OrderPage = () => {
//   const [activeTab, setActiveTab] = useState("orders");

//   // Dummy data for now
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
//       {/* Top Row */}
//       <Row className="align-items-center mb-3">
//         <Col>
//           <h4>Hello, Username</h4>
//         </Col>
//         <Col className="text-end">
//           <Button
//             style={{
//               backgroundColor: "#527e3e",
//               color: "#fff",
//               border: "none"
//             }}
//           >
//             Logout
//           </Button>
//         </Col>
//       </Row>

//       {/* Second Row */}
//       <Row>
//         {/* Sidebar */}
//         <Col xs={2} className="d-flex flex-column gap-2 p-0">
//           <Button
//             variant={activeTab === "orders" ? "custom-active" : "light"}
//             className={activeTab === "orders" ? "custom-active" : ""}
//             onClick={() => setActiveTab("orders")}
//             style={{
//               color: activeTab === "orders" ? "#fff" : "#736e6e",
//               fontWeight: "bold",
//               border: "none"
//             }}
//           >
//             Orders
//             <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
//               View your orders
//             </div>
//           </Button>

//           <Button
//             variant={activeTab === "address" ? "custom-active" : "light"}
//             className={activeTab === "address" ? "custom-active" : ""}
//             onClick={() => setActiveTab("address")}
//             style={{
//               color: activeTab === "address" ? "#fff" : "#736e6e",
//               fontWeight: "bold",
//               border: "none"
//             }}
//           >
//             Address
//             <div style={{ fontSize: "0.8rem", fontWeight: "normal" }}>
//               Manage address
//             </div>
//           </Button>
//         </Col>

//         {/* Main content */}
//         <Col xs={8}>
//           {activeTab === "orders" &&
//             orders.map((order) => (
//               <OrderCard key={order.id} order={order} />
//             ))}

//           {activeTab === "address" && (
//             <div>
//               {/* Placeholder for address form */}
//               <h5>Address Management</h5>
//               <p>Edit or create a new address here...</p>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderPage;


// pages/order/OrderPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import OrderCard from "../../components/order/OrderCard";
import AddressForm from "../../components/order/AddressForm";
// import OrderCard from "../../components/order/OrderCard";
// import AddressForm from "../../components/address/AddressForm";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // Dummy data
  const orders = [
    {
      id: 4545,
      date: "Aug 5, 2025",
      total: "$120",
      shipTo: "John Doe",
      addresses: ["John Doe - Home", "John Doe - Office"],
      items: ["Product A", "Product B"]
    },
    {
      id: 4546,
      date: "Aug 6, 2025",
      total: "$250",
      shipTo: "Jane Smith",
      addresses: ["Jane Smith - Home"],
      items: ["Product X"]
    }
  ];

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

          {activeTab === "address" && <AddressForm />}
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;


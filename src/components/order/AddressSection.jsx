// import React from "react";
// import { Row, Col, Card, Button } from "react-bootstrap";
// import { FaPlus } from "react-icons/fa";

// const AddressSection = () => {
//   // Dummy address data
//   const addresses = [
//     {
//       id: 1,
//       name: "John Doe",
//       street: "123 Green Street",
//       city: "Eco City",
//       state: "Nature State",
//       zip: "123456",
//       phone: "9876543210",
//       isDefault: true,
//     },
//   ];

//   // Component to render an address card
//   const AddressCard = ({ address }) => (
//     <Card className="p-3 h-100">
//       <h6 className="fw-bold">{address.name}</h6>
//       <p className="mb-1">{address.street}</p>
//       <p className="mb-1">
//         {address.city}, {address.state} - {address.zip}
//       </p>
//       <p className="mb-3">Phone: {address.phone}</p>
//       <div className="d-flex justify-content-between">
//         <Button variant="link" className="p-0">
//           Edit
//         </Button>
//         <Button variant="link" className="p-0 text-danger">
//           Remove
//         </Button>
//       </div>
//     </Card>
//   );

//   // Component for the add address card
//   const AddAddressCard = () => (
//     <Card
//       className="p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
//       style={{ cursor: "pointer" }}
//     >
//       <FaPlus size={40} color="#527e3e" />
//       <div className="mt-2 fw-bold">Add Address</div>
//     </Card>
//   );

//   return (
//     <div>
//       <Row className="mb-3">
//         <Col md={6}>
//           <AddAddressCard />
//         </Col>
//         <Col md={6}>
//           {addresses[0] && <AddressCard address={addresses[0]} />}
//         </Col>
//       </Row>

//       {/* Example of second row if you had more addresses */}
//       {addresses.length > 1 && (
//         <Row>
//           <Col md={6}>
//             <AddressCard address={addresses[1]} />
//           </Col>
//           <Col md={6}>
//             <AddAddressCard />
//           </Col>
//         </Row>
//       )}
//     </div>
//   );
// };

// export default AddressSection;




// import React, { useState } from "react";
// import { Row, Col, Card, Button } from "react-bootstrap";
// import { Plus } from "react-bootstrap-icons"; // bootstrap icon instead of react-icons
// import AddressForm from "./AddressForm";

// const AddressSection = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [editingAddress, setEditingAddress] = useState(null);

//   // Dummy address data
//   const addresses = [
//     {
//       id: 1,
//       name: "John Doe",
//       street: "123 Green Street",
//       city: "Eco City",
//       state: "Nature State",
//       zip: "123456",
//       phone: "9876543210",
//       isDefault: true,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       street: "456 Blue Avenue",
//       city: "River Town",
//       state: "Ocean State",
//       zip: "654321",
//       phone: "9123456780",
//       isDefault: false,
//     },
//   ];

//   // Component to render an address card
//   const AddressCard = ({ address }) => (
//     <Card className="p-3 h-100">
//       <h6 className="fw-bold">{address.name}</h6>
//       <p className="mb-1">{address.street}</p>
//       <p className="mb-1">
//         {address.city}, {address.state} - {address.zip}
//       </p>
//       <p className="mb-3">Phone: {address.phone}</p>
//       <div className="d-flex justify-content-between">
//         <Button
//           variant="link"
//           className="p-0"
//           onClick={() => {
//             setEditingAddress(address);
//             setShowForm(true);
//           }}
//         >
//           Edit
//         </Button>
//         <Button variant="link" className="p-0 text-danger">
//           Remove
//         </Button>
//       </div>
//     </Card>
//   );

//   // Component for the add address card
//   const AddAddressCard = () => (
//     <Card
//       className="p-3 h-100 d-flex flex-column justify-content-center align-items-center text-center"
//       style={{ cursor: "pointer" }}
//       onClick={() => {
//         setEditingAddress(null);
//         setShowForm(true);
//       }}
//     >
//       <Plus size={40} color="#527e3e" />
//       <div className="mt-2 fw-bold">Add Address</div>
//     </Card>
//   );

//   if (showForm) {
//     return (
//       <AddressForm
//         initialData={editingAddress}
//         onCancel={() => setShowForm(false)}
//       />
//     );
//   }

//   return (
//     <div>
//       <Row className="mb-3">
//         <Col md={6}>
//           <AddAddressCard />
//         </Col>
//         <Col md={6}>
//           {addresses[0] && <AddressCard address={addresses[0]} />}
//         </Col>
//       </Row>

//       {addresses.length > 1 && (
//         <Row>
//           <Col md={6}>
//             <AddressCard address={addresses[1]} />
//           </Col>
//           <Col md={6}>
//             <AddAddressCard />
//           </Col>
//         </Row>
//       )}
//     </div>
//   );
// };

// export default AddressSection;



// pages/order/OrderPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import OrderCard from "../../components/order/OrderCard";
import AddressSection from "../../components/order/AddressSection"; // ✅ Show grid of addresses

const OrderPage = () => {
  // State to track which tab is active (orders or address)
  const [activeTab, setActiveTab] = useState("orders");

  // Dummy orders list
  const orders = [
    {
      id: 4545,
      date: "Aug 5, 2025",
      total: "$120",
      shipTo: "John Doe",
      addresses: ["John Doe - Home", "John Doe - Office"],
      items: ["Product A", "Product B"],
    },
    {
      id: 4546,
      date: "Aug 6, 2025",
      total: "$250",
      shipTo: "Jane Smith",
      addresses: ["Jane Smith - Home"],
      items: ["Product X"],
    },
  ];

  return (
    <Container className="p-3 my-5">
      {/* Spacer */}
      <div className="padding-top"></div>

      {/* ======= Top Row with Username & Logout ======= */}
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
              boxShadow: "none",
            }}
          >
            Logout
          </Button>
        </Col>
      </Row>

      {/* ======= Second Row: Sidebar + Main Content ======= */}
      <Row className="g-4">
        {/* ===== Sidebar Navigation ===== */}
        <Col xs={2} className="d-flex flex-column gap-2 p-0">
          {/* Orders Tab Button */}
          <Button
            className={activeTab === "orders" ? "custom-active" : ""}
            onClick={() => setActiveTab("orders")}
            style={{
              backgroundColor: activeTab === "orders" ? "#86b86ff6" : "#fff",
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

          {/* Address Tab Button */}
          <Button
            className={activeTab === "address" ? "custom-active" : ""}
            onClick={() => setActiveTab("address")}
            style={{
              backgroundColor: activeTab === "address" ? "#86b86ff6" : "#fff",
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

        {/* ===== Main Content Area ===== */}
        <Col xs={8}>
          {/* Show list of orders if 'Orders' tab is active */}
          {activeTab === "orders" &&
            orders.map((order) => <OrderCard key={order.id} order={order} />)}

          {/* Show address management section if 'Address' tab is active */}
          {activeTab === "address" && <AddressSection />}
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;

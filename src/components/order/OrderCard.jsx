

// // src/components/order/OrderCard.jsx
// import React from "react";
// import { Card, Row, Col, Button, Dropdown } from "react-bootstrap";

// const OrderCard = ({ order }) => {
//   // Dummy data for now
//   const products = [
//     {
//       id: 1,
//       name: "Hair Care Oil",
//       variant: "250 ml",
//       qty: 1,
//       price: 509,
//       oldPrice: 509,
//       image: "orders/oil-1.png", // public/orders/oil-1.png
//     },
//     {
//       id: 2,
//       name: "Skin Care Oil",
//       variant: "250 ml",
//       qty: 1,
//       price: 509,
//       oldPrice: 509,
//       image: "orders/oil-2.png", // public/orders/oil-2.png
//     },
//   ];

//   return (
//     <Card className="mb-4">
//       {/* Header */}
//       <Card.Header
//         style={{ backgroundColor: "#5caf4780", fontWeight: "bold" }}
//         className="text-uppercase"
//       >
//         <Row className="align-items-center">
//           <Col>
//             <small>ORDER PLACED</small>
//             <div>{order?.date || "20 October 2024"}</div>
//           </Col>
//           <Col>
//             <small>TOTAL</small>
//             <div>₹{order?.total || "519.00"}</div>
//           </Col>
//           <Col>
//             <small>SHIP TO</small>
//             <Dropdown>
//               <Dropdown.Toggle
//                 variant="link"
//                 className="p-0"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 {order?.shipTo || "Customer Name"}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item>Address 1</Dropdown.Item>
//                 <Dropdown.Item>Address 2</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>

//           {/* Rightmost section */}
//           <Col className="text-end">
//             <small>ORDER #</small>
//             <div>{order?.id || "4545"}</div>
//             <div className="mt-1">
//               <Button
//                 variant="outline-secondary"
//                 size="sm"
//                 className="me-2"
//                 style={{ fontSize: "0.75rem" }}
//               >
//                 View Order Details
//               </Button>
//               <Button
//                 variant="outline-secondary"
//                 size="sm"
//                 style={{ fontSize: "0.75rem" }}
//               >
//                 Invoice
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </Card.Header>

//       {/* Body */}
//       <Card.Body>
//         {/* Delivered date */}
//         <Row className="mb-3">
//           <Col>
//             <strong>Delivered On Date …/…/….</strong>
//           </Col>
//         </Row>

//         {/* Product List */}
//         <Row>
//           <Col md={8}>
//             {products.map((prod) => (
//               <Row key={prod.id} className="align-items-center mb-3">
//                 <Col xs={2}>
//                   <img
//                     src={prod.image}
//                     alt={prod.name}
//                     style={{ maxWidth: "100%", height: "auto" }}
//                   />
//                 </Col>
//                 <Col>
//                   <div>{prod.name}</div>
//                   <small className="text-muted">{prod.variant}</small>{" "}
//                   <span>{prod.qty} Piece</span>
//                   <div>₹{prod.price}</div>
//                   {prod.oldPrice && prod.oldPrice !== prod.price && (
//                     <small className="text-muted text-decoration-line-through">
//                       ₹{prod.oldPrice}
//                     </small>
//                   )}
//                 </Col>
//               </Row>
//             ))}
//           </Col>

//           {/* Buttons for all products */}
//           <Col
//             md={4}
//             className="d-flex flex-column align-items-end justify-content-start gap-2"
//           >
//            <Button
//              style={{
//                     backgroundColor: "#fde7c1",
//                     border: "none",
//                     color: "#fff",
//                     borderRadius: "20px",
//                     padding: "6px 20px",
//                     fontWeight: "bold",
//                     color:"#525252ff"
//                 }}
//                 >
//                 Return Item
//                 </Button>   

//                  <Button
//              style={{
//                     backgroundColor: "#fde7c1",
//                     border: "none",
//                     color: "#fff",
//                     borderRadius: "20px",
//                     padding: "6px 20px",
//                     fontWeight: "bold",
//                     color:"#525252ff"
//                 }}
//                 >
//                  Write Product Review
//                 </Button>   

               

//                      <Button
//              style={{
//                     backgroundColor: "#0c8320ff",
//                     border: "none",
//                     color: "#fff",
//                     borderRadius: "20px",
//                     padding: "6px 20px",
//                     fontWeight: "bold",
//                     color:"#ffffffff"
//                 }}
//                 >
               
//                 Reorder
//                 </Button>  


//           </Col>
//         </Row>

//    {/* Separation line above Cancel Order */}
// <hr className="mt-3 mb-3" style={{ borderColor: "#929292ff" }} />

// {/* Cancel Order row with return eligible text */}
// <Row className="align-items-center">
//   <Col className="text-start">
//     <small className="text-danger">
//       Return eligible only before shipping
//     </small>
//   </Col>
//   <Col className="text-end">
//     <Button
//       style={{
//         backgroundColor: "#fc7e44ff",
//         border: "none",
//         color: "#222222ff",
//         borderRadius: "20px",
//         padding: "6px 20px",
//         fontWeight: "bold",
//       }}
//     >
//       Cancel Order
//     </Button>
//   </Col>
// </Row>

//       </Card.Body>
//     </Card>
//   );
// };

// export default OrderCard;



// src/components/order/OrderCard.jsx
import React from "react";
import { Card, Row, Col, Button, Dropdown } from "react-bootstrap";

const OrderCard = ({ order, products = [] }) => { // 🆕 ACCEPT products prop from OrderPage

  return (
    <Card className="mb-4">
      <Card.Header
        style={{ backgroundColor: "#5caf4780", fontWeight: "bold" }}
        className="text-uppercase"
      >
        <Row className="align-items-center">
          <Col>
            <small>ORDER PLACED</small>
            <div>{order?.date || "20 October 2024"}</div>
          </Col>
          <Col>
            <small>TOTAL</small>
            <div>₹{order?.total || "519.00"}</div>
          </Col>
          <Col>
            <small>SHIP TO</small>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="p-0"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {order?.shipTo || "Customer Name"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Address 1</Dropdown.Item>
                <Dropdown.Item>Address 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="text-end">
            <small>ORDER #</small>
            <div>{order?.id || "4545"}</div>
            <div className="mt-1">
              <Button
                variant="outline-secondary"
                size="sm"
                className="me-2"
                style={{ fontSize: "0.75rem" }}
              >
                View Order Details
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ fontSize: "0.75rem" }}
              >
                Invoice
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Row className="mb-3">
          <Col>
            <strong>Delivered On Date …/…/….</strong>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            {/* 🆕 LOOP cart products instead of dummy oils */}
            {products.map((prod) => (
              <Row key={prod.id} className="align-items-center mb-3">
                <Col xs={2}>
                  <img
                    src={prod.image || "/placeholder.png"} // safe fallback
                    alt={prod.name}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Col>
                <Col>
                  <div>{prod.name}</div>
                  <small className="text-muted">{prod.variant || ""}</small>{" "}
                  <span>{prod.quantity} Piece</span>
                  <div>₹{prod.price}</div>
                  {prod.oldPrice && prod.oldPrice !== prod.price && (
                    <small className="text-muted text-decoration-line-through">
                      ₹{prod.oldPrice}
                    </small>
                  )}
                </Col>
              </Row>
            ))}
          </Col>

          <Col
            md={4}
            className="d-flex flex-column align-items-end justify-content-start gap-2"
          >
            <Button
              style={{
                backgroundColor: "#fde7c1",
                border: "none",
                borderRadius: "20px",
                padding: "6px 20px",
                fontWeight: "bold",
                color: "#525252ff",
              }}
            >
              Return Item
            </Button>
            <Button
              style={{
                backgroundColor: "#fde7c1",
                border: "none",
                borderRadius: "20px",
                padding: "6px 20px",
                fontWeight: "bold",
                color: "#525252ff",
              }}
            >
              Write Product Review
            </Button>
            <Button
              style={{
                backgroundColor: "#0c8320ff",
                border: "none",
                color: "#fff",
                borderRadius: "20px",
                padding: "6px 20px",
                fontWeight: "bold",
              }}
            >
              Reorder
            </Button>
          </Col>
        </Row>

        <hr className="mt-3 mb-3" style={{ borderColor: "#929292ff" }} />
        <Row className="align-items-center">
          <Col className="text-start">
            <small className="text-danger">
              Return eligible only before shipping
            </small>
          </Col>
          <Col className="text-end">
            <Button
              style={{
                backgroundColor: "#fc7e44ff",
                border: "none",
                color: "#222222ff",
                borderRadius: "20px",
                padding: "6px 20px",
                fontWeight: "bold",
              }}
            >
              Cancel Order
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;



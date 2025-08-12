// import React, { useState } from "react";
// import { Form, Button, Card, Row, Col } from "react-bootstrap";

// const AddressForm = ({ initialData = {}, onSubmit, onCancel }) => {
//   const [form, setForm] = useState({
//     first_name: initialData.first_name || "",
//     last_name: initialData.last_name || "",
//     address: initialData.address || "",
//     landmark: initialData.landmark || "",
//     city: initialData.city || "",
//     state_id: initialData.state_id || "",
//     country_id: initialData.country_id || "",
//     pincode: initialData.pincode || "",
//     phone_number: initialData.phone_number || "",
//     store_id: initialData.store_id || "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) onSubmit(form);
//   };

//   return (
//     <>
//     <div className="padding-top"></div>
//       <Card className="p-4 shadow-sm">
//         <h5 className="mb-3">
//           {initialData && initialData.id ? "Edit Address" : "Add New Address"}
//         </h5>
//         <Form onSubmit={handleSubmit}>
//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   name="first_name"
//                   value={form.first_name}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   name="last_name"
//                   value={form.last_name}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>Landmark</Form.Label>
//                 <Form.Control
//                   name="landmark"
//                   value={form.landmark}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control
//                   name="city"
//                   value={form.city}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>State ID</Form.Label>
//                 <Form.Control
//                   name="state_id"
//                   type="number"
//                   value={form.state_id}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>Country ID</Form.Label>
//                 <Form.Control
//                   name="country_id"
//                   type="number"
//                   value={form.country_id}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>Pincode</Form.Label>
//                 <Form.Control
//                   name="pincode"
//                   value={form.pincode}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-2">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   name="phone_number"
//                   value={form.phone_number}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Store ID</Form.Label>
//                 <Form.Control
//                   name="store_id"
//                   type="number"
//                   value={form.store_id}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <div className="d-flex justify-content-end">
//           <Button
//             type="submit"
//             style={{ backgroundColor: "#86b86ff6", border: "none" }}
//             >
//             {initialData && initialData.id ? "Update Address" : "Save Address"}
//           </Button>
//           <Button
//             variant="secondary"
//             className="ms-2"
//             onClick={() => {
//               if (onCancel) onCancel();
//             }}
//             >
//             Cancel
//           </Button>
//             </div>
//         </Form>
//       </Card>
//     </>
//   );
// };

// export default AddressForm;



// import React, { useState, useEffect } from "react";

// export default function AddressForm({ initialData, onCancel, onSave }) {
//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     address: "",
//     landmark: "",
//     city: "",
//     state_id: "",
//     country_id: "",
//     pincode: "",
//     phone_number: "",
//     store_id: 1,
//   });

//   useEffect(() => {
//     if (initialData) {
//       setForm({
//         first_name: initialData.first_name || "",
//         last_name: initialData.last_name || "",
//         address: initialData.address || "",
//         landmark: initialData.landmark || "",
//         city: initialData.city || "",
//         state_id: initialData.state_id || "",
//         country_id: initialData.country_id || "",
//         pincode: initialData.pincode || "",
//         phone_number: initialData.phone_number || "",
//         store_id: initialData.store_id || 1,
//       });
//     }
//   }, [initialData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(form);
//   };

//   return (
//     <div className="p-6 border rounded shadow bg-white">
//       <h2 className="text-lg font-bold mb-4">
//         {initialData ? "Edit Address" : "New Address"}
//       </h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         <input
//           name="first_name"
//           placeholder="First Name"
//           value={form.first_name}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="last_name"
//           placeholder="Last Name"
//           value={form.last_name}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="address"
//           placeholder="Address"
//           value={form.address}
//           onChange={handleChange}
//           className="border p-2 rounded col-span-2"
//         />
//         <input
//           name="landmark"
//           placeholder="Landmark"
//           value={form.landmark}
//           onChange={handleChange}
//           className="border p-2 rounded col-span-2"
//         />
//         <input
//           name="city"
//           placeholder="City"
//           value={form.city}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="state_id"
//           placeholder="State ID"
//           value={form.state_id}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="country_id"
//           placeholder="Country ID"
//           value={form.country_id}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="pincode"
//           placeholder="Pincode"
//           value={form.pincode}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           name="phone_number"
//           placeholder="Phone Number"
//           value={form.phone_number}
//           onChange={handleChange}
//           className="border p-2 rounded col-span-2"
//         />

//         <div className="col-span-2 flex justify-end gap-2">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="px-4 py-2 bg-gray-300 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-green-500 text-white rounded"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




// components/order/AddressForm.jsx

import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const AddressForm = ({ initialData = {}, onSubmit, onCancel }) => {
  // ✅ Sid's change: ensure form loads initialData for editing
  const [form, setForm] = useState({
    first_name: initialData.first_name || "",
    last_name: initialData.last_name || "",
    address: initialData.address || "",
    landmark: initialData.landmark || "",
    city: initialData.city || "",
    state_id: initialData.state_id || "",
    country_id: initialData.country_id || "",
    pincode: initialData.pincode || "",
    phone_number: initialData.phone_number || "",
    store_id: initialData.store_id || "",
  });

  // ✅ Sid's change: update state when initialData changes (edit mode)
  useEffect(() => {
    setForm({
      first_name: initialData.first_name || "",
      last_name: initialData.last_name || "",
      address: initialData.address || "",
      landmark: initialData.landmark || "",
      city: initialData.city || "",
      state_id: initialData.state_id || "",
      country_id: initialData.country_id || "",
      pincode: initialData.pincode || "",
      phone_number: initialData.phone_number || "",
      store_id: initialData.store_id || "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Sid's change: ensure full form data sent to onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <>
      <div className="padding-top"></div>
      <Card className="p-4 shadow-sm">
        <h5 className="mb-3">
          {initialData && initialData.id ? "Edit Address" : "Add New Address"}
        </h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Landmark</Form.Label>
                <Form.Control
                  name="landmark"
                  value={form.landmark}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>State ID</Form.Label>
                <Form.Control
                  name="state_id"
                  type="number"
                  value={form.state_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Country ID</Form.Label>
                <Form.Control
                  name="country_id"
                  type="number"
                  value={form.country_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Store ID</Form.Label>
                <Form.Control
                  name="store_id"
                  type="number"
                  value={form.store_id}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              style={{ backgroundColor: "#86b86ff6", border: "none" }}
            >
              {initialData && initialData.id ? "Update Address" : "Save Address"}
            </Button>
            <Button
              variant="secondary"
              className="ms-2"
              onClick={() => {
                if (onCancel) onCancel();
              }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default AddressForm;

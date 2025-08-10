import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const AddressForm = ({ initialData = {}, onSubmit, onCancel }) => {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

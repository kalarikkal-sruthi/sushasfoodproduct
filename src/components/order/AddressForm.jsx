import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddressForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    name: initialData.name || "",
    street: initialData.street || "",
    city: initialData.city || "",
    state: initialData.state || "",
    pincode: initialData.pincode || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Street</Form.Label>
        <Form.Control
          name="street"
          value={form.street}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>City</Form.Label>
        <Form.Control
          name="city"
          value={form.city}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>State</Form.Label>
        <Form.Control
          name="state"
          value={form.state}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Pincode</Form.Label>
        <Form.Control
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" style={{ backgroundColor: "#86b86ff6", border: "none" }}>
        Save Address
      </Button>
    </Form>
  );
};

export default AddressForm;



import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { createAddress, updateAddress, getAddresses } from "../../store/authService";

const AddressForm = React.memo(({ initialData = {}, mode = "add", onCancel }) => {
  const dispatch = useDispatch();

  // static states (match backend ids correctly!)
  const states = [
    { id: 1, name: "Kerala" },
    { id: 2, name: "Tamil Nadu" },
    { id: 3, name: "Karnataka" },
  ];

  const countries = [{ id: 1, name: "India" }];

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    address: "",
    landmark: "",
    city: "",
    state_id: 1, // default Kerala
    country_id: 1, // default India
    pincode: "",
    phone_number: "",
    id: null,
  });

  // populate form when editing
  useEffect(() => {
    if (initialData && initialData.id) {
      setForm({
        first_name: initialData.first_name || "",
        last_name: initialData.last_name || "",
        address: initialData.address || "",
        landmark: initialData.landmark || "",
        city: initialData.city || "",
        // 👇 fix: use initialData.state (backend sends "state": 3 for Karnataka etc.)
        state_id: initialData.state || 1,
        // backend gives "country_id"
        country_id: initialData.country_id || 1,
        pincode: initialData.pincode || "",
        phone_number: initialData.phone_number || "",
        id: initialData.id,
      });
    }
  }, [initialData]);

  // handle input change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        first_name: form.first_name,
        last_name: form.last_name,
        address: form.address,
        landmark: form.landmark,
        city: form.city,
        state_id: Number(form.state_id), // ensure number
        country_id: Number(form.country_id),
        pincode: form.pincode,
        phone_number: form.phone_number,
      };

      if (mode === "add") {
        await dispatch(createAddress(payload));
      } else if (mode === "edit" && form.id) {
        await dispatch(updateAddress({ ...payload, id: form.id }));
      }
      await dispatch(getAddresses());
      onCancel();
    } catch (err) {
      console.error("Error saving address:", err);
    }
  };

  return (
    <>
      <div className="padding-top"></div>
      <Card className="p-4 shadow-sm">
        <h2 className="h5 mb-3">
          {mode === "edit" ? "Edit Address" : "Add New Address"}
        </h2>

        <Form onSubmit={handleSubmit} aria-label="Address Form">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-2" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="landmark">
                <Form.Label>Landmark</Form.Label>
                <Form.Control
                  name="landmark"
                  value={form.landmark}
                  onChange={handleChange}
                  placeholder="Nearby landmark"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="stateId">
                <Form.Label>State</Form.Label>
                <Form.Select
                  name="state_id"
                  value={form.state_id}
                  onChange={handleChange}
                  required
                  style={{boxShadow:'none'}}
                >
                  {states.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="countryId">
                <Form.Label>Country</Form.Label>
                <Form.Select
                  name="country_id"
                  value={form.country_id}
                  onChange={handleChange}
                  disabled
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="pincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="Enter pincode"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex gap-2 justify-content-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn btn-danger btn-sm"
              style={{
                borderRadius: "6px",
                fontWeight: "500",
                border: "1px solid #294085",
                backgroundColor: "#294085",
                color: "#fff",
              }}
            >
              {mode === "edit" ? "Update Address" : "Save Address"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="btn btn-outline-secondary btn-sm"
              style={{
                borderRadius: "6px",
                fontWeight: "500",
                border: "1px solid #d33838",
                backgroundColor: "#d33838",
                color: "#fff",
              }}
              onClick={onCancel}
            >
              Cancel
            </motion.button>
          </div>
        </Form>
      </Card>
    </>
  );
});

export default AddressForm;

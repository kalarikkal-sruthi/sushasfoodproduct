import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/authService";

import { Row, Col, Tabs, Tab, Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function UserDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  const userdetails = useSelector((state) => state.auth.user);
  console.log(userdetails);
  const handleUpdate = async (e) => {
    e.preventDeafault();
    const updateData = {
      name: e.target.name.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
    };
    try {
      // Then: Update the user
      const updated = await dispatch(updateUser(updateData)).unwrap();
      console.log("User updated:", updated);

      // Finally: Navigate
      navigate("/myaccount");
    } catch (error) {
      console.error("Registration or update failed:", error);
    }
  };
  return (
    <div>
      <section
        className="p-4 border rounded"
        aria-labelledby="profile-section-heading"
      >
        <h3 id="profile-section-heading">Profile Details</h3>
        <p>
          <strong>Name:</strong> {userdetails.name}
        </p>
        <p>
          <strong>Email:</strong> {userdetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {userdetails.mobile}
        </p>

        <Button
          variant="outline-dark"
          onClick={() => setShowEditModal(true)}
          aria-label="Edit Profile"
        >
          Edit Profile
        </Button>
      </section>
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="edit-profile-modal">Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={userdetails.name}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={userdetails.email}
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                defaultValue={userdetails.mobile}
              />
            </Form.Group>

            <Button variant="outline-dark" aria-label="Login to your account">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button> *
          <Button variant="primary" onClick={() => setShowEditModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default UserDetail;

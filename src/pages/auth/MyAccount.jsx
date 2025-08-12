import {
  Row,
  Col,
  Tabs,
  Tab,
  Button,
  Modal,
  Form,
  Container,
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

import OrderDetails from "../../components/auth/OrderDetails";
import Address from "../../components/auth/Address";
import OrderPage from "../orders/OrderPage";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  console.log(token);

const userDetails = useSelector((state) => state.auth.user);
  console.log(userDetails);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <main>
      <Helmet>
        <title>My Account | User Profile & Orders</title>
        <meta
          name="description"
          content="Manage your profile, view order history, and edit your account details."
        />
      </Helmet>

      <Container className="mt-5 pt-5">
        <section
          aria-labelledby="myaccount-userdetail-profiledetails"
          className="mt-5 mb-5"
        >
          <header>
            <Row>
              <Col>
                <h2 className="fw-bold" style={{ color: "#294085" }}>
                  My Account
                </h2>
              </Col>
            </Row>
          </header>

          <Row>
            <div className=" ">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Col>
                  <h4>Hello, Username</h4>
                </Col>
                <Col className="text-end">
                  <Button
                    variant="outline-danger"
                    onClick={handleLogout}
                    aria-label="Logout"
                  >
                    Logout
                  </Button>
                </Col>
              </div>
            </div>
          </Row>
          <Row>
            <Col>
              <OrderPage />
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Profile;

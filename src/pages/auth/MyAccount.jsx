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

import OrderPage from "../orders/OrderPage";

const Profile = () => {
  return (
    <main>
      <Helmet>
        <title>My Account | User Profile & Orders</title>
        <meta
          name="description"
          content="Manage your profile, view order history, and edit your account details."
        />
      </Helmet>
      <div className="padding-top" />
      <div className="padding-top" />
      <Container className="mt-5 ">
        <div class="calculation-padding" style={{}}>
          <section
            aria-labelledby="myaccount-userdetail-profiledetails"
            className=""
          >
            <header className="header-bar">
              <Row>
                <Col xs={12}>
                  <h1
                    id="my-account-heading"
                    className="display-8 fw-bold mb-3"
                    style={{ color: "#294085" }}
                  >
                    My Account
                  </h1>
                </Col>
              </Row>
            </header>

           
                <OrderPage />
             
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Profile;

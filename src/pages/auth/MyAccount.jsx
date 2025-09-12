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
    <main className="res-header-top">
      <Helmet>
        <title>My Account | SUSHA'S FOODS | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Manage your profile, view order history, and edit your account details."
        />
         <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
        <div className="padding-top"></div>
         <div className="padding-top d-lg-block d-none"></div>
      <div className="padding-top"></div>
      <Container className="mt-3 mt-lg-5">
        
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

      </Container>
    </main>
  );
};

export default Profile;

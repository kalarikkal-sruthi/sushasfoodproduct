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
import { motion } from "framer-motion";

import OrderPage from "../orders/OrderPage";
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
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

      <Container className="mt-3 mt-lg-5">
        <section
          aria-labelledby="myaccount-userdetail-profiledetails"
          className=""
        >
          <header className="header-bar">
            <Row>
              <Col xs={12}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  <motion.h1
                    id="my-account-heading"
                    className="heading-res fw-bold"
                    style={{ color: "#294085" }}
                    variants={itemVariants}
                  >
                    My Account
                  </motion.h1>
                </motion.div>
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

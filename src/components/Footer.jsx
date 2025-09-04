import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mail from "../assets/header/mail.png";
import phone from "../assets/header/mobile.png";
import location from "../assets/header/location_on.png";
import logonew from "../assets/header/logowhite.jpeg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Youtube, Instagram, Facebook } from "react-bootstrap-icons";
function Footer() {
  return (
    <div>
      <div className="padding-top"></div>

      <footer>
        <div className="footer-main">
          <Container>
            <div className="padding-top"></div>
            <section>
              <section className="header-bar">
                <Row>
                  <Col xs={6} md={3} className="footer-div">
                    <div className="footer-img">
                      <img src={logonew} alt="" />
                    </div>
                    <ul>
                      {/* <li>
                      <img src={mail} alt="" />
                      sushasfoodproducts@gmail.com
                    </li> */}
                      <li>
                        <img src={mail} alt="" />
                        <a
                          href="mailto:sushasfoodproducts@gmail.com"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          sushasfoodproducts@gmail.com
                        </a>
                      </li>

                      {/* <li>
                      <img src={phone} alt="" />
                      9074 624 607
                    </li> */}

                      <li>
                        <img src={phone} alt="" />
                        <a
                          href="tel:+919074624607"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          +91 9074 624 607
                        </a>
                      </li>

                      {/* <li>
                      <img src={phone} alt="" />
                      sushasfoodproducts.com
                    </li> */}
                      <li>
                        <img src={phone} alt="" />
                        <a
                          href="https://sushasfoodproducts.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          sushasfoodproducts.com
                        </a>
                      </li>
                      {/* <h4>Follow Us</h4> */}
                    </ul>
                  </Col>
                  <Col xs={6} md={3} className="footer-div">
                    <h4>Usefull Links</h4>
                    <ul>
                      <Link   style={{ textDecoration: "none" }} to=""><li>About Us</li></Link>
                    <Link style={{ textDecoration: "none" }}> <li>Privacy Policy</li></Link> 
                     <Link style={{ textDecoration: "none" }}><li>Terms and Conditions</li></Link> 
                     <Link style={{ textDecoration: "none" }}><li>Refund/Cancellation Policy</li></Link> 
                      <Link style={{ textDecoration: "none" }}><li>Shipping Policy</li></Link>
                    </ul>
                    <h4>Services</h4>
                    <ul>
                      <li>Culturing Organic products</li>
                      <li>Produce Value Added Products</li>
                      <li>Selling Through Susha's Food Outlet</li>
                      <li>Online Selling</li>
                    </ul>
                  </Col>
                  {/* <Col xs={6} md={3} className="footer-div">
                  <h4>Cateogories</h4>
                  <ul>
                    <li>Shopping Cart</li>
                    <li>Return Policy</li>
                    <li>About Us</li>
                    <li>Follow Us</li>
                  </ul>
                </Col> */}

                  <Col xs={6} md={3} className="footer-div">
                    <h4>Product Categories</h4>
                    <ul>
                      <li>
                        <Link
                          to="/cart"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Essential Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/return-policy"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Rasoi Manthra
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/aboutus"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Savera
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/aboutus"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Interspices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/aboutus"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Nyra
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/follow-us" style={{ textDecoration: "none", color: "inherit" }}>
                          Follow Us
                        </Link>
                      </li> */}
                    </ul>
                    <h4 className="mt-4">Follow Us</h4>
                    <ul
                      style={{
                        display: "flex",
                        gap: "15px",
                        listStyle: "none",
                        padding: 0,
                      }}
                    >
                      <li>
                        <a
                          href="https://www.youtube.com/@Prakashfarm-r8"
                          target="_blank"
                        >
                          <Youtube size={20} color="red" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/sushasfoodproducts_official/"
                          target="_blank"
                        >
                          <Instagram size={20} color="#C13584" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/sushasfoodproducts/"
                          target="_blank"
                        >
                          <Facebook size={20} color="#4267B2" />
                        </a>
                      </li>
                    </ul>
                  </Col>

                  <Col xs={6} md={3} className="footer-div">
                    <ul>
                      <h4>Farm Loacation</h4>
                      <li>
                        <img src={location} alt="" />
                        Nr. Ayyappankavu Vattathani,
                        <br></br> Pattaruparambu Road K. Puram, <br></br>
                        Tanalur,Pin: 676 307
                      </li>{" "}
                      <br></br>
                      <h4> Retail Outlet:</h4>
                      <li>
                        <img src={location} alt="" />
                        Prakash Gas Agency Building
                        <br></br> Thazhepalam, Tirur <br></br>
                        Malappuram Dt., Pin: 676 101
                      </li>
                    </ul>
                  </Col>
                </Row>
              </section>
            </section>
            <div className="padding-top"></div>
            <div className="bottom-footer">
              <p>@ 2025 SUSHA'S PRAKASH FARM</p>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

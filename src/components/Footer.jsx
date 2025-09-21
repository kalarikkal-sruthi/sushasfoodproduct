import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import mail from "../assets/header/mail.png";
import phone from "../assets/header/mobile.png";
import location from "../assets/header/location_on.png";
import logonew from "../assets/header/logowhite.jpeg";
import www from "../assets/header/www.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Youtube, Instagram, Facebook } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "../store/categoryProductSlice";
function Footer() {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);
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
                      <li>
                        <img src={mail} alt="" />
                        <Link
                          to="mailto:sushasfoodproducts@gmail.com"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          sushasfoodproducts@gmail.com
                        </Link>
                      </li>

                      <li>
                        <img src={phone} alt="" />
                        <Link
                          to="tel:+919074624607"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          +918129313515
                        </Link>
                      </li>

                      <li>
                        <img src={www} alt="" />
                        <Link
                          to="https://sushasfoodproducts.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          sushasfoodproducts.com
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6} md={3} className="footer-div">
                    <h4>Usefull Links</h4>
                    <ul>
                      <Link
                        to="/privacy-policy"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <li>Privacy Policy</li>
                      </Link>
                      <Link
                        to="/terms-and-conditions"
                        style={{ textDecoration: "none" }}
                      >
                        <li>Terms and Conditions</li>
                      </Link>
                      <Link
                        to="/refund-cancellation-policy"
                        style={{ textDecoration: "none" }}
                      >
                        <li>Refund/Cancellation Policy</li>
                      </Link>
                      <Link
                        to="/shipping-policy"
                        style={{ textDecoration: "none" }}
                      >
                        <li>Shipping Policy</li>
                      </Link>
                    </ul>
                    <h4>Services</h4>
                    <ul>
                      <li>Culturing Organic products</li>
                      <li>Produce Value Added Products</li>
                      <li>Selling Through Susha's Food Outlet</li>
                      <li>Online Selling</li>
                    </ul>
                  </Col>

                  <Col xs={6} md={3} className="footer-div">
                    <h4>Product Categories</h4>
                    <ul>
                      <li>
                        {categories?.map((cat) => (
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            key={cat.id}
                            as={Link}
                            to={`/productsbycategory/${cat.id}`}
                            state={{
                              categoryName: cat.name,
                            }}
                          >
                            {cat.name}
                            <br />
                          </Link>
                        ))}
                      </li>
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
                          to="https://www.youtube.com/@Prakashfarm-r8"
                          target="_blank"
                        >
                          <Youtube size={20} color="red" />
                        </a>
                      </li>
                      <li>
                        <a
                          to="https://www.instagram.com/sushasfoodproducts_official/"
                          target="_blank"
                        >
                          <Instagram size={20} color="#C13584" />
                        </a>
                      </li>
                      <li>
                        <a
                          to="https://www.facebook.com/sushasfoodproducts/"
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
                        Susha's Foods
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
              <p>
                ©{" "}
                <Link to="https://sushasfoodproducts.com/">Susha's Foods</Link>{" "}
                2025 Made with by BSL Solutions
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

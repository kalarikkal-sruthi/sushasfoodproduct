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
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
function Footer() {
  const isMobile = window.innerWidth < 768; // check device width
  const iconSize = isMobile ? 45 : 60; // smaller on mobile
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
                          to="tel:+919074 624 607"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >+91 9074 624 607</Link>
                        
                        
                        
                      </li>
                       <li>
                        <img src={phone} alt="" />
                       
                        <Link
                          to="tel:+918129313515"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          +91 8129 313 515
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
                      {/* <Link
                        to="/refund-cancellation-policy"
                        style={{ textDecoration: "none" }}
                      >
                        <li>Refund/Cancellation Policy</li>
                      </Link> */}
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
                        <Link 
                          to="https://www.youtube.com/@Prakashfarm-r8"
                          target="_blank"
                        >
                          <Youtube size={20} color="red" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="https://www.instagram.com/sushasfoodproducts_official/"
                          target="_blank"
                        >
                          <Instagram size={20} color="#C13584" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="https://www.facebook.com/sushasfoodproducts/"
                          target="_blank"
                        >
                          <Facebook size={20} color="#4267B2" />
                        </Link>
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
            <WhatsAppWidget
              phoneNo="918129313515"
              position="right"
              widgetWidth="300px"
              widgetWidthMobile="260px"
              autoOpen={false}
              messageBox={true}
              messageBoxTxt="Hi! 👋 How can we help you?"
              iconSize={iconSize}
              iconColor="white"
              iconBgColor="#25D366"
              headerIcon="https://cdn-icons-png.flaticon.com/512/124/124034.png"
              headerTitle="Support"
              headerCaption="Online"
              bodyBgColor="#fff"
              chatPersonName="Customer Support"
              chatMessage={
                <>
                  Hello there 👋
                  <br />
                  How can we help you?
                </>
              }
            />
            <Link as={Link} to="/productsbycategory" className="shop-now-btn">
              🛒 Shop Now
            </Link>

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

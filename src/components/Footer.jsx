import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/header/log.png";
import mail from "../assets/header/mail.png";
import phone from "../assets/header/mobile.png";
import location from "../assets/header/location_on.png";

function Footer() {
  return (
    <div>
      {" "}
      <div className="padding-top"></div>
      <footer>
        <div className="footer-main">
          <div className="padding-top"></div>
          <section className="padding-horizontal">
            <section className="header-bar">
              <Row>
                <Col xs={6} md={3} className="footer-div">
                  <div className="footer-img">
                    {" "}
                    <img src={logo} alt="" />

                  </div>
                  <ul>
                    <li>
                      <img src={mail} alt="" />
                      sushasfoodproducts@gmail.com
                    </li>
                    <li>
                      <img src={phone} alt="" />
                     9074 624 607
                    </li>
 <li>
                      <img src={phone} alt="" />
                    sushasfoodproducts.com
                    </li>
                     <br></br>
                   <h4>Follow Us</h4>
                  


                  </ul>
                </Col>
                <Col xs={6} md={3} className="footer-div">
                  <h4>Information</h4>
                  <ul>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms&Condition</li>
                  </ul>
                </Col>
                <Col xs={6} md={3} className="footer-div">
                  <h4>Cateogories</h4>
                  <ul>
                    <li>Shopping Cart</li>
                    <li>Return Policy</li>
                    <li>About Us</li>
                    <li>Follow Us</li>
                  </ul>
                </Col>
                <Col xs={6} md={3} className="footer-div">
                  <h4>Services</h4>
                   <ul>
                    <li>Shopping Cart</li>
                    <li>Return Policy</li>
                    <li>About Us</li>
                    <br></br>
                      <h4>Farm Loacation</h4>
                    <li>
                      <img src={location} alt="" />
                      Nr. Ayyappankavu Vattathani,
                      
                      <br></br> Pattaruparambu Road K. Puram, <br></br>
                      Tanalur,Pin: 676 307
                    </li> <br></br>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;

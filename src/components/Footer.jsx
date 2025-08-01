import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <Col xs={12} md={12}>
                  <div className="footer-img">
                    <img src="/public/banner/log.png" alt="" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <div className="footer-para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis incidunt voluptas eveniet vel. Aliquam quia illum
                      eius cumque id laudantium ipsam reiciendis eveniet. Odio
                      esse est laborum ullam deleniti? In!
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4} className="footer-address"></Col>
                <Col xs={6} md={4} className="fotter-link"></Col>
                <Col xs={6} md={4} className="footer-subscription"></Col>
              </Row>
            </section>
          </section>
          <div className="padding-top"></div>
          <div className="bottom-footer">
            <p>
              @ 2025 SUSHAS PRAKASH FARM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

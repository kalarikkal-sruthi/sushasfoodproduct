import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


export default function Header() {
  return (
    <div>
      <div>
        <Navbar expand="lg" className=" nav-bar">
          <Navbar.Brand href="#home">
           <Nav.Link href="/"><img className="logo-img" src="/public/banner/log.png" alt="" /></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Categories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Blog</Nav.Link>
             <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/myaccount">My Account</Nav.Link>
              <Nav.Link href="/checkout">Checkout</Nav.Link>
              <Nav.Link className="icon-img">
                <img src="/public/icons/location_on.png" alt="" />
              </Nav.Link>
              <Nav.Link className="icon-img">
                <img src="/public/icons/search-icon.png" alt="" />
              </Nav.Link>
              <Nav.Link className="icon-img">
                <img src="/public/icons/Shopping cart.png" alt="" />
              </Nav.Link>
              {/* <Nav.Link href="#link"><img src="/public/icons/" alt="" /></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

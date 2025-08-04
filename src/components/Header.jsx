import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import accountcircle from "../assets/header/account_circle.png";
import search from "../assets/header/search.png";
import shoppingcart from "../assets/header/Shopping cart.png";
import { useSelector } from "react-redux";

export default function Header() {
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      <div>
        <Navbar fixed="top" expand="lg" className=" nav-bar ">
          <Navbar.Brand href="#home">
            <Nav.Link href="/">
              <img className="logo-img" src="/public/banner/log.png" alt="susha's food product" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/whatinfarm">What We Do</Nav.Link>
              <Nav.Link href="/productsbycategory">Our Products</Nav.Link>
              <div className="dropdown">
                <button className="dropdown-main">
                  {" "}
                  <Nav.Link href="">Product Categories ▼</Nav.Link>
                </button>
                <div className="dropdown-sub-menu">
                  <Nav.Link href="">Oil Products</Nav.Link>
                  <Nav.Link href="">Oil Products</Nav.Link>
                  <Nav.Link href="">Oil Products</Nav.Link>
                  <Nav.Link href="">Oil Products</Nav.Link>
                  <Nav.Link href="">Oil Products</Nav.Link>
                </div>
              </div>
              <Nav.Link href="">|</Nav.Link>
              <Nav.Link className="icon-img">
                <img src={search} alt="susha's food product" />
              </Nav.Link>{" "}
              <Nav.Link href="">|</Nav.Link>
              <Nav.Link href="/cart" className="icon-img">
                Cart <img src={shoppingcart} alt="susha's food product" />
              </Nav.Link>{" "}
              <Nav.Link href="">|</Nav.Link>
              {token ? (
                <Nav.Link href="/login" className="icon-img">
                  Login <img src={accountcircle} alt="susha's food product" />
                </Nav.Link>
              ) : (
                <Nav.Link href="/login" className="icon-img">
                  Myacccount <img src={accountcircle} alt="susha's food product" />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

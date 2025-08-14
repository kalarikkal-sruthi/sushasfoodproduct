import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import accountcircle from "../assets/header/account_circle.png";
import search from "../assets/header/search.png";
import shoppingcart from "../assets/header/Shopping cart.png";
import { useSelector } from "react-redux";
import logo from "../assets/header/logo-new.png"

export default function Header() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  
  return (
    <div>
      <div>
        <Navbar fixed="top" expand="lg" className=" nav-bar ">
          <Navbar.Brand href="#home">
            <Nav.Link href="/">
              <img className="logo-img" src={logo} alt="susha's food product" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              
             <div className="dropdown">
                <button className="dropdown-main">
                 
                  <Nav.Link href="">What We Do ▼</Nav.Link>
                </button>
                <div className="dropdown-sub-menu">
                  <Nav.Link href=""></Nav.Link>
                  <Nav.Link href="">Most Harvest From Our Farm</Nav.Link>
                  <Nav.Link href="">Extra Harvest from Our Farm</Nav.Link>
                 
                 
                </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-main">
                 
                  <Nav.Link href="">Product Categories ▼</Nav.Link>
                </button>
                <div className="dropdown-sub-menu">
                  <Nav.Link href="">Essential Products</Nav.Link>
                  <Nav.Link href="">Rasoi Manthras</Nav.Link>
                   <Nav.Link href="">Savera</Nav.Link>
                  <Nav.Link href="">Nyra</Nav.Link>
                  <Nav.Link href="">InterSpices</Nav.Link>
                   <Nav.Link href="">Other</Nav.Link>
                 
                </div>
              </div>
              <Nav.Link href="">|</Nav.Link>
              <Nav.Link className="icon-img">
                <img src={search} alt="susha's food product" />
              </Nav.Link>{" "}
             
              <Nav.Link href="">|</Nav.Link>
              {token ? (
                <Nav.Link href="/myaccount" className="icon-img">
                 My Account <img src={accountcircle} alt="susha's food product" />
                </Nav.Link>
              ) : (
                <Nav.Link href="/login" className="icon-img">
                Login <img src={accountcircle} alt="susha's food product" />
                </Nav.Link>
                
              )}
               <Nav.Link href="">|</Nav.Link>
              <Nav.Link href="/cart" className="icon-img">
                Cart <img src={shoppingcart} alt="susha's food product" />
              </Nav.Link>{" "}
               <Nav.Link href="/productsbycategory">Shop Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

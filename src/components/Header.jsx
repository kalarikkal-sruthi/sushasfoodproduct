import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import accountcircle from "../assets/header/account_circle.png"
import search from "../assets/header/search.png"
import shoppingcart from  "../assets/header/Shopping cart.png"
import { useSelector } from "react-redux";



export default function Header() {

 const token = useSelector((state) => state.auth.token);
  return (
    <div>
      <div>
        <Navbar  sticky="top" expand="lg" className=" nav-bar " >
          <Navbar.Brand href="#home">
           <Nav.Link href="/"><img className="logo-img" src="/public/banner/log.png" alt="" /></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="">What We Do</Nav.Link>
            
              <Nav.Link href="">Our Products</Nav.Link>
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
             <Nav.Link href="">|</Nav.Link>
           
               
               <Nav.Link className="icon-img">
                <img  src={search } alt="" />
              </Nav.Link>       <Nav.Link href="">|</Nav.Link>
              <Nav.Link href="/cart" className="icon-img">
                Cart <img src={shoppingcart}  alt="" />
              </Nav.Link>     <Nav.Link href="">|</Nav.Link>
             {token ? ( <Nav.Link  href="/login" className="icon-img">
              Login  <img src={accountcircle} alt="" />
              </Nav.Link>):(
                 <Nav.Link  href="/login" className="icon-img">
              Myacccount  <img src={accountcircle} alt="" />
              </Nav.Link>
              )


             }
             
              {/* <Nav.Link href="#link"><img src="/public/icons/" alt="" /></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

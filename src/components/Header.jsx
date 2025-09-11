import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import accountcircle from "../assets/header/account_circle.png";

import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/header/logowhite.jpeg";
import { useEffect } from "react";
import { fetchCategoriesWithProducts } from "../store/categoryProductSlice";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./buttons/Searchbar";
import { Badge, Container, NavDropdown } from "react-bootstrap";
import { logout as logoutAction } from "../store/authSlice";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("access");
    navigate("/login");
  };
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div>
        <Navbar fixed="top" expand="lg" className="nav-bar padding-sm-2 ">
          <Navbar.Brand to="#home">
            <Nav.Link as={Link} to="/">
              <img className="logo-img" src={logo} alt="susha's food product" />
            </Nav.Link>
          </Navbar.Brand>
          <div className="d-flex d-lg-none flex-column flex-lg-row">
            {/* Icons row */}
            <div className="d-flex gap-3 align-items-center">
              {token ? (
                <NavDropdown
                  title={
                    <span className="align-items-center gap-1 w-auto">
                      {user?.name || "Account"}
                      <img
                        style={{
                          background: "#5caf47",
                          width: "25px",
                          marginLeft: "6px",
                          borderRadius: "50%",
                        }}
                        src={accountcircle}
                        alt="susha's food product"
                      />
                    </span>
                  }
                  id="account-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/myaccount">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/account"
                  className="d-flex align-items-center"
                >
                  Login
                  <img
                    style={{
                      background: "#5caf47",
                      width: "25px",
                      marginLeft: "6px",
                      borderRadius: "50%",
                    }}
                    src={accountcircle}
                    alt="susha's food product"
                  />
                </Nav.Link>
              )}

              <Nav.Link to="" className="d-none d-lg-block">
                |
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/cart"
                className="position-relative d-flex align-items-center"
              >
                <i className="bi bi-cart fs-4"></i>
                {cartCount > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-2 start-100 translate-middle"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>
 <Nav.Link as={Link} to="/productsbycategory">
                  Shop Now
                </Nav.Link>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                style={{ border: "none" }}
              >
                <i className="bi bi-list fs-1 text-success"></i>
              </Navbar.Toggle>
            </div>

            {/* Searchbar row */}
          </div>
          <div className="w-100 mb-2 d-lg-none">
            <Nav.Link className="icon-img w-100">
              <Searchbar />
            </Nav.Link>
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto align-items-start align-items-lg-center">
                <Nav.Link  className="icon-img d-none d-lg-block">
                  <Searchbar />
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link to="" className="d-none d-lg-block">
                  |
                </Nav.Link>

                <NavDropdown title="Farm Activities" id="farm-dropdown" className="d-none  d-lg-block">
                  <NavDropdown.Item as={Link} to="/mostharvestfromfarm">
                    Best Yields Plants
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/extraharvestfromfarm/Fruits">
                    Fruits
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/extraharvestfromfarm/Herbs">
                    Herbs
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Vegetables"
                  >
                    Vegetables
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Animal care and maintenance"
                  >
                    Animal Care and Maintenance
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Ornamental Plants"
                  >
                    Ornamental Plants
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Garden Plants"
                  >
                    Garden Plants
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Aquatic Plants"
                  >
                    Aquatic Plants
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link to="" className="d-none d-lg-block">
                  |
                </Nav.Link>
                <NavDropdown title="Product Categories" id="product-dropdown"  className="d-none  d-lg-block">
                  {loading && <span>Loading...</span>}
                  {error && <span style={{ color: "red" }}>{error}</span>}
                  {categories?.map((cat) => (
                    <NavDropdown.Item
                      key={cat.id}
                      as={Link}
                      
                      to={`/productsbycategory/${cat.id}`}
                      state={{
                        categoryName: cat.name,
                      }}
                    >
                      {cat.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>


                 <div className="d-lg-none  d-block">
                 <NavDropdown.Item as={Link} to="/mostharvestfromfarm">
                    Best Yields Plants
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/extraharvestfromfarm/Fruits">
                    Fruits
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/extraharvestfromfarm/Herbs">
                    Herbs
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Vegetables"
                  >
                    Vegetables
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Animal care and maintenance"
                  >
                    Animal Care and Maintenance
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Ornamental Plants"
                  >
                    Ornamental Plants
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Garden Plants"
                  >
                    Garden Plants
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/extraharvestfromfarm/Aquatic Plants"
                  >
                    Aquatic Plants
                  </NavDropdown.Item>
                 
                {categories?.map((cat) => (
                   <NavDropdown.Item
                    
                      key={cat.id}
                      as={Link}
                      to={`/productsbycategory/${cat.id}`}
                      state={{
                        categoryName: cat.name,
                      }}
                    >
                      {cat.name}
                    </NavDropdown.Item>
                  ))}
             </div>     
                <Nav.Link to="" className="d-none d-lg-block">
                  |
                </Nav.Link>

                {token ? (
                  <NavDropdown
                    className="d-none d-lg-block"
                    title={
                      <span className="align-items-center gap-1 w-auto ">
                        {user?.name || "Account"}
                        <img
                          style={{
                            background: "#5caf47",
                            width: "25px",
                            marginLeft: "6px",
                            borderRadius: "50%",
                          }}
                          src={accountcircle}
                          alt="susha's food product"
                        />
                      </span>
                    }
                    id="account-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/myaccount">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    as={Link}
                    to="/account"
                    className="d-none d-lg-flex align-items-center"
                  >
                    Login{" "}
                    <img
                      style={{
                        background: "#5caf47",
                        width: "25px",
                        marginLeft: "6px",
                        borderRadius: "50%",
                      }}
                      src={accountcircle}
                      alt="susha's food product"
                    />
                  </Nav.Link>
                )}

                <Nav.Link to="" className="d-none d-lg-block">
                  |
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="position-relative  align-items-center  d-none d-lg-flex align-items-center"
                >
                  <i className="bi bi-cart fs-4"></i>

                  {cartCount > 0 && (
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute top-2 start-100 translate-middle"
                    >
                      {cartCount}
                    </Badge>
                  )}
                </Nav.Link>

                <Nav.Link to="" className="d-none d-lg-block">
                  |
                </Nav.Link>
                <Nav.Link as={Link} to="/productsbycategory">
                  Shop Now
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>
    </div>
  );
}

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import accountcircle from "../assets/header/account_circle.png";

// import shoppingcart from "../assets/header/Shopping cart.png";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/header/logowhite.jpeg";
import { useEffect } from "react";
import { fetchCategoriesWithProducts } from "../store/categoryProductSlice";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./buttons/Searchbar";

import { logout as logoutAction } from "../store/authSlice";
import { Badge } from "react-bootstrap"; // add this import
export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const user = useSelector((state) => state.auth.user);
  console.log("user:", user);

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

  ///cart count section
  const cartItems = useSelector((state) => state.cart.items);
  //total count of all item even the qty chagne some item
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log("cart count::", cartCount);

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
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="icon-img">
                <Searchbar />
              </Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">|</Nav.Link>
              <div className="dropdown">
                <button className="dropdown-main">
                  <Nav.Link href=""> Farm Activities▼</Nav.Link>
                </button>
                <div className="dropdown-sub-menu">
                  <Nav.Link href="/mostharvestfromfarm">
                    Most Harvest Plants
                  </Nav.Link>
                  <Nav.Link href="/extraharvestfromfarm">
                   Extra Harvest Plants
                  </Nav.Link>
                  {/* <Nav.Link href="/extraharvestfromfarm/Fruits">Fruits</Nav.Link>
                  <Nav.Link href="/extraharvestfromfarm/Herbs">Herbs</Nav.Link>{" "}
                  <Nav.Link href="/extraharvestfromfarm/Vegetables">Vegetables</Nav.Link>{" "}
                  <Nav.Link href="/extraharvestfromfarm/Animal care and maintenance">
                    Animal Care and Maintenance
                  </Nav.Link>
                  <Nav.Link href="/extraharvestfromfarm/Ornamental Plants">
                    Ornamental Plants
                  </Nav.Link>
                  <Nav.Link href="/extraharvestfromfarm/Garden Plants">
                    Garden Plants
                  </Nav.Link>
                  <Nav.Link href="/extraharvestfromfarm/Aquatic Plants">
                    Aquatic Plants
                  </Nav.Link> */}
                </div>
              </div>
              <Nav.Link href="">|</Nav.Link>
              <div className="dropdown">
                <button className="dropdown-main">
                  <Nav.Link href="">Product Categories ▼</Nav.Link>
                </button>
                {/* <div className="dropdown-sub-menu">
                  <Nav.Link href="">Essential Products</Nav.Link>
                  <Nav.Link href="">Rasoi Manthras</Nav.Link>
                   <Nav.Link href="">Savera</Nav.Link>
                  <Nav.Link href="">Nyra</Nav.Link>
                  <Nav.Link href="">InterSpices</Nav.Link>
                   <Nav.Link href="">Other</Nav.Link>
                </div> */}

                <div className="dropdown-sub-menu">
                  {loading && <span>Loading...</span>}
                  {error && <span style={{ color: "red" }}>{error}</span>}

                  {categories?.map((cat) => (
                    <Nav.Link
                      key={cat.id}
                      as={Link} // 👈 use react-router Link instead of href (avoids full page reload)
                      to={`/productsbycategory/${cat.id}`}
                      state={{
                        categoryName: cat.name,
                      }}
                    >
                      {cat.name}
                    </Nav.Link>
                  ))}
                </div>
              </div>

              <Nav.Link href="">|</Nav.Link>
              {token ? (
                <div className="dropdown">
                  <button className="dropdown-main">
                    {/* sid changed on 25 aug 2025 → if logged in, username should go to /myaccount instead of /account */}
                    <Nav.Link href="/myaccount" className="icon-img">
                      {/* sid changed on 25 aug 2025 → fetch user info from auth slice */}
                      {user?.name || "Account"}{" "}
                      <img src={accountcircle} alt="susha's food product" />
                    </Nav.Link>
                  </button>
                  <div className="dropdown-sub-menu">
                    <Nav.Link href="/myaccount">My Profile</Nav.Link>
                    {/* <Nav.Link href="/myaccount">Orders</Nav.Link> */}
                    <Nav.Link href="" onClick={handleLogout}>
                      Logout
                    </Nav.Link>
                  </div>
                </div>
              ) : (
                // sid changed on 25 aug 2025 → if not logged in, go to /account for login
                <Nav.Link href="/account" className="icon-img">
                  Login <img src={accountcircle} alt="susha's food product" />
                </Nav.Link>
              )}

              <Nav.Link href="">|</Nav.Link>
              {/* <Nav.Link href="/cart" className="icon-img">
                Cart(Count)        
                <img src={shoppingcart} alt="susha's food product" />
              </Nav.Link> */}
              {/* <Nav.Link href="/cart" className="icon-img">
              Cart{cartCount > 0 && `(${cartCount})`}
              <img src={shoppingcart} alt="susha's food product" />
            </Nav.Link> */}

              <Nav.Link
                href="/cart"
                className="position-relative d-flex align-items-center"
              >
                <i className="bi bi-cart fs-4"></i> {/* Bootstrap cart icon */}
                {/* Badge for cart count */}
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

              <Nav.Link href="">|</Nav.Link>
              <Nav.Link href="/productsbycategory">Shop Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

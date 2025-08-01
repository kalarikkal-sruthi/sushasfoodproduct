import "../../styles/AuthPage.css";

import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authService";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = useSelector((state) => state.auth.token);

  const handlelogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        navigate("/myaccount");
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/myaccount");
  //   }
  // }, [token, navigate]);

  return (
    <div>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <div className="auth-container">
          {/* Left Side Image */}
          <div className="auth-left fade-in-left">
            <img
              //   src="/public/insta/2.png"
              src="/public/images/auth/reg.png"
              alt="Login Visual"
              className="auth-image"
            />
          </div>

          {/* Right Side Form */}
          <div className="auth-right fade-in-right ">
            <section className="header-bar fade-in-right">
              <Row>
                <Col xs={12} md={12} className="heading-main-div mt-4">
                  <div className="heading-main mt-4">
                    <h1>Login</h1>
                  </div>
                </Col>
              </Row>
            </section>
            <form onSubmit={handlelogin} className="auth-form">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <button type="submit">Login</button>

              <button
                className="me-auto mt-5"
                onClick={() => navigate("/register")}
              >
                Create An Account
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;

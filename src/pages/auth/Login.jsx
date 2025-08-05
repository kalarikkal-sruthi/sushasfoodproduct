import "../../styles/AuthPage.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authService";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginUser(data))
      .unwrap()
      .then(() => navigate("/myaccount"))
      .catch((error) => console.error("Login failed", error));
  };

  return (
    <main>
      <Helmet>
        <title>Login | Susha's Food Product</title>
        <meta
          name="description"
          content="Login to your MySite account to access your dashboard, orders, and profile."
        />
      </Helmet>
  <div className="padding-top"></div>
      <div className="padding-top"></div>
     
      <section className="padding-horizontal" aria-labelledby="login-title">
        <div className="auth-container">
          <div className="auth-left fade-in-left">
            <img
              src="/images/auth/reg.png"
              alt="Person logging into account"
              className="auth-image"
            />
          </div>

          <div className="auth-right fade-in-right">
            <form onSubmit={handleLogin} className="auth-form">
              <section className="header-bar fade-in-right">
                <Row>
                  <Col xs={12} md={12} className="heading-main-div ">
                    <div className="heading-main ">
                      <h1 id="login-title">Login to Your Account</h1>
                    </div>
                  </Col>
                </Row>
              </section>

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                aria-required="true"
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                aria-required="true"
              />

              <button
                type="submit"
                className="login-button "
                aria-label="Login to your account"
              >
                Login
              </button>

              <p className="register-link-text">
                Don’t have an account?
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="register-button"
                  aria-label="Create a new account"
                >
                  Create an Account
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;

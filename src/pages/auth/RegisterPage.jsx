import "../../styles/AuthPage.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authService";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
    };

    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navigate("/myaccount");
      })
      .catch((error) => {
        console.error("Registration failed", error);
      });
  };

  return (
    <main>
      <Helmet>
        <title>Register | Create Your Account</title>
        <meta
          name="description"
          content="Create a new account to access your personalized dashboard, orders, and settings."
        />
      </Helmet>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <section
        className="padding-horizontal"
        aria-labelledby="register-page-heading"
      >
        <div className="auth-container">
          <div className="auth-left fade-in-left">
            <img
              src="/images/auth/reg.png"
              alt="User registration visual"
              className="auth-image"
              loading="lazy"
            />
          </div>

          <div className="auth-right fade-in-right">
            <form
              onSubmit={handleRegister}
              className="auth-form"
              aria-label="Registration form"
            >
              <section className="header-bar fade-in-right">
                <Row>
                  <Col xs={12} md={12} className="heading-main-div ">
                    <div className="heading-main ">
                      <h1 id="register-page-heading">Create An Account</h1>
                    </div>
                  </Col>
                </Row>
              </section>
              <Row>
                <Col xs={12} md={12}>
                  <label htmlFor="name">Full Name</label>
                  <br></br>
                  <input
                    className="w-100"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    autoComplete="name"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="w-100"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    autoComplete="email"
                  />
                </Col>
                <Col xs={6} md={6}>
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    className="w-100"
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter Number"
                    required
                    autoComplete="tel"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <label htmlFor="password">Password</label>
                  <input
                    className="w-100"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="new-password"
                  />
                </Col>
                <Col xs={6} md={6}>
                  <label htmlFor="gender">Gender</label>
                  <input
                    className="w-100"
                    id="gender"
                    name="gender"
                    type="text"
                    placeholder="Enter Gender"
                    required
                    autoComplete="sex"
                  />
                </Col>
              </Row>

              <button type="submit" aria-label="Register your account">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;

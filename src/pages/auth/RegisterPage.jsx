import "../../styles/AuthPage.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authService";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, mobile, password, gender } = e.target;

    const data = {
      name: name.value.trim(),
      email: email.value.trim(),
      mobile: mobile.value.trim(),
      password: password.value.trim(),
      gender: gender.value.trim(),
    };

    dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate("/myaccount"))
      .catch((error) => console.error("Registration failed", error));
  };

  return (
    <main>
      <Helmet>
        <title>Register | Create Your Account - MySite</title>
        <meta
          name="description"
          content="Sign up for a free account to access your personalized dashboard, track orders, save favorites, and enjoy a faster checkout experience."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <Container className="mt-5">
        <div class="calculation-padding">
          <section aria-labelledby="register-page-heading">
            <div className="auth-container">
              {/* Left Section - Image */}

              <div className="auth-left fade-in-left">
                <img
                  src="/images/auth/reg.png"
                  alt="User registering on MySite for personalized account access"
                  className="auth-image"
                  loading="lazy"
                />
              </div>

              {/* Right Section - Form */}
              <div className="auth-right fade-in-right">
                <form
                  onSubmit={handleRegister}
                  className="auth-form"
                  aria-label="Registration form"
                >
                  <header className="header-bar fade-in-right">
                    <Row>
                      <Col xs={12}>
                        <h1
                          id="cart-heading"
                          className="display-8 fw-bold mb-3"
                          style={{ color: "#294085" }}
                        >
                          Create An Account
                        </h1>
                      </Col>
                    </Row>
                  </header>

                  <Row>
                    <Col xs={12} md={12}>
                      <label htmlFor="name" class="form-label">Full Name</label>
                      <br></br>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-100"
                        required
                        autoComplete="name"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6}>
                      <label htmlFor="email" class="form-label">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-100"
                        required
                        autoComplete="email"
                      />
                    </Col>
                    <Col xs={6}>
                      <label htmlFor="mobile" class="form-label">Mobile Number</label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        className="w-100"
                        placeholder="Enter your mobile number"
                        required
                        autoComplete="tel"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6}>
                      <label htmlFor="password" class="form-label">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-100"
                        placeholder="Create a strong password"
                        required
                        autoComplete="new-password"
                      />
                    </Col>
                    <Col xs={6}>
                      <label htmlFor="gender" className="form-label ">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-select custom-select"
                        required
                        defaultValue=""
                        autoComplete="sex"
                      >
                        <option value="" disabled>
                          Select your gender
                        </option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <motion.button
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.98 }}
                      className="login-button"
                      style={{
                        borderRadius: "50px",
                        fontWeight: "500",
                        border: "1px solid #294085",
                        backgroundColor: "#294085",
                        color: "#fff",
                      }}
                      aria-label="Register to your account"
                      type="submit"
                    >
                      Register Your Account →
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default RegisterPage;

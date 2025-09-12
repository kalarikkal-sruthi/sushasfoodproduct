import "../../styles/AuthPage.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authService";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🆕 sid changes → track form errors
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};

    if (!data.name) newErrors.name = "Full name is required.";

    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10,15}$/.test(data.mobile)) {
      newErrors.mobile = "Enter a valid mobile number (10–15 digits).";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!data.gender) newErrors.gender = "Please select your gender.";

    return newErrors;
  };

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

    // 🆕 sid changes → run validation before dispatch
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // clear errors if valid

    dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate("/myaccount"))
      // .catch((error) => console.error("Registration failed", error));
      .catch((error) => {
        if (error.response) {
          console.error("❌ Registration failed:", error.response.data); // 🟢 sid log
        } else {
          console.error("❌ Registration failed:", error);
        }
      });
  };

  return (
    <main className="res-header-top">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Register | SUSHA'S FOODS | Prakash Farm | Organic Food</title>

        <meta
          name="description"
          content="Sign up for a free account to access your personalized dashboard, track orders, save favorites, and enjoy a faster checkout experience."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <div className="padding-top"></div>
      <div className="padding-top d-lg-block d-none"></div>
      <div className="padding-top"></div>
      <Container className="mt-3 mt-lg-5">
        <div className="calculation-padding">
          <section aria-labelledby="register-page-heading">
            <div className="auth-container  m-auto">
              {/* Left Section - Image */}
              {/* <div className="auth-left fade-in-left">
                <img
                  src="/images/auth/reg.png"
                  alt="User registering on MySite for personalized account access"
                  className="auth-image"
                  loading="lazy"
                />
              </div> */}

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

                  {/* Name */}
                  <Row>
                    <Col xs={12}>
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-100"
                        required
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </Col>
                  </Row>

                  {/* Email + Mobile */}
                  <Row>
                    <Col xs={6}>
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-100"
                        required
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </Col>
                    <Col xs={6}>
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        className="w-100"
                        placeholder="Enter your mobile number"
                        required
                        autoComplete="tel"
                      />
                      {errors.mobile && (
                        <p className="text-danger">{errors.mobile}</p>
                      )}
                    </Col>
                  </Row>

                  {/* Password + Gender */}
                  <Row>
                    <Col xs={6}>
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-100"
                        placeholder="Create a strong password"
                        required
                        autoComplete="new-password"
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </Col>
                    <Col xs={6}>
                      <label htmlFor="gender" className="form-label">
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
                      {errors.gender && (
                        <p className="text-danger">{errors.gender}</p>
                      )}
                    </Col>
                  </Row>

                  {/* Submit */}
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

// import "../../styles/AuthPage.css";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../store/authService";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Row, Col, Container } from "react-bootstrap";
// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/myaccount";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = {
//       email: formData.get("email"),
//       password: formData.get("password"),
//     };

//     dispatch(loginUser(data))
//       .unwrap()
//       .then(() => navigate(from, { replace: true }))
//       .catch((error) => console.error("Login failed", error));
//   };

//   return (
//     <main>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>Login | Susha's Food Product</title>
//         <meta
//           name="description"
//           content="Securely log in to Susha's Food Product to manage orders, view your profile, and enjoy personalized offers."
//         />
//         <link rel="canonical" href="https://www.sushasfoodproduct.com/login" />
//       </Helmet>

//       {/* Page spacing */}
//       <div className="padding-top"></div>
//       <div className="padding-top"></div>

//       <Container className="mt-5">
//         <section aria-labelledby="login-title" className="calculation-padding">
//           <div className="auth-container">
//             {/* Left side illustration */}
//             <div className="auth-left fade-in-left">
//               <img
//                 src="/images/auth/reg.png"
//                 alt="Illustration of secure login process"
//                 className="auth-image"
//                 loading="lazy"
//               />
//             </div>

//             {/* Right side form */}
//             <div className="auth-right fade-in-right">
//               <form onSubmit={handleLogin} className="auth-form" noValidate>
//                 <header className="header-bar fade-in-right">
//                   <Row>
//                     <Col xs={12}>
//                       <h1
//                         id="login-title"
//                         className="display-6 fw-bold mb-3"
//                         style={{ color: "#294085" }}
//                       >
//                         Login to Your Account
//                       </h1>
//                     </Col>
//                   </Row>
//                 </header>
//                 <Row>
//                   <Col xs={12} md={12}>
//                     {" "}
//                     <label htmlFor="email" className="form-label">
//                       Email Address
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="Email Address"
//                       className="form-control"
//                       required
//                       autoComplete="email"
//                       aria-required="true"
//                     />
//                   </Col>
//                 </Row>
//                 {/* Email Field */}

//                 <Row>
//                   <Col xs={12} md={12}>
//                     {" "}
//                     <label htmlFor="password" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       id="password"
//                       name="password"
//                       type="password"
//                       placeholder="Password"
//                       className="form-control"
//                       required
//                       autoComplete="current-password"
//                       aria-required="true"
//                     />{" "}
//                   </Col>
//                 </Row>
//                 {/* Password Field */}

//                 {/* Login Button */}
//                 <div className="mt-4">
//                   <motion.button
//                     whileHover={{ x: 5, transition: { duration: 0.2 } }}
//                     whileTap={{ scale: 0.98 }}
//                     className="login-button btn btn-primary w-100"
//                     style={{
//                       borderRadius: "50px",
//                       fontWeight: "500",
//                       backgroundColor: "#294085",
//                       borderColor: "#294085",
//                     }}
//                     aria-label="Login to your account"
//                     type="submit"
//                   >
//                     Login →
//                   </motion.button>
//                 </div>

//                 {/* Register Link */}
//                 <p className="register-link-text mt-3 text-center">
//                   <button
//                     type="button"
//                     onClick={() => navigate("/register")}
//                     className="register-button btn btn-link"
//                     aria-label="Create a new account"
//                   >
//                     Don’t have an account? Create an Account
//                   </button>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </section>
//       </Container>
//     </main>
//   );
// };

// export default LoginPage;




// LoginPage.jsx

import "../../styles/AuthPage.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authService";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
// sid changes on 22 aug 2025: import useState for local form handling
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/myaccount";

  // sid changes on 22 aug 2025: added local state for form inputs
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  // sid changes on 22 aug 2025: added error state to track validation
  const [errors, setErrors] = useState({});

  // sid changes on 22 aug 2025: input handler for controlled inputs
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // sid changes on 22 aug 2025: validation function
  const validate = () => {
    let newErrors = {};
    if (!formValues.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email))
      newErrors.email = "Enter a valid email address";

    if (!formValues.password) newErrors.password = "Password is required";
    else if (formValues.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ true = no errors
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // sid changes on 22 aug 2025: added validation check before login
    if (!validate()) return;

    dispatch(loginUser(formValues))
      .unwrap()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => {
        console.error("Login failed", error);
        setErrors((prev) => ({
          ...prev,
          general: "Invalid email or password. Please try again.",
        }));
      });
  };

  return (
    <main>
      {/* SEO Meta Tags */}
      <Helmet>
         <title>Login | Susha's Food Product</title>
        <meta
          name="description"
          content="Securely log in t Susha's Food Product to manage orders, view your profile, and enjoy personalized offers."
        />
          <link rel="canonical" href="https://www.sushasfoodproduct.com/login" />
      </Helmet>

      {/* Page spacing */}
      <div className="padding-top"></div>
      <div className="padding-top"></div>

      <Container className="mt-5">
        <section aria-labelledby="login-title" className="calculation-padding">
          <div className="auth-container">
            {/* Left side illustration */}
            <div className="auth-left fade-in-left">
              <img
                src="/images/auth/reg.png"
                alt="Illustration of secure login process"
                className="auth-image"
                loading="lazy"
              />
            </div>

            {/* Right side form */}
            <div className="auth-right fade-in-right">
              <form onSubmit={handleLogin} className="auth-form" noValidate>
                <header className="header-bar fade-in-right">
                  <Row>
                    <Col xs={12}>
                      <h1
                        id="login-title"
                        className="display-6 fw-bold mb-3"
                        style={{ color: "#294085" }}
                      >
                        Login to Your Account
                      </h1>
                    </Col>
                  </Row>
                </header>

                {/* Email Field */}
                <Row>
                  <Col xs={12} md={12}>
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`} // sid changes on 22 aug 2025: added bootstrap validation class
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      aria-required="true"
                    />
                    {/* sid changes on 22 aug 2025: show email error */}
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </Col>
                </Row>

                {/* Password Field */}
                <Row>
                  <Col xs={12} md={12}>
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`} // sid changes on 22 aug 2025: added bootstrap validation class
                      value={formValues.password}
                      onChange={handleChange}
                      required
                      autoComplete="current-password"
                      aria-required="true"
                    />
                    {/* sid changes on 22 aug 2025: show password error */}
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </Col>
                </Row>

                {/* General error */}
                {errors.general && (
                  <p className="text-danger mt-2">{errors.general}</p>
                )}

                {/* Login Button */}
                <div className="mt-4">
                  <motion.button
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    className="login-button btn btn-primary w-100"
                    style={{
                      borderRadius: "50px",
                      fontWeight: "500",
                      backgroundColor: "#294085",
                      borderColor: "#294085",
                    }}
                    aria-label="Login to your account"
                    type="submit"
                  >
                    Login →
                  </motion.button>
                </div>

                {/* Register Link */}
                <p className="register-link-text mt-3 text-center">
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="register-button btn btn-link"
                    aria-label="Create a new account"
                  >
                    Don’t have an account? Create an Account
                  </button>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default LoginPage;

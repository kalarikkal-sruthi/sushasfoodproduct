import "../../styles/AuthPage.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authService";
import { useNavigate } from "react-router-dom";

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
        console.error("Login failed", error);
      });
  };
  return (
    <div>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <div className="auth-container">
          <div className="auth-left fade-in-left">
            <img
              src="/public/images/auth/reg.png"
              alt="Register Visual"
              className="auth-image"
            />
          </div>

          <div className="auth-right fade-in-right">
            <h2>Create Account</h2>
            <form onSubmit={handleRegister} className="auth-form">
              <input name="name" type="text" placeholder="Full Name" required />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                name="mobile"
                type="number"
                placeholder="Enter Number"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <input
                name="gender"
                type="text"
                placeholder="Enter Gender"
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;

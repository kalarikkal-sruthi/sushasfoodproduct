
import '../../styles/AuthPage.css'


const RegisterPage = () => {
  return (
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
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>

           <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingEmail">Email address</label>
      </div>
      </div>
      
   
    </div>
  );
};

export default RegisterPage;

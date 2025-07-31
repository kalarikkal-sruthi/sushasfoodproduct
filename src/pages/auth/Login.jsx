import '../../styles/AuthPage.css'

const LoginPage = () => {
  return (
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
      <div className="auth-right fade-in-right">
        <h2>Login</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

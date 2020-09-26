import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" value="tes@gmail.com" />
          <input type="password" placeholder="password" value="1234567" />
          <Link to="/app">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

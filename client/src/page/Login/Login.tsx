import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { AuthContext, AuthContextProps } from "./AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext) as AuthContextProps;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9090/users/login", {
        email: username,
        password: password
      });

      console.log("User:", response.data.user);
      console.log("Token:", response.data.token);

      authContext.setIsLoggedIn(true);
      authContext.setUser(response.data.user);
      authContext.setToken("bearer " + response.data.token);
      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      console.error(error);
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center login-container">
      <div className="login-form-container">
        {authContext.isLoggedIn ? (
          <h2>Welcome, {authContext.user?.firstName}!</h2>
        ) : (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className={`form-control ${error ? "is-invalid" : ""}`}
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${error ? "is-invalid" : ""}`}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="text-center mt-2">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

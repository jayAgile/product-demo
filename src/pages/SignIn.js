import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/signin.css";
export default function SignIn() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/register");

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="login-card">
          <div className="card-header">
            <div className="log">Login</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input required="" name="username" id="username" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                required=""
                name="password"
                id="password"
                type="password"
              />
            </div>
            <div className="form-group">
              <input value="Login" type="submit" onClick={handleClick} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

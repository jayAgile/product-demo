import React from "react";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/product-list");

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card">
        <div className="card-header">
          <div className="text-header">Register</div>
        </div>
        <div className="card-body">
          <form action="#">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                required=""
                className="form-control"
                name="username"
                id="username"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                required=""
                className="form-control"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                required=""
                className="form-control"
                name="password"
                id="password"
                type="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                required=""
                className="form-control"
                name="confirm-password"
                id="confirm-password"
                type="password"
              />
            </div>
            <input
              type="submit"
              className="btn"
              value="submit"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

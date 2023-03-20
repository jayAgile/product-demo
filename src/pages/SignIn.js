import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signin.css";
import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";
export default function SignIn() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/register");
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission == "granted") {
      //generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BKDUNMlRoikc1ni1J-kjTBbFrmxCK2xncLradoMq7Vitq_Zr2e4MlJ3JIOWGAZh3VKO0rC3WiQJMwaikhZAeYjs",
      });
      console.log("token generated", token);
    } else if (permission == "denied") {
      alert("denined permission");
    }
  }

  useEffect(() => {
    // dispatch(getUser());
    // dispatch(getProductList());
    // console.log("hello");
    requestPermission();

    // getFCMToken(setTokenFound);
  }, []);
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

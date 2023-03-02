import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signin.css";
import { postData } from "../utils/api";
import Loader from "../components/Loader";
export default function Post() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleClick = async () => {
    setIsLoading(true);
    console.log("nothing is happening");
    const bodyData = {
      title: title,
      body: body,
      userId: parseInt(inputRef.current.value),
    };
    console.log("🚀 ~ file: Post.js:18 ~ handleClick ~ bodyData:", bodyData);
    const res = await postData(bodyData);
    if (res != null || res != undefined) {
      navigate("/product-list");
    }
    setIsLoading(false);
    // console.log(res);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
              <div className="log">Post</div>
            </div>
            {/* <form> */}
            <input type="hidden" name="id" value={1} ref={inputRef} />
            <div className="form-group">
              <label htmlFor="username">Title:</label>
              <input
                required=""
                name="username"
                id="username"
                type="text"
                onChange={(x) => {
                  setTitle(x.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body:</label>
              <input
                required=""
                name="body"
                id="password"
                type="text"
                onChange={(x) => setBody(x.target.value)}
              />
            </div>
            <div className="form-group">
              <input value="Login" type="submit" onClick={handleClick} />
            </div>
            {/* </form> */}
          </div>
        </section>
      )}
    </>
  );
}

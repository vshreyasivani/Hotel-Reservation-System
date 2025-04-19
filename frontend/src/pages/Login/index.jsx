import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginAPI, SignupAPI } from "../../API";
import "./index.css";

const HotelLogin = () => {
  const [type, setType] = useState("login");
  const formRef = useRef(null)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(formData,payload)

    if (type === "login") {
      try {
        const response = await LoginAPI(payload);
        const { user_name } = response.data?.user;
        toast.success("Logged in successfully");
   
        sessionStorage.setItem("loggedIn", JSON.stringify({ user_name }));
        navigate("/");
      } catch (err) {
        console.log(err);
        const error = err?.response?.data?.error
        toast.error(error || "Something went wrong");
        sessionStorage.removeItem("loggedIn");
      }
    } else {
      try {
        await SignupAPI(payload);
        formRef.current.reset();
        toast.success("Signed up successfully");
        setType("login");
      } catch (err) {
        console.log(err);
        const error = err?.response?.data?.error;
        toast.error(error || "Something went wrong");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="user_name" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">{type === "login" ?  "Login":"Sign up"}</button>
          <p className="signup">
            Don't have an account?{" "}
            
            <a
              href="/#"
              className="signup"
              onClick={(e) => {
                e.preventDefault();
                type === "login" ? setType("signup") : setType("login");
                formRef.current.reset();
              }}
            >
              {type === "login" ? "Sign up" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default HotelLogin;

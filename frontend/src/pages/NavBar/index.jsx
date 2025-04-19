import { React, useState, useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

import Logo from "../../images/logo.png";
import UserAvatar from "../../images/user_avatar.png";

import "./index.css";

const NavBar = () => {
    const location = useLocation();
    const [loggedInfo, setLoggedInfo] = useState({
      logged_in: false,
      user_name: "",
    });

    console.log(location.pathname)
  
    useEffect(() => {
      const info = sessionStorage.getItem("loggedIn");
      if (info) {
        const { user_name } = JSON.parse(info);
        setLoggedInfo({ user_name, logged_in: true });
      }
    }, [location.pathname]);
  
    const handleLogout = () => {
      sessionStorage.removeItem("loggedIn");
      setLoggedInfo({ user_name: "", logged_in: false });
    };
  
    return (
      <div className="container">
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="Logo" width="100%" height="100%" />
          </div>
        </div>
        {
          <div className="nav">
            <div>
              <Link to="/about">
                <button>About Us</button>
              </Link>
            </div>
            {!loggedInfo?.logged_in && (
              <div>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>
            )}
            {loggedInfo?.logged_in && (
              <div>
                <Link to="/reserve">
                  <button>Reserve</button>
                </Link>
              </div>
            )}
          </div>
        }
        {loggedInfo?.logged_in && (
          <div className="user-container">
            <div className="user-avatar-container">
              <img
                src={UserAvatar}
                className="user-avatar"
                alt="Logo"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
            <div className="user-name">{loggedInfo?.user_name}</div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    );
  };


  export default NavBar;
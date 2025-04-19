import React from 'react';
// import Logo from "../../images/logo.png";
import './index.css';
import { Link } from "react-router-dom";


const App = () => {
  return (
    <div className='reserve-container'>
      {/* <div className="logo">
          <img src={Logo} alt="Logo" />
      </div> */}

      <div id="button1">
      <Link to="/breakfast">
        <button className="reserve-btn">Breakfast</button>
        </Link>
      </div>

      <div id="button2">
        <Link to="/lunch">
        <button className="reserve-btn">Lunch</button>
        </Link>
      </div>

      <div id="button3">
        <Link to="/dinner">
        <button className="reserve-btn">Dinner</button>
        </Link>
      </div>

      <div id="button4">
        <Link to="/events">
        <button className="reserve-btn">Events</button>
        </Link>
      </div>
    </div>
  );
};

export default App;

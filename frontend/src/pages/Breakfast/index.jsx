import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast"
import { CreateReservationAPI }from "../../API"
import { getUserName } from "../../utils"
import './index.css';

const BreakfastForm = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    payload["customer_name"] = getUserName();
    payload["meal_type"] = "Breakfast";
    console.log(payload)
    try {
      await CreateReservationAPI(payload);
      toast.success("Booked breakfast successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data;
      toast.error(error || "Something went wrong");
      sessionStorage.removeItem("loggedIn");
    }
  };

  return (
    <div className="outer">
    <div className="bfast">
      BREAKFAST
      <form onSubmit={handleSubmit}>
      <p>
        Menu : <Link to="/breakfastmenu">Click here to see the menu</Link>
        <br /><br />
        AC/NON-AC :
        <input type="radio" value="AC" name="restaurant_type" checked/>AC
        <input type="radio" value="NON-AC" name="restaurant_type"/>NON-AC
        <br /><br />
        <label htmlFor="bookdate">Date : </label>
        <input type="date" id="bookdate" name="date" required />
        <br /><br />
        <label htmlFor="numberDropdown">Number of people : </label>
        <select id="numberDropdown" name="number_of_people">
          {[...Array(15)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
          <option value="other">15+</option>
        </select>
        <br /><br />
        <label htmlFor="timeSlot">Time Slots : </label>
        <select id="timeSlot" className="second" name="time_slot">
          <option value="8-9">8am-9am</option>
          <option value="9-10">9am-10am</option>
          <option value="10-11">10am-11am</option>
          <option value="11-12">11am-12pm</option>
        </select>
      </p>
      <div className="bfastsubmit-container">
      <button className="bfastsubmit"  type="submit">Submit</button>
      </div>
      </form>
    </div>
    </div>
  );
};

export default BreakfastForm;

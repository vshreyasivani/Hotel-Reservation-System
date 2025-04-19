import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { CreateReservationAPI } from '../../API';
import { toast } from 'react-hot-toast';
import { getUserName } from '../../utils';
import './index.css';

const LunchForm = () => {

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    payload["customer_name"] = getUserName();
    payload["meal_type"] = "Lunch";
    console.log(payload)
  try {
     await CreateReservationAPI(payload);
    toast.success("Booked lunch successfully");
    navigate("/");
  } catch (err) {
    console.log(err);
    const { error } = err?.response?.data;
    toast.error(error || "Something went wrong");
    sessionStorage.removeItem("loggedIn");
  }
}
  return (
    <div className="outerlunch">
      <div className="lunch-container">
      <div className="lunch">
        LUNCH
        <form onSubmit={handleSubmit}>

      <p>
        <div className="insidepara">
      Menu : <Link to="/lunchmenu">Click here to see the menu</Link><br/><br/>
        AC/NON-AC : <input type="radio" value="AC" name="restaurant_type" checked/>AC <input type="radio" value="NON-AC" name="restaurant_type" />NON-AC<br/><br/>
        <label htmlFor="bookdate">Date : </label>
        <input type="date" id="bookdate" name="date" required/>
        <br/><br/>
        <label htmlFor="numberDropdown">Number of people : </label>
        <select id="numberDropdown" required name="number_of_people">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="other">15+</option>
        </select><br/><br/>
        <label htmlFor="timeSlot">Time Slots : </label>
        <select id="timeSlot" className="second" name="time_slot" required>
          <option value="12-1">12pm-1pm</option>
          <option value="1-2">1pm-2pm</option>
          <option value="2-3">2pm-3pm</option>
          <option value="3-4">3pm-4pm</option>
        </select>
        </div>
      </p>
      <div className="lunchsubmit-container">
      <button className="lunchsubmit"  type="submit">Submit</button>
      </div>
      </form>
      </div>
      </div>
      </div>
  );
};

export default LunchForm;

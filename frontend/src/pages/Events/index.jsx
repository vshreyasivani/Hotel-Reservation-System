import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast"
import { CreateReservationAPI }from "../../API"
import { getUserName } from "../../utils"
import './index.css';


const EventsForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    payload["customer_name"] = getUserName();
    console.log(payload)
    try {
      await CreateReservationAPI(payload);
      toast.success("Booked event successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data;
      toast.error(error || "Something went wrong");
      sessionStorage.removeItem("loggedIn");
    }
  };
  return (
        <div className="eventsouter">
          <br/>
          <br/>
      <div className="events">
        {/* <h1> */}
        EVENTS
        {/* </h1>*/}<br />
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
      <div className="insteadofp">
        <label htmlFor="chooseEvent">Choose your event : </label>
        <select className="chooseEvent" name="event">
          <option value="birthday">Birthday</option>
          <option value="reception">Reception</option>
          <option value="anniversary">Anniversary</option>
          <option value="official_meeting">Official Meetings</option>
          <option value="other">Others</option>
        </select><br/><br/>
        <label htmlFor="bookdate">Date : </label>
        <input type="date" id="bookdate" name="date" required/>
        <br/><br/>
        <label htmlFor="numberDropdown">Number of people : </label>
        <select id="numberDropdown" className="time" name="number_of_people">
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
          <option value="40-50">40-50</option>
          <option value="50-60">50-60</option>
          <option value="60-70">60-70</option>
          <option value="70-80">70-80</option>
          <option value="80-90">80-90</option>
          <option value="90-100">90-100</option>
        </select><br/><br/>
        <label htmlFor="timeSlot">Time Slots : </label>
        <select id="timeSlot" className="third" name="time_slot">
          <option value="10-12">10am-12pm</option>
          <option value="12-3">12pm-3pm</option>
          <option value="5-9">5pm-9pm</option>
        </select><br/><br/>
        Food items required : <textarea name="food_items" ></textarea>
        <div className="eventsubmit-container">
      <button className="eventsubmit"  type="submit">Submit</button>
      </div>
      </div>
      </form>
      </div>
  );
}

export default EventsForm;


import axios from "axios";

const API_URL = "http://localhost:8080";

export const LoginAPI = (payload) => {
  return axios.post(API_URL + "/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const CreateReservationAPI = (payload) => {
  return axios.post(API_URL + "/reservation", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const SignupAPI = (payload) => {
  return axios.post(API_URL + "/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
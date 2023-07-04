import React, { useState } from "react";
import axios from "axios";

import { AppointmentContext as APContext } from "../../../context/AppointmentContext";
import HorizontalLinearStepper from "./MultiStep";

export default function Appointments() {
  const [data, setdata] = useState({
    coupon: "",
    date: "",
    email: "",
    phone: "",
    message: "",
    name: "",
    time: "",
    type: "",
  });

  function handleData(data) {
    setdata(data);
  }

  function handleSubmit() {
    console.log(data);

    axios.post("https://massage-booking.up.railway.app/api/v1/bookings", data);
  }

  return (
    <APContext.Provider value={{ data, handleData }}>
      <APContext.Consumer>
        {({ data }) => {
          return (
            <form
              className="px-5 lg:py-5 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <HorizontalLinearStepper
                data={data}
                handleSubmit={handleSubmit}
              ></HorizontalLinearStepper>
            </form>
          );
        }}
      </APContext.Consumer>
    </APContext.Provider>
  );
}

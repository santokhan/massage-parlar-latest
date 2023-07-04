import { useState, useEffect } from "react";
import axios from "axios";

export default function GetTimeFromAPI({ inputDate }) {
  const [date, setdate] = useState("");

  useEffect(() => {
    axios
      .get("https://massage-booking.up.railway.app/api/v1/bookings")
      .then((date) => {
        setdate(date);
        console.log(date);
      });
  }, []);

  return date;
}

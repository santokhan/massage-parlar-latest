// React
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Mui
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Box } from "@mui/system";

// Context
import { AppointmentContext } from "../../../context/AppointmentContext";

export function GetDateFromAPI() {}

export default function MaterialUIPickers({ handleTimes }) {
  const { data, handleData } = useContext(AppointmentContext);

  const [value, setValue] = useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    // setValue(newValue);

    // Date object to string on change
    let newDate = new Date(newValue);
    newDate = [
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      newDate.getDate(),
    ];
    newDate = newDate.join("-");

    // setValue(newValue);
    setValue(newDate);
    handleData({ ...data, date: newDate });
  };
  const [date, setdate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://massage-booking.up.railway.app/api/v1/bookings?date=${value}`
      )
      .then((date) => {
        setdate(date.data);
        // console.log(date);
        // console.log(value);

        // lifting state up
        handleTimes(date.data);
      });
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: 320,
        }}
      >
        <DesktopDatePicker
          // label="Appointment Date"
          label="Afspraak Datum"
          minDate={new Date()}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} required sx={{ width: 320, my: 1 }} />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

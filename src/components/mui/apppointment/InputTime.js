import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function InputTime({ times }) {
  const { data, handleData } = useContext(AppointmentContext);

  const handleChange = (e) => {
    handleData({ ...data, time: e.target.value });
  };

  const timeArr = [
    "10.00",
    "11.00",
    "12.00",
    "09.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
  ];

  const bookedTime = [];
  times?.data?.map((time) => bookedTime.push(time.time));
  let availableTime = timeArr.filter((i) => !bookedTime.includes(i));
  availableTime.sort();

  return (
    <Box sx={{ minWidth: 320, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel>Time</InputLabel>
        <Select value={data.time} label="Time" required onChange={handleChange}>
          <h1 style={{ fontWeight: "bold", padding: "10px 15px" }}>
            {/* Available Time */}
            Beschikbare tijd
          </h1>
          {availableTime.map((e, i) => (
            <MenuItem value={e} key={i}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export function timeChecker(value, times) {
  console.log(times.data);

  if (typeof times.data === "object") {
    if (times.length > 0) {
      let APITimeArray = times.data || [];

      return APITimeArray.some((e) => e.time === value);
    } else {
    }
  }
}

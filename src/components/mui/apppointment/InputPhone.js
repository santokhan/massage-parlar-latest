import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function InputName() {
  const { data, handleData } = useContext(AppointmentContext);

  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 320 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="phone"
          type="text"
          label="Phone"
          defaultValue={data.phone}
          onChange={(e) => {
            handleData({ ...data, phone: e.target.value });
          }}
        />
      </div>
    </Box>
  );
}

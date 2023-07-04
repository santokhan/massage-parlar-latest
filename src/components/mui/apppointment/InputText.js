import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function InputText() {
  const { data, handleData } = useContext(AppointmentContext);
  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          // label="Message"
          label="Bericht"
          multiline
          rows={4}
          sx={{ width: 320 }}
          defaultValue={data.message}
          onChange={(e) => {
            handleData({ ...data, message: e.target.value });
          }}
        />
      </div>
    </Box>
  );
}

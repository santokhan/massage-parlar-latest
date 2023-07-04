import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppointmentContext } from "../../../context/AppointmentContext";
export default function InputCoupon() {
  const { data, handleData } = useContext(AppointmentContext);

  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="coupon"
          type="text"
          label="Coupon"
          defaultValue=""
          sx={{ width: 320 }}
          onChange={(e) => {
            handleData({ ...data, coupon: e.target.value });
          }}
        />
      </div>
    </Box>
  );
}

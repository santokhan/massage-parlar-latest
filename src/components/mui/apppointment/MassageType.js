import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function MassageType() {
  const { data, handleData } = useContext(AppointmentContext);

  const handleChange = (e) => {
    handleData({ ...data, type: e.target.value });
  };

  return (
    <Box sx={{ width: 320, m: 1, textTransfrom: "capitalize" }}>
      <FormControl fullWidth>
        <InputLabel>
          {/* Massage Type */}
          Massagetype
        </InputLabel>
        <Select
          value={data.type}
          // label="Massage Type"
          label="Massagetype"
          required
          onChange={handleChange}
        >
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="shiatsu">Shiatsu</MenuItem>
          <MenuItem value="chair">stoel</MenuItem>
          {/* <MenuItem value="relaxation">Relaxation</MenuItem> */}
          <MenuItem value="relaxation">ontspanning</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

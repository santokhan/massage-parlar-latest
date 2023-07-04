import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SLayout, { SHeader } from "../../section-layout/SectionLayout";

export default function Massage() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SLayout>
      <SHeader>
        <div className="max-w-4xl mx-auto border-b">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Shiatsu massage" />
            <Tab label="Hotstone massage" />
            <Tab label="Stoelmassage" />
            <Tab label="Ontspanningsmassage" />
            <Tab label="Sportmassage" />
            <Tab label="Klankschaal massage" />
            <Tab label="Aan huis / Bedrijf" />
          </Tabs>
        </div>
      </SHeader>
    </SLayout>
  );
}

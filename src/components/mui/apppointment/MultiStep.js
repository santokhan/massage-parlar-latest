import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// inputs
import DatePicker from "./DatePicker";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputText from "./InputText";
import InputPhone from "./InputPhone";
import InputCoupon from "./InputCoupon";
import MassageType from "./MassageType";
import InputTime from "./InputTime";

// mui
const steps = ["", "", "", ""];

export default function HorizontalLinearStepper({ data, handleSubmit }) {
  const [activeStep, setActiveStep] = useState(0);

  // lifting state
  const [times, settimes] = useState([]);
  function handleTimes(arr) {
    settimes(arr);
  }

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const submit = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    handleSubmit();
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps} key={label + 2}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 4, mb: 2 }}>
            All steps completed - you&apos;re booked an appointment.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </Box>
        </>
      ) : (
        <>
          {activeStep === 0 && (
            <Box
              sx={{ pt: 8, pb: 6, display: "flex", flexWrap: "wrap", gap: 2 }}
            >
              <MassageType></MassageType>
              <InputName></InputName>
            </Box>
          )}
          {activeStep === 1 && (
            <Box
              sx={{ pt: 8, pb: 6, display: "flex", flexWrap: "wrap", gap: 2 }}
            >
              <InputEmail></InputEmail>
              <InputPhone></InputPhone>
            </Box>
          )}
          {activeStep === 2 && (
            <Box
              sx={{ pt: 8, pb: 6, display: "flex", flexWrap: "wrap", gap: 2 }}
            >
              <DatePicker handleTimes={handleTimes}></DatePicker>
              <InputTime times={times}></InputTime>
            </Box>
          )}
          {activeStep === 3 && (
            <Box sx={{ pt: 8, pb: 6, gap: 2 }}>
              <InputCoupon></InputCoupon>
              <InputText></InputText>
            </Box>
          )}

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pt: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              {/* Back */}
              Terug
            </Button>
            {activeStep === 0 && (
              <Button
                onClick={handleNext}
                disabled={data.type && data.name ? false : true}
              >
                {/* Next */}
                Volgende
              </Button>
            )}
            {activeStep === 1 && (
              <Button
                onClick={handleNext}
                disabled={data.email && data.phone ? false : true}
              >
                {/* Next */}
                Volgende
              </Button>
            )}
            {activeStep === 2 && (
              <Button onClick={handleNext} disabled={data.date ? false : true}>
                {/* Next */}
                Volgende
              </Button>
            )}

            {activeStep === 3 && (
              <Button onClick={submit}>{/* Submit */} Indienen</Button>
            )}
            {/* {activeStep === steps.length - 1 ? (
              <Button onClick={submit}>Submit</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )} */}
          </Box>
        </>
      )}
    </Box>
  );
}

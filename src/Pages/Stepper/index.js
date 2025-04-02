import DashboardLayout from "../../Layouts/Layoutcontainers";
import BTBox from "../../components/BTBox";
import BTStepper from "../../components/BTStepper";
import { TextField, Button } from "@mui/material";
import { Settings, AppBlocking, TrackChanges } from "@mui/icons-material";
import { useState } from "react";
const Stepper = () => {
  const [completedSteps, setCompletedSteps] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const steps1 = [
    {
      label: "Account Details",
      content: ({ handleNext }) => (
        <div>
          <TextField label="Email" fullWidth margin="normal" />
          <Button onClick={handleNext}>Continue</Button>
        </div>
      ),
    },
    {
      label: "Personal Information",
      content: "Step 2 content",
    },
  ];
  const steps2 = [
    {
      label: "Step 1",
      content: "Content 1",
      clickable: true,
      optional: "YYYY",
      icon: <Settings />,
    },
    {
      label: "Step 2",
      content: "Content 2",
      clickable: true,
      optional: "ZZZ",
      icon: <AppBlocking />,
    },
    {
      label: "Step 3",
      content: "Content 3",
      clickable: true,
      optional: "CCCC",
      icon: <TrackChanges />,
    },
  ];
  const handleComplete = (step) => {
    setCompletedSteps({ ...completedSteps, [step]: true });
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompletedSteps({});
  };

  return (
    <DashboardLayout>
      <BTStepper
        steps={steps1}
        orientation="vertical"
        alternativeLabel={false}
      />
      <BTBox mt={2}>
        <BTStepper
          steps={steps2}
          activeStep={activeStep}
          onStepChange={setActiveStep}
          nonLinear={false}
          completedSteps={completedSteps}
          handleComplete={handleComplete}
          handleReset={handleReset}
        />
      </BTBox>
    </DashboardLayout>
  );
};
export default Stepper;

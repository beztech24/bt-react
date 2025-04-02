import React, { useState } from "react";
import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import BTButton from "../BTButton";
import BTBox from "../BTBox";

const BTStepper = ({
  steps,
  activeStep: externalActiveStep,
  orientation = "horizontal",
  alternativeLabel = true,
  nonLinear = false,
  connector,
  showStepContent = true,
  showActions = true,
  onStepChange,
  completedSteps = {},
  handleComplete,
  handleReset,
  sx = {},
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [internalActiveStep, setInternalActiveStep] = useState(0);
  const activeStep =
    externalActiveStep !== undefined ? externalActiveStep : internalActiveStep;

  const handleNext = () => {
    const newStep = activeStep + 1;
    if (onStepChange) {
      handleComplete(activeStep);
      onStepChange(newStep);
    } else {
      setInternalActiveStep(newStep);
    }
  };

  const handleBack = () => {
    const newStep = activeStep - 1;
    if (onStepChange) {
      onStepChange(newStep);
    } else {
      setInternalActiveStep(newStep);
    }
  };

  const handleStep = (step) => () => {
    if (onStepChange) {
      onStepChange(step);
    } else {
      setInternalActiveStep(step);
    }
  };

  // Determine orientation based on screen size if responsive
  const resolvedOrientation =
    orientation === "responsive"
      ? isMobile
        ? "vertical"
        : "horizontal"
      : orientation;

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <MuiStepper
        activeStep={activeStep}
        orientation={resolvedOrientation}
        alternativeLabel={
          resolvedOrientation === "horizontal" && alternativeLabel
        }
        nonLinear={nonLinear}
        connector={connector}
      >
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};

          if (nonLinear) {
            stepProps.completed = completedSteps[index] || false;
          }

          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel
                {...labelProps}
                onClick={step.clickable ? handleStep(index) : undefined}
                icon={step?.icon ? step?.icon : undefined}
                slotProps={{
                  stepIcon: {
                    color:
                      activeStep === index
                        ? "primary.main"
                        : completedSteps[index]
                        ? "success.main"
                        : "grey.500",
                    fontSize: "1.5rem",
                  },
                }}
                optional={
                  step.optional && (
                    <Typography variant="caption" color="error">
                      {step.optional}
                    </Typography>
                  )
                }
              >
                {step.label}
              </StepLabel>
              {showStepContent && resolvedOrientation === "vertical" && (
                <StepContent>
                  {typeof step.content === "function"
                    ? step.content({ activeStep, handleNext, handleBack })
                    : step.content}
                </StepContent>
              )}
            </Step>
          );
        })}
      </MuiStepper>

      {showStepContent &&
        resolvedOrientation === "horizontal" &&
        activeStep < steps.length && (
          <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
            {typeof steps[activeStep].content === "function"
              ? steps[activeStep].content({
                  activeStep,
                  handleNext,
                  handleBack,
                })
              : steps[activeStep].content}
          </Paper>
        )}

      {showActions && (
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
          <BTButton
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </BTButton>
          <Box>
            {handleReset && (
              <BTButton onClick={handleReset} sx={{ mr: 1 }}>
                Reset
              </BTButton>
            )}
            <BTButton
              color="info"
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </BTButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

BTStepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
      optional: PropTypes.string,
      clickable: PropTypes.bool,
    })
  ).isRequired,
  activeStep: PropTypes.number,
  orientation: PropTypes.oneOf(["horizontal", "vertical", "responsive"]),
  alternativeLabel: PropTypes.bool,
  nonLinear: PropTypes.bool,
  connector: PropTypes.node,
  showStepContent: PropTypes.bool,
  showActions: PropTypes.bool,
  onStepChange: PropTypes.func,
  completedSteps: PropTypes.object,
  handleComplete: PropTypes.func,
  handleReset: PropTypes.func,
  sx: PropTypes.object,
};

export default BTStepper;

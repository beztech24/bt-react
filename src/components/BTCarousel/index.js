import * as React from "react";
import { useEffect } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import Image1 from "../../assets/images/Untitled design.png";
import Image2 from "../../assets/images/download (1) - Copy.png";
import BTBox from "../BTBox";

export default function BTCarousel({
  time = 3000,
  width = 400,
  height = 250,
  content = [Image1, Image2],
  autoPlay = false,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = content.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      autoPlay && handleNext();
    }, time);
    return () => clearInterval(interval);
  }, [activeStep]);
  return (
    <BTBox sx={{ maxWidth: width, flexGrow: 1 }}>
      <BTBox
        sx={{
          position: "relative",
          height: height,
          maxWidth: width,
          width: "100%",
          mx: "auto",
          overflow: "hidden",
          "&:hover .arrow": {
            opacity: 1,
          },
        }}
      >
        <img src={content[activeStep]} width={"100%"} height={"100%"} />
        <IconButton
          onClick={handleBack}
          className="arrow"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgb(255, 250, 250)",
            "&:hover": { backgroundColor: "rgba(194, 186, 186, 0.57)" },
            opacity: 0,
            transition: "opacity 0.3s",
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          className="arrow"
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgb(255, 250, 250)",
            "&:hover": { backgroundColor: "rgba(194, 186, 186, 0.57)" },
            opacity: 0,
            transition: "opacity 0.3s",
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </BTBox>
      <BTBox
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "center",
          mt: 2,
          gap: 0.5,
        }}
      >
        {content.map((_, index) => (
          <BTBox
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: activeStep === index ? "grey" : "lightgrey",
              cursor: "pointer",
            }}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </BTBox>
    </BTBox>
  );
}

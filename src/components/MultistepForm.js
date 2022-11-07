import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SignUpForm from "./SignUpForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginLeft: theme.spacing(14),
  },
  nextButton: {
    marginRight: theme.spacing(14),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "none",
    color: theme.palette.text.secondary,
  },
  ButtonStyle: {
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
}));

function getSteps() {
  return ["Basic Information", "Personal Information", "Address Information"];
}
const steps = getSteps();
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      // props pass to the component
      return <SignUpForm Text={steps[0]} />;
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

function MultistepForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Grid container justifyContent="center" className={classes.root}>
        <Grid item xs={12} md={10}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Container>
              {activeStep === steps.length ? (
                <Container>
                  <Box className={classes.instructions}>
                    All steps completed
                  </Box>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Container>
              ) : (
                <Container>
                  <Box className={classes.instructions}>
                    {getStepContent(activeStep)}
                    <Grid container  className={classes.ButtonStyle}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        color="secondary"
                        variant="contained"
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.nextButton}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </Grid>
                  </Box>
                </Container>
              )}
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default MultistepForm;

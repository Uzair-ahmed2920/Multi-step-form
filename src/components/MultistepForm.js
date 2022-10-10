import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import { makeStyles} from "@material-ui/styles";
import SignUpForm from "./SignUpForm";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  },
  ButtonStyle:{
    justifyContent: "space-between"
  },
}));

function getSteps() {
  return [
    "Basic Information",
    "Personal Information",
    "Address Information",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SignUpForm activeStep={getSteps}/>;
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
  const steps = getSteps();

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
            <Container >
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
                  </Box>
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
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
              
                  
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

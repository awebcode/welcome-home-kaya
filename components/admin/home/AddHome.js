import { Send } from "@mui/icons-material";
import { Box, Button, Container, Stack, Step, StepButton, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddLocation from "./add/addLocation/AddLocation";
import AddDetails from "./add/addDetails/AddDetails";
import AddImages from "./add/addImages/AddImages";
import { useValue } from "@/context/ContextProvider";
import { clearProjectErrors, createNewProject, getProjects, resetProjectState } from "@/redux/actions/projectsActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddRoom = ({ setPage }) => {
  const dispatchRedux = useDispatch();
  const {loading,error,isCreated}=useSelector((s)=>s.project)
  const {
    state: {
      images,
      details,
      location,
      currentUser,
      keyFeatures,
      underHomeFeatures,
      address
    },
    dispatch,
  } = useValue();

  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: "Location", completed: false },
    { label: "Details", completed: false },
    { label: "Images", completed: false },
  ]);
  const [showSubmit, setShowSubmit] = useState(false);
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      const stepIndex = findUnfinished();
      setActiveStep(stepIndex);
    }
  };
  const checkDisabled = () => {
    if (activeStep < steps.length - 1) return false;
    const index = findUnfinished();
    if (index !== -1) return false;
    return true;
  };
  const findUnfinished = () => {
    return steps.findIndex((step) => !step.completed);
  };

  useEffect(() => {
    if (images?.length) {
      if (!steps[2].completed) setComplete(2, true);
    } else {
      if (steps[2].completed) setComplete(2, false);
    }
  }, [images]);
  useEffect(() => {
    if (details?.title?.length > 4 && details?.description?.length > 9) {
      if (!steps[1].completed) setComplete(1, true);
    } else {
      if (steps[1].completed) setComplete(1, false);
    }
  }, [details]);
  useEffect(() => {
    if (location?.lng || location?.lat) {
      if (!steps[0].completed) setComplete(0, true);
    } else {
      if (steps[0].completed) setComplete(0, false);
    }
  }, [location]);
  const setComplete = (index, status) => {
    setSteps((steps) => {
      steps[index].completed = status;
      return [...steps];
    });
  };
  useEffect(() => {
    if (findUnfinished() === -1) {
      if (!showSubmit) setShowSubmit(true);
    } else {
      if (showSubmit) setShowSubmit(false);
    }
  }, [steps]);
  const handleSubmit = () => {
    const room = {
      lng: location.lng,
      lat: location.lat,
      address: location.address,
      price: details.price,
      title: details.title,
      description: details.description,
      images,
      keyFeatures: details.keyFeatures,
      // homeFeatures: details.underHomeFeatures,
      bed: details.bed,
      bath: details.bath,
      so_ft: details.soft,
      acress: details.acress,
      targetCompletationDate: details.targetCompletation,
      cost: details.cost,
      budget: details.budget,
      propertyListingPrice: details.propertyListingPrice,
      constructionEstimate: details.constructionEstimate,

      homeType: details.homeType,
      builder: details.builder,
      status: details.status,
    };
    console.log("addroom",room)
    dispatchRedux(createNewProject(room))
    
  };

  useEffect(() => {
    if (isCreated) {
      toast.success("Project added successfully.")
      dispatchRedux(resetProjectState());
      dispatchRedux(getProjects())
      dispatch({ type: "RESET_ROOM" })
      setPage(0)
    }
     if (error) {
       toast.error(error);
       dispatchRedux(clearProjectErrors());
     }
},[dispatchRedux,error,isCreated])

  return (
    <Container sx={{ my: 4 }}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((step, index) => (
          <Step key={step.label} completed={step.completed}>
            <StepButton onClick={() => setActiveStep(index)}>{step.label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ pb: 7 }}>
        {
          {
            0: <AddLocation />,
            1: <AddDetails />,
            2: <AddImages />,
          }[activeStep]
        }

        <Stack direction="row" sx={{ pt: 2, justifyContent: "space-around" }}>
          <Button
            color="inherit"
            disabled={!activeStep}
            onClick={() => setActiveStep((activeStep) => activeStep - 1)}
          >
            Back
          </Button>
          <Button disabled={checkDisabled()} onClick={handleNext}>
            Next
          </Button>
        </Stack>

        <Stack sx={{ alignItems: "center" }}>
          <Button
            disabled={!showSubmit}
            variant="contained"
            endIcon={<Send />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default AddRoom;

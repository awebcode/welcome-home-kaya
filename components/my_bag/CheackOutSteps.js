import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useRouter } from "next/router";


const CheckoutSteps = ({ activeStep }) => {
    const router=useRouter()
  const steps = [
    {
      label: (
        <Typography
          className="cursor-pointer"
          onClick={() => router.push("/my_bag/shipping")}
        >
          Shipping Details
        </Typography>
      ),
      icon: (
        <LocalShippingIcon
          className="cursor-pointer"
          onClick={() => router.push("/my_bag/shipping")}
        />
      ),
    },
    {
      label: (
        <Typography
          className="cursor-pointer"
          onClick={() => router.push("/my_bag/confirmOrder")}
        >
          Confirm Order
        </Typography>
      ),
      icon: (
        <LibraryAddCheckIcon
          className="cursor-pointer"
          onClick={() => router.push("/my_bag/confirmOrder")}
        />
      ),
    },
    {
      label: (
        <Typography
          className="cursor-pointer"
          onClick={() => router.push("/my_bag/payment")}
        >
          Payment
        </Typography>
      ),
      icon: (
        <AccountBalanceIcon
          className="cursor-pointer"
          onClick={() => router.push("/my_bag/payment")}
        />
      ),
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps;

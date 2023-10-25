import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import InfoField from "./InfoField";
import { useValue } from "@/context/ContextProvider";
import { Button } from "antd";

const AddDetails = () => {
  const {
    state: {
      details: {
        title,
        description,
        price,
        keyFeatures,
        underHomeFeatures,
        bed,
        bath,
        soft,
        acress,
        targetCompletation,
        cost,
        budget,
        propertyListingPrice,
        constructionEstimate,
        homeType,
        builder,
        status,
      },
    },
    dispatch,
  } = useValue();

  const [newKeyFeature, setNewKeyFeature] = useState("");
  const [newUnderHomeFeature, setNewUnderHomeFeature] = useState("");

  const handlePriceChange = (e) => {
    dispatch({ type: "UPDATE_DETAILS", payload: { price: e.target.value } });
  };

  const addFeature = (feature, featureType) => {
    if (featureType === "keyFeatures") {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...keyFeatures, feature],
        },
      });
    } else {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...underHomeFeatures, feature],
        },
      });
    }
  };

  const removeFeature = (index, featureType) => {
    const updatedFeatures =
      featureType === "keyFeatures"
        ? keyFeatures.filter((_, i) => i !== index)
        : underHomeFeatures.filter((_, i) => i !== index);

    dispatch({
      type: "UPDATE_DETAILS",
      payload: {
        [featureType]: updatedFeatures,
      },
    });
  };

  const editFeature = (index, featureType, updatedFeature) => {
    const updatedFeatures =
      featureType === "keyFeatures"
        ? keyFeatures.map((item, i) => (i === index ? updatedFeature : item))
        : underHomeFeatures.map((item, i) => (i === index ? updatedFeature : item));

    dispatch({
      type: "UPDATE_DETAILS",
      payload: {
        [featureType]: updatedFeatures,
      },
    });
  };

  const handleFeatureInput = (e, setFeature) => {
    setFeature(e.target.value);
  };

  const handleFeatureKeyUp = (e) => {
    if (e.key === "Enter") {
      addFeature(newKeyFeature, "keyFeatures");
      setNewKeyFeature("");
    }
  };
  const handleHomeFeatureKeyUp = (e) => {
    if (e.key === "Enter") {
      addFeature(newUnderHomeFeature, "underHomeFeatures");
      setNewUnderHomeFeature("");
    }
  };

  return (
    <Stack className="max-w-2xl mx-auto p-4" spacing={4}>
      <InfoField
        mainProps={{ name: "title", label: "Title", value: title }}
        minLength={5}
      />
      <InfoField
        mainProps={{
          name: "description",
          label: "Description",
          value: description,
        }}
        minLength={10}
        optionalProps={{ multiline: true, rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "price",
          label: "Price ($)*",
          value: price,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "cost",
          label: "Cost ($)*",
          value: cost,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "budget",
          label: "Budget ($)*",
          value: budget,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "propertyListingPrice",
          label: "PropertyListingPrice ($)*",
          value: propertyListingPrice,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* home type */}
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Select Home Type</InputLabel>
        <Select
          label="Select Home Type"
          value={homeType} // Make sure you have 'homeType' in your state
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DETAILS",
              payload: { homeType: e.target.value },
            })
          }
        >
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="duplex">Duplex</MenuItem>
          <MenuItem value="condo">Condo</MenuItem>
          <MenuItem value="townHouse">TownHouse</MenuItem>
          <MenuItem value="villa">Villa</MenuItem>
          <MenuItem value="cottage">Cottage</MenuItem>
          {/* Add more options as needed */}
        </Select>
      </FormControl>
      {/* Builder */}
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Select Builder Type</InputLabel>
        <Select
          label="Select Builder Type"
          value={builder} // Make sure you have 'builderType' in your state
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DETAILS",
              payload: { builder: e.target.value },
            })
          }
        >
          <MenuItem value="individual">Individual</MenuItem>
          <MenuItem value="company">Company</MenuItem>
          <MenuItem value="contractor">Contractor</MenuItem>
          <MenuItem value="developer">Developer</MenuItem>
          <MenuItem value="architect">Architect</MenuItem>

          {/* Add more options as needed */}
        </Select>
      </FormControl>
      {/* Status */}
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Select Status</InputLabel>
        <Select
          label="Select Status"
          value={status} // Make sure you have 'statusType' in your state
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DETAILS",
              payload: { status: e.target.value },
            })
          }
        >
          <MenuItem value="Available">Available</MenuItem>
          <MenuItem value="booked">Booked</MenuItem>
          <MenuItem value="sold">Sold Out</MenuItem>
          <MenuItem value="underConstruction">underConstruction</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>

          {/* Add more options as needed */}
        </Select>
      </FormControl>
      <InfoField
        mainProps={{
          name: "bed",
          label: "Bed",
          value: bed,
        }}
        optionalProps={{ multiline: true }}
      />
      <InfoField
        mainProps={{
          name: "bath",
          label: "Bath *",
          value: bath,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "soft",
          label: "So.Ft *",
          value: soft,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "acress",
          label: "Acress (%)*",
          value: acress,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "targetCompletation",
          label: "Target Completation Date (30 January 2024) *",
          value: targetCompletation,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "constructionEstimate",
          label: "Construction Estimate *",
          value: constructionEstimate,
        }}
        optionalProps={{ rows: 4 }}
      />
      <div className="flex items-center">
        <TextField
          required={true}
          label="Key Features"
          variant="outlined"
          className="flex-grow mr-2"
          value={newKeyFeature}
          onChange={(e) => handleFeatureInput(e, setNewKeyFeature)}
          onKeyUp={(e) => handleFeatureKeyUp(e)}
        />
        <Button
          onClick={() => handleFeatureKeyUp({ key: "Enter" }, "keyFeatures")}
          className="h-full bg-blue-600 p-3 mx-4 text-white"
        >
          + Add
        </Button>
      </div>
      <ul>
        {keyFeatures?.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() =>
                editFeature(index, "keyFeatures", prompt("Edit Feature", feature))
              }
              style={{ cursor: "pointer" }}
            >
              {feature}{" "}
              <Button variant="outlined" className="ml-2 mx-2 text-green-400">
                Edit
              </Button>
            </span>
            <Button
              onClick={() => removeFeature(index, "keyFeatures")}
              variant="outlined"
              className="ml-2 text-red-400"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      {/* <div className="flex items-center">
        <TextField
          label="Home Features"
          variant="outlined"
          className="flex-grow mr-2"
          value={newUnderHomeFeature}
          onChange={(e) => handleFeatureInput(e, setNewUnderHomeFeature)}
          onKeyUp={(e) => handleHomeFeatureKeyUp(e)}
        />
        <Button
          onClick={() => handleHomeFeatureKeyUp({ key: "Enter" }, "underHomeFeatures")}
          className="h-full bg-blue-600 p-3 mx-4 text-white"
        >
          + Add
        </Button>
      </div>
      <ul>
        {underHomeFeatures?.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() =>
                editFeature(index, "underHomeFeatures", prompt("Edit Feature", feature))
              }
              style={{ cursor: "pointer" }}
            >
              {feature}{" "}
              <Button variant="outlined" className="ml-2 mx-2 text-green-400">
                Edit
              </Button>
            </span>
            <Button
              onClick={() => removeFeature(index, "underHomeFeatures")}
              variant="outlined"
              className="ml-2 text-red-400"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul> */}
    </Stack>
  );
};

export default AddDetails;

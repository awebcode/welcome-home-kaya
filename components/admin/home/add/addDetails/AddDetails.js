import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
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
        keyProjectNotes,
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

        generalContractor,
        constractionManager,
        projectManager,
        client,
        documents,
        project_size,
        zip,
        city,
        state,
        currentPhase,
        site_contract,
        site_phone,
        customer_contract,
        customer_phone,
        order_trigger,
        order_trigger_stage,
        drawings,
        takeOfCompleted,
        bucket,
        Count_of_Products_by_project,
        Order_Tracker,
        related_to_order,
        b_vs_a,
        spent_to_date,
        actualCoDate,
        spend,
        homeType,
        builder,
        status,
        customer_selection,
      },
    },
    dispatch,
  } = useValue();
  
  const [newKeyFeature, setNewKeyFeature] = useState("");
  const [newKeyProjectNotes, setNewkeyProjectNotes] = useState("");
  const [newCountOfProductsByProject, setNewCountOfProductsByProject] = useState("");
  const [newOrderTracker, setNewOrderTracker] = useState("");
  const [newRelatedToOrder, setNewRelatedToOrder] = useState("");
  

  const addFeature = (feature, featureType) => {
    
    if (featureType === "keyFeatures") {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...keyFeatures, feature],
        },
      });
    } else if (featureType === "Count_of_Products_by_project") {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...Count_of_Products_by_project, feature],
        },
      });
    } else if (featureType === "Order_Tracker") {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...Order_Tracker, feature],
        },
      });
    } else if (featureType === "related_to_order") {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...related_to_order, feature],
        },
      });
    } else {
      dispatch({
        type: "UPDATE_DETAILS",
        payload: {
          [featureType]: [...keyProjectNotes, feature],
        },
      });
    }
  };

  const removeFeature = (index, featureType) => {
    const updatedFeatures =
      featureType === "keyFeatures"
        ? keyFeatures.filter((_, i) => i !== index)
        : featureType === "Count_of_Products_by_project"
        ? Count_of_Products_by_project.filter((_, i) => i !== index)
        : featureType === "Order_Tracker"
        ? Order_Tracker.filter((_, i) => i !== index)
        : featureType === "related_to_order"
        ? related_to_order.filter((_, i) => i !== index)
        : keyProjectNotes.filter((_, i) => i !== index);

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
        : featureType === "Count_of_Products_by_project"
        ? Count_of_Products_by_project.map((item, i) =>
            i === index ? updatedFeature : item
          )
        : featureType === "Order_Tracker"
        ? Order_Tracker.map((item, i) => (i === index ? updatedFeature : item))
        : featureType === "related_to_order"
        ? related_to_order.map((item, i) => (i === index ? updatedFeature : item))
        : keyProjectNotes.map((item, i) => (i === index ? updatedFeature : item));

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
  const handleKeyProjectNotes = (e) => {
    if (e.key === "Enter") {
      addFeature(newKeyProjectNotes, "keyProjectNotes");
      setNewkeyProjectNotes("");
    }
  };

  // count of products

  const handleCountOfProductsByProject = (e) => {
    
    if (e.key === "Enter") {
      addFeature(newCountOfProductsByProject, "Count_of_Products_by_project");
      setNewCountOfProductsByProject("");

      
    }
  };

  // OrderTracker

  const handleOrderTracker = (e) => {
    if (e.key === "Enter") {
      addFeature(newOrderTracker, "Order_Tracker");
      setNewOrderTracker("");
    }
  };
  // RelatedToOrder

  const handleRelatedToOrder = (e) => {
    if (e.key === "Enter") {
      addFeature(newRelatedToOrder, "related_to_order");
      setNewRelatedToOrder("");
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
          name: "zip",
          label: "Zip Code *",
          value: zip,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* city */}

      <InfoField
        mainProps={{
          name: "city",
          label: "City *",
          value: city,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* // state */}
      <InfoField
        mainProps={{
          name: "state",
          label: "State *",
          value: state,
        }}
        optionalProps={{ rows: 4 }}
      />
      <InfoField
        mainProps={{
          name: "project_size",
          label: "Project Size (Sq ft under AC)*",
          value: project_size,
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
      <InfoField
        mainProps={{
          name: "homeType",
          label: "Home Type *",
          value: homeType,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* Builder */}
      <InfoField
        mainProps={{
          name: "builder",
          label: "Builder *",
          value: builder,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* Status */}
      <InfoField
        mainProps={{
          name: "status",
          label: "Status *",
          value: status,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* currentPhase */}
      <InfoField
        mainProps={{
          name: "currentPhase",
          label: "Current Phase *",
          value: currentPhase,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* site_contract */}
      <InfoField
        mainProps={{
          name: "site_contract",
          label: "Site Contract *",
          value: site_contract,
        }}
        optionalProps={{ rows: 4 }}
      />

      {/* site_phone */}
      <InfoField
        mainProps={{
          name: "site_phone",
          label: "Site Phone *",
          value: site_phone,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* customer_contract */}
      <InfoField
        mainProps={{
          name: "customer_contract",
          label: "Customer Contract *",
          value: customer_contract,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* customer_phone */}
      <InfoField
        mainProps={{
          name: "customer_phone",
          label: "Customer Phone *",
          value: customer_phone,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* customer_selection */}
      <InfoField
        mainProps={{
          name: "customer_selection",
          label: "Customer Selection *",
          value: customer_selection,
        }}
        optionalProps={{ rows: 4 }}
      />

      {/* order_trigger */}
      <InfoField
        mainProps={{
          name: "order_trigger",
          label: "Order  Trigger *",
          value: order_trigger,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* order_trigger_stage */}
      <InfoField
        mainProps={{
          name: "order_trigger_stage",
          label: "Order  Trigger Stage *",
          value: order_trigger_stage,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/*  drawings */}
      <InfoField
        mainProps={{
          name: " drawings",
          label: "Drawings *",
          value: drawings,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/*  takeOfCompleted */}
      <InfoField
        mainProps={{
          name: "takeOfCompleted",
          label: "takeOfCompleted *",
          value: takeOfCompleted,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/*  bucket */}
      <InfoField
        mainProps={{
          name: "bucket",
          label: "Bucket *",
          value: bucket,
        }}
        optionalProps={{ rows: 4 }}
      />

      {/*  b_vs_a */}
      <InfoField
        mainProps={{
          name: "b_vs_a",
          label: "B v A *",
          value: b_vs_a,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/*  spent_to_date */}
      <InfoField
        mainProps={{
          name: "spent_to_date",
          label: "Spend To Date *",
          value: spent_to_date,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/*  spend */}
      <InfoField
        mainProps={{
          name: "spend",
          label: "Spend *",
          value: spend,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/*  actualCoDate */}
      <InfoField
        mainProps={{
          name: "actualCoDate",
          label: "actualCoDate *",
          value: actualCoDate,
        }}
        optionalProps={{ rows: 4 }}
      />
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
      {/* generalContractor */}
      <InfoField
        mainProps={{
          name: "generalContractor",
          label: "General Contractor Name *",
          value: generalContractor,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* constractionManager */}
      <InfoField
        mainProps={{
          name: "constractionManager",
          label: "Constraction Manager Name *",
          value: constractionManager,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* projectManager */}
      <InfoField
        mainProps={{
          name: "projectManager",
          label: "Project Manager Name *",
          value: projectManager,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* client */}
      <InfoField
        mainProps={{
          name: "client",
          label: "Client Name *",
          value: client,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* documents */}
      <InfoField
        mainProps={{
          name: "documents",
          label: "Project Documents (URL) *",
          value: documents,
        }}
        optionalProps={{ rows: 4 }}
      />
      {/* key features */}
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
      {/* key project notes features */}
      <div className="flex items-center">
        <TextField
          label="Key Project Notes*"
          variant="outlined"
          className="flex-grow mr-2"
          value={newKeyProjectNotes}
          onChange={(e) => handleFeatureInput(e, setNewkeyProjectNotes)}
          onKeyUp={(e) => handleKeyProjectNotes(e)}
        />
        <Button
          onClick={() => handleKeyProjectNotes({ key: "Enter" }, "keyProjectNotes")}
          className="h-full bg-blue-600 p-3 mx-4 text-white"
        >
          + Add
        </Button>
      </div>
      <ul>
        {keyProjectNotes?.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() =>
                editFeature(
                  index,
                  "keyProjectNotes",
                  prompt("Edit Key Project Notes Feature", feature)
                )
              }
              style={{ cursor: "pointer" }}
            >
              {feature}{" "}
              <Button variant="outlined" className="ml-2 mx-2 text-green-400">
                Edit
              </Button>
            </span>
            <Button
              onClick={() => removeFeature(index, "keyProjectNotes")}
              variant="outlined"
              className="ml-2 text-red-400"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      {/* Count of products by project */}
      <div className="flex items-center">
        <TextField
          label="Count of products by project*"
          variant="outlined"
          className="flex-grow mr-2"
          value={newCountOfProductsByProject}
          onChange={(e) => handleFeatureInput(e, setNewCountOfProductsByProject)}
          onKeyUp={(e) => handleCountOfProductsByProject(e)}
        />

        <Button
          onClick={() =>
            handleCountOfProductsByProject(
              { key: "Enter" },
              "Count_of_Products_by_project"
            )
          }
          className="h-full bg-blue-600 p-3 mx-4 text-white"
        >
          + Add
        </Button>
      </div>
      <ul>
        {console.log("cc", Count_of_Products_by_project)}
        {Count_of_Products_by_project?.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() =>
                editFeature(
                  index,
                  "Count_of_Products_by_project",
                  prompt("Edit Count Of Products By Project", feature)
                )
              }
              style={{ cursor: "pointer" }}
            >
              {feature}{" "}
              <Button variant="outlined" className="ml-2 mx-2 text-green-400">
                Edit
              </Button>
            </span>
            <Button
              onClick={() => removeFeature(index, "Count_of_Products_by_project")}
              variant="outlined"
              className="ml-2 text-red-400"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      {/* Order Tracker */}
      <div className="flex items-center">
        <TextField
          label="Order Tracker*"
          variant="outlined"
          className="flex-grow mr-2"
          value={newOrderTracker}
          onChange={(e) => handleFeatureInput(e, setNewOrderTracker)}
          onKeyUp={(e) => handleOrderTracker(e)}
        />

        <Button
          onClick={() => handleOrderTracker({ key: "Enter" }, "Order_Tracker")}
          className="h-full bg-blue-600 p-3 mx-4 text-white"
        >
          + Add
        </Button>
      </div>
      <ul>
        {Order_Tracker?.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() =>
                editFeature(index, "Order_Tracker", prompt("Edit Order Tracker", feature))
              }
              style={{ cursor: "pointer" }}
            >
              {feature}{" "}
              <Button variant="outlined" className="ml-2 mx-2 text-green-400">
                Edit
              </Button>
            </span>
            <Button
              onClick={() => removeFeature(index, "Order_Tracker")}
              variant="outlined"
              className="ml-2 text-red-400"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      {/* Related to order */}
      <div className="flex items-center">
        <TextField
          label="Related to Order *"
          variant="outlined"
          className="flex-grow mr-2"
          value={newRelatedToOrder}
          onChange={(e) => handleFeatureInput(e, setNewRelatedToOrder)}
          onKeyUp={(e) => handleRelatedToOrder(e)}
        />

        <Button
          onClick={() => handleRelatedToOrder({ key: "Enter" }, "related_to_order")}
          className="h-full bg-blue-600 p-3 mx-4 text-white"
        >
          + Add
        </Button>
      </div>
      <ul>
        {related_to_order?.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() =>
                editFeature(
                  index,
                  "related_to_order",
                  prompt("Edit Related to Order", feature)
                )
              }
              style={{ cursor: "pointer" }}
            >
              {feature}{" "}
              <Button variant="outlined" className="ml-2 mx-2 text-green-400">
                Edit
              </Button>
            </span>
            <Button
              onClick={() => removeFeature(index, "related_to_order")}
              variant="outlined"
              className="ml-2 text-red-400"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </Stack>
  );
};

export default AddDetails;

"use client";
import React, { useEffect, useState } from "react";
import CustomModal from "./ProjectModal";
import { Table } from "antd";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  getProjects,
  resetProjectState,
} from "@/redux/actions/projectsActions";
import moment from "moment/moment";
import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Loader from "../Loader";
import { useValue } from "@/context/ContextProvider";
import { clearProject } from "@/context/function";

const ProjectsComponent = () => {
  const dispatch = useDispatch();
  const { projects, isDeleted, error, loading } = useSelector((s) => s.project);
  const {
    dispatch:dispatchContext,
    state: { currentUser, updatedRoom, addedImages, images: newImages },
  } = useValue();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const Router = useRouter();

  const [filter, setFilter] = useState(""); // State for filtering
  const [search, setSearch] = useState(""); // State for searching

  const onClose = () => {
    setVisible(false);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProject(id));
    }
  };

  useEffect(() => {
    if (isDeleted) {
      toast.success("Project deleted successfully!");
      dispatch(resetProjectState());
      dispatch(getProjects());
    }
    if (error) {
      toast.error(error);
      dispatch(resetProjectState());
    }
  }, [dispatch, isDeleted, error]);
  const [sortByPrice, setSortByPrice] = useState(""); // State for sorting by price
  const filteredProjects = projects.filter(
    (project) =>
      project.currentPhase.toLowerCase().includes(filter.toLowerCase()) ||
      project.title.toLowerCase().includes(filter.toLowerCase())
  );

  const searchedProjects = filteredProjects
    .filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.address.toLowerCase().includes(search.toLowerCase())
    )
    .filter((project) => filter === "" || parseInt(project.price) <= parseInt(filter))
    .sort((a, b) => {
      if (sortByPrice === "asc") {
        return a.price - b.price;
      } else if (sortByPrice === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  
  //edit func

  const handleEditProject = (record) => {
    if (updatedRoom) {
      clearProject(dispatchContext, currentUser, addedImages, updatedRoom);
    } else {
      clearProject(dispatchContext, currentUser, newImages);
    }
    const {
      _id,
      lng,
      lat,
      price,
      title,
      description,
      images,
      keyFeatures,
      keyProjectNotes,
      underHomeFeatures,
      bed,
      bath,
      so_ft: soft,
      acress,
      targetCompletationDate: targetCompletation,
      cost,
      budget,
      propertyListingPrice,
      constructionEstimate,
      
      status,
      project_size,
      zip,
      city,
      state,

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
      targetStartDate,
      homeType,
      builder,
     customer_selection,
currentPhase,
      generalContractor,
      constractionManager,
      projectManager,
      client,
      documents,
    } = record; //uid
    dispatchContext({ type: "UPDATE_LOCATION", payload: { lng, lat } });
    dispatchContext({
      type: "UPDATE_DETAILS",
      payload: {
        price,
        title,
        description,
        keyFeatures,
        keyProjectNotes,
        underHomeFeatures,
        bed,
        bath,
        soft,
        project_size,
        zip,
        city,
        state,
targetStartDate,
        site_contract,
        site_phone,
        customer_contract,
        customer_selection,
        customer_phone,
        order_trigger,
        order_trigger_stage,
        drawings,
        takeOfCompleted,
        bucket,
        Count_of_Products_by_project,
        currentPhase,
        Order_Tracker,
        related_to_order,
        b_vs_a,
        spent_to_date,
        actualCoDate,
        spend,
        
        acress,
        targetCompletation,
        cost,
        budget,
        propertyListingPrice,
        constructionEstimate,
        homeType,
        builder,
        status,
        generalContractor,
        constractionManager,
        projectManager,
        client,
        documents,
      },
    });
    dispatchContext({ type: "UPDATE_IMAGES", payload: images });
    dispatchContext({ type: "UPDATE_UPDATED_ROOM", payload: { _id } });
    dispatchContext({ type: "UPDATE_SECTION", payload: 2 });
     Router.push("/admin/home");
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (x) => {
        return <p>...{x.slice(18, 30)}</p>;
      },
    },
    {
      title: "Project Title",
      dataIndex: "title",
      key: "title",
      render: (x) => {
        return <p>{x.slice(0, 40)}</p>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Start Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (x) => {
        return <p>{moment(x).format("MMM Do YY")}</p>;
      },
    },
    {
      title: "Target Completation",
      dataIndex: "targetCompletationDate",
      key: "targetCompletationDate",
      render: (x) => {
        return <p>{moment(x).format("MMM Do YY")}</p>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Phase Status",
      dataIndex: "currentPhase",
      key: "currentPhase",
    },

    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div className=" w-full flex">
          <EditOutlined
            onClick={() => handleEditProject(record)}
            className="cursor-pointer text-green-500"
          />
          <DeleteOutlined
            onClick={() => deleteHandler(record._id)}
            className="cursor-pointer mx-2 text-red-500"
          />
          <span
            onClick={() => Router.push(`/house/single/${record._id}`)}
            style={{ cursor: "pointer", color: "#1890ff" }}
          >
            <EyeOutlined className="cursor-pointer mx-2 text-green-500" />
          </span>
        </div>
      ),
    },
  ];
 if (loading) {
   return <Loader />;
 }
  return (
    <div className="flex w-[100%] p-4 min-h-screen">
      {/* Left Side: Projects Table */}
      <div className="w-full p-3 md:p-6 overflow-x-auto" style={{ overflowX: "scroll" }}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-5xl font-thin mb-4 my-4">
            Projects({searchedProjects?.length})
          </h2>
          <h2
            onClick={() => Router.push("/admin/home")}
            className="text-2xl md:text-3xl font-thin mb-4 my-4 cursor-pointer"
          >
            +New
          </h2>
        </div>

        <div className="flex justify-end items-center mb-4">
          {/* <TextField
            label="Filter by phase status or title"
            variant="outlined"
            size="small"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ marginRight: 16 }}
          /> */}
          <div className="flex justify-between items-center gap-1 w-full">
            <TextField
              label="Search by project title or address"
              variant="outlined"
              color="secondary"
              focused
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <FormControl
            variant="outlined"
            size="small"
            style={{ margin: "10px", width: "150px" }}
          >
            <InputLabel>Sort by Price</InputLabel>
            <Select
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
              label="Sort by Price"
            >
              <MenuItem value="asc">Asc</MenuItem>
              <MenuItem value="desc">Desc</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="bg-white">
          <Table
            dataSource={searchedProjects}
            columns={columns}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;

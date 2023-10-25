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
import { Button, FormControl, Input, TextField } from "@mui/material";

const ProjectsComponent = () => {
  const dispatch = useDispatch();
  const { projects, isDeleted, error, loading } = useSelector((s) => s.project);

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
      title: "Budget",
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
            onClick={() => Router.push(`/projects/edit/${record._id}`)}
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

  return (
    <div className="flex w-[100%] p-4">
      {/* Left Side: Projects Table */}
      <div className="w-full p-3 md:p-6 overflow-x-auto" style={{ overflowX: "scroll" }}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 my-4">
            Projects({searchedProjects?.length})
          </h2>
          <h2
            onClick={() => Router.push("/admin/home")}
            className="text-2xl md:text-5xl font-bold mb-4 my-4 cursor-pointer"
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
          <div className="flex justify-between items-center gap-1">
            <TextField
              label="Search by project title or address"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              <Button variant="contained" onClick={() => setSortByPrice("asc")}>
                Asc
              </Button>
              <Button
                variant="outlined"
                className="mx-2"
                style={{ margin: "0px 4px" }}
                onClick={() => setSortByPrice("desc")}
              >
                Desc
              </Button>
            </div>
          </div>
        </div>

        <Table
          dataSource={searchedProjects}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default ProjectsComponent;

"use client"
import React, { useState } from "react";
import CustomModal from "./ProjectModal";
import { Table } from "antd";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const { Column } = Table;
const projects = [
  {
    id: 1,
    image: "/house/12.jpg",
    title: "Projects 1",
    statusImage: "/house/2.jpg",
    budget: 45646,
    phaseStatus: "Foundation",
    date: "20/10/2023",
  },
  {
    id: 2,
    image: "/house/11.jpg",
    title: "Projects 4",
    statusImage: "/house/12.jpg",
    budget: 28464,
    phaseStatus: "Punchlist",
    date: "12/10/2022",
  },
  {
    id: 3,
    image: "/house/9.jpg",
    title: "Projects 6",
    statusImage: "/house/7.jpg",
    budget: 354646,
    phaseStatus: "Clearing",
    date: "23/12/2022",
  },
  {
    id: 4,
    image: "/house/6.jpg",
    title: "Projects 2",
    statusImage: "/house/7.jpg",
    budget: 43525,
    phaseStatus: "Farming/Roofing",
    date: "11/05/2021",
  },
];

const ProjectsComponent = () => {
  const Router=useRouter()
   const [activeStatus, setActiveStatus] = useState(projects[0]);
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false)
  }
  const deleteHandler=() => {
    if (window.confirm("Are you sure?")) {
     toast.success("Project deleted successfully!");
   }
 }

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Project Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Start Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Phase Status",
      dataIndex: "phaseStatus",
      key: "phaseStatus",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <EditOutlined
            onClick={() => Router.push(`/projects/edit/${record.id}`)}
            className="cursor-pointer text-green-500"
          />
          <DeleteOutlined
            onClick={() => deleteHandler(record.id)}
            className="cursor-pointer mx-2 text-red-500"
          />
          <span
            onClick={() => {
              setVisible(true);
              setActiveStatus(record);
            }}
            style={{ cursor: "pointer", color: "#1890ff" }}
          >
            View Details
          </span>
        </>
      ),
    },
  ];
  return (
    <div className="flex w-[100%] p-4">
      {/* Left Side: Projects Table */}
      <div className="w-full p-3 md:p-6 overflow-x-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 my-4">Projects(4)</h2>
          <h2 onClick={()=>Router.push("/projects/new")} className="text-2xl md:text-5xl font-bold mb-4 my-4 cursor-pointer">+New</h2>
        </div>

        <Table dataSource={projects} columns={columns} />
      </div>

      <CustomModal visible={visible} onClose={onClose} activeStatus={activeStatus} />
    </div>
  );
};

export default ProjectsComponent;

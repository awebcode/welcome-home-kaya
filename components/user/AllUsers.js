"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Table } from "antd";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment/moment";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { deleteUser, getUsers, resetUserState } from "@/redux/actions/userActions";
import { BeatLoader } from "react-spinners";
import Loader from "../Loader";
import { Search } from "@mui/icons-material";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users, isDeleted, error, getUsersLoading, loadUserLoading } = useSelector(
    (s) => s.user
  );
  // Add a state to handle sorting
  // Add a state to handle sorting
  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const Router = useRouter();

  const [filter, setFilter] = useState(""); // State for filtering
  const [search, setSearch] = useState(""); // State for searching

   const [sortByRole, setSortByRole] = useState(null);

   // Function to sort users by role
   const sortUsersByRole = (users, sortByRole) => {
     if (!sortByRole) return users;

     const roleOrder = ["admin", "user", "banned", "disabled"];
     return [...users].sort((a, b) => {
       return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
     });
   };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    if (isDeleted) {
      toast.success("User deleted successfully!");
      dispatch(resetUserState());
      dispatch(getUsers());
    }
    if (error) {
      toast.error(error);
      dispatch(resetUserState());
    }
  }, [dispatch, isDeleted, error]);

  const searchedUsers = users
    ?.filter(
      (user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((user) => !sortByRole || user.role === sortByRole); // Filter by role if sortByRole is set

  const sortedUsers = sortUsersByRole(searchedUsers, sortByRole);

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
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (x) => {
        return <Avatar src={x} />;
      },
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (x) => {
        return <p>{x.slice(0, 40)}</p>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (x) => {
        return x === "admin" ? (
          <p className="text-green-500">{x}</p>
        ) : x === "user" ? (
          <p className="text-violet-500">{x}</p>
        ) : x === "banned" ? (
          <p className="text-rose-600">{x}</p>
        ) : (
          <p className="text-yellow-500">{x}</p>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div className=" w-full flex">
          <EditOutlined
            onClick={() => Router.push(`/admin/customers/edit/${record._id}`)}
            className="cursor-pointer text-green-500"
          />
          <DeleteOutlined
            onClick={() => deleteHandler(record._id)}
            className="cursor-pointer mx-2 text-red-500"
          />
          <span
            onClick={() => Router.push(`/admin/customers/single/${record._id}`)}
            style={{ cursor: "pointer", color: "#1890ff" }}
          >
            <EyeOutlined className="cursor-pointer mx-2 text-green-500" />
          </span>
        </div>
      ),
    },
  ];
  
  if (getUsersLoading) {
    return <Loader />;
  }
  return (
    <div className="flex w-[100%] p-4">
      {/* Left Side: Projects Table */}
      <div className="w-full p-3 md:p-6 overflow-x-auto" style={{ overflowX: "scroll" }}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-5xl font-thin mb-4 my-4">
            Users({sortedUsers?.length})
          </h2>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-between items-center gap-1">
            <TextField
              label="Search by name or email"
              color="secondary"
              focused
              variant="outlined"
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
            <InputLabel htmlFor="sort-role">Sort by Role</InputLabel>
            <Select
              labelId="sort-role"
              id="sort-role"
              value={sortByRole}
              label="Sort by Role"
              onChange={(e) => setSortByRole(e.target.value)}
            >
              <MenuItem value={null}>None</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="banned">Banned</MenuItem>
              <MenuItem value="disabled">Disabled</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Table dataSource={sortedUsers} columns={columns} pagination={{ pageSize: 10 }} />
      </div>
    </div>
  );
};

export default AllUsers;

import React, { useState, useRef, useEffect } from "react";
import { Table, Input, Button, Avatar, Tag, Select } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders } from "@/redux/actions/ordersActions";
import moment from "moment";
import Loader from "@/components/Loader";
const { Option } = Select;

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, isDeleted, error, loading } = useSelector((s) => s.order);
  const { user } = useSelector((s) => s.user);
  const Router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const searchInput = useRef(null);
const [filteredData, setFilteredData] = useState(null);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteOrder(id));
    }
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="p-4">
        <Input
          ref={(node) => {
            searchInput.current = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          className="mb-2 w-full border-green-500"
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          className="custom-btn"
        >
          Search
        </Button>
        <Button
          className="bg-red-500"
          onClick={() => handleReset(clearFilters)}
          size="small"
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <span>{text}</span> : text),
  });

  

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
    setFilteredData(null);
  };

  const columns = [
    {
      title: "Serial",
      dataIndex: "key",
    },
    {
      title: "Id",
      dataIndex: "_id",
      render: (v) => <p>...{v?.slice(18, 30)}</p>,
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      ...getColumnSearchProps("projectName"),
      render: (v) => <p>{v?.slice(0, 30) + "..."}</p>,
    },
    {
      title: "Project Image",
      dataIndex: "image",
      render: (v) => {
        return <Avatar src={v} />;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      ...getColumnSearchProps("address"),
    },
    {
      title: "Zip Code",
      dataIndex: ["shippingInfo", "zipCode"],
      ...getColumnSearchProps("zipCode"),
    },
    {
      title: "Phone No",
      dataIndex: ["shippingInfo", "phoneNo"],
      ...getColumnSearchProps("phoneNo"),
    },
    {
      title: "Name",
      dataIndex: "username",
      ...getColumnSearchProps("username"),
    },

    {
      title: "Email",
      dataIndex: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (v) => {
        return <Avatar src={v} />;
      },
    },

    {
      title: "Status",
      dataIndex: "orderStatus",
      filters: [
        { text: "In Progress", value: "In Progress" },
        { text: "Delivered", value: "Delivered" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      filteredValue: statusFilter ? [statusFilter] : null,
      onFilter: (value, record) => record.orderStatus === value,
      render: (status) => (
        <Tag
          color={
            status === "In Progress"
              ? "orange"
              : status === "Delivered"
              ? "green"
              : status === "Cancelled"
              ? "red"
              : ""
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
    },

    {
      title: "Date",
      dataIndex: "date",
      render: (v) => {
        return <p>{moment(v).format("l")}</p>;
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      responsive: ["md", "lg", "xl"],
      render: (_, record) => (
        <div className="flex justify-between items-end">
          {user?.role === "admin" && (
            <>
              <EditOutlined
                className="text-green-500 cursor-pointer"
                onClick={() => Router.push(`/dashboard/orders/status/${record._id}`)}
              />
              <DeleteOutlined
                className="text-red-500 cursor-pointer"
                onClick={() => deleteHandler(record._id)}
              />
            </>
          )}
          <EyeOutlined
            className="text-blue-500 cursor-pointer"
            onClick={() => Router.push(`/orders/view/${record._id}`)}
          />
        </div>
      ),
    },
  ];

  const data = orders?.map((order, index) => ({
    key: index,
    _id: order._id,
    date: order.createdAt,
    email: order?.user?.email,
    avatar: order?.user?.avatar,
    username: order?.user?.username,
    orderStatus: order.orderStatus,
    totalPrice: order.totalPrice,
    projectName: order.projectName,
    image: order?.orderItems[0]?.images[0],
    address: order.address,
    shippingInfo: {
      zipCode: order.shippingInfo.zipCode,
      phoneNo: order.shippingInfo.phoneNo,
    },
  }));
  const handleSearch = () => {
    console.log("searchText:", searchText);

    const filteredData = orders
      ?.filter(
        (record) =>
          record?.projectName?.toLowerCase().includes(searchText.toLowerCase()) ||
          record?.user?.username?.toLowerCase().includes(searchText.toLowerCase()) ||
          record?.user?.email?.toLowerCase().includes(searchText.toLowerCase()) ||
          record?.address?.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((record, index) => ({
        key: index,
        _id: record._id,
        date: record.createdAt,
        email: record?.user?.email,
        avatar: record?.user?.avatar,
        username: record?.user?.username,
        orderStatus: record.orderStatus,
        totalPrice: record.totalPrice,
        projectName: record.projectName,
        image: record?.orderItems[0]?.images[0],
        address: record.address,
        shippingInfo: {
          zipCode: record.shippingInfo.zipCode,
          phoneNo: record.shippingInfo.phoneNo,
        },
      }));

    console.log("filteredData:", filteredData);

    setFilteredData(filteredData);
  };


const dataToDisplay = filteredData || data;
  // loader
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="p-4 min-h-screen">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search orders"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value); // Call handleSearch when the input value changes
          }}
          onPressEnter={() => handleSearch(searchText)}
          style={{ marginBottom: 16, width: 200 }}
        />
        <Select
          placeholder="Filter by Status"
          style={{ width: 200 }}
          onChange={handleStatusFilterChange}
          value={statusFilter}
        >
          <Option value="">All</Option>

          <Option value="In Progress">In Progress</Option>
          <Option value="Cancelled">Cancelled</Option>
          <Option value="Delivered">Delivered</Option>
        </Select>
      </div>
      <div className="bg-white overflow-x-auto custom-scroll">
        <Table
          columns={columns}
          dataSource={dataToDisplay}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default Orders;

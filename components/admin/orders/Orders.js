import React, { useState, useRef } from "react";
import { Table, Input, Button, Avatar, Tag, Space, Select } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const { Option } = Select;
const Orders = () => {
  const Router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [projectFilter, setProjectFilter] = useState(null);
  const searchInput = useRef(null);
  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
      toast.success("Order has been deleted");
    }
  };
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      date: `2023-10-${i + 10}`,
      orderNumber: `ORD${i + 1000}`,
      status: Math.random() < 0.5 ? "Pending" : "Delivered",
      total: `$${100 + i}`,
      actions: (
        <div className="flex justify-between items-end">
          <EditOutlined
            className="text-green-500 cursor-pointer"
            onClick={() => Router.push(`/dashboard/orders/status/${2}`)}
          />
          <DeleteOutlined
            className="text-red-500 cursor-pointer"
            onClick={() => deleteHandler()}
          />
          <EyeOutlined
            className="text-blue-500 cursor-pointer"
            onClick={() => Router.push(`/orders/view/1`)}
          />
          {/* <Button type="link" className="custom-btn w-full h-full">
            View Details
          </Button> */}
        </div>
      ),

      email: `customer${i}@example.com`,

      avatar: <Avatar size={32} src={`https://i.pravatar.cc/150?img=${i}`} />,
    });
  }

  // ... filters

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const handleProjectFilterChange = (value) => {
    setProjectFilter(value);
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

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Email",
      dataIndex: "email",
      ...getColumnSearchProps("email"),
    },

    {
      title: "Order Number",
      dataIndex: "orderNumber",
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
      
        { text: "Pending", value: "Pending" },
        { text: "Delivered", value: "Delivered" },
      ],
      filteredValue: statusFilter ? [statusFilter] : null,
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <Tag color={status === "Pending" ? "orange" : "green"}>{status}</Tag>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      responsive: ["md", "lg", "xl"],
    },
  ];

  return (
    <div className="p-4 min-h-screen">
      <div className="flex justify-between items-center">
        <Input
          ref={searchInput}
          placeholder="Search orders"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginBottom: 16, width: 200 }}
        />
        <Select
          placeholder="Filter by Status"
          style={{ width: 200 }}
          onChange={handleStatusFilterChange}
        >
          <Option value="">All</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Delivered">Delivered</Option>
        </Select>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Orders;

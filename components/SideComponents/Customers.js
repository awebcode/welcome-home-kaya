import React, { useState,useRef } from "react";
import { Table, Input, Button, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const CustomersTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null); // Add this line
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      name: `Customer ${i}`,
      email: `customer${i}@example.com`,
      age: 30 + i,
      avatar: <Avatar size={32} src={`https://i.pravatar.cc/150?img=${i}`} />,
    });
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="p-4">
        <Input
          ref={(node) => {
            searchInput.current = node; // Add this line
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
        setTimeout(() => searchInput?.current?.select(), 100);
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
      title: "Avatar",
      dataIndex: "avatar",
      responsive: ["md", "lg", "xl"],
    },
    {
      title: "Name",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
      responsive: ["md", "lg", "xl"],
    },
  ];

  return (
    <div className="p-4">
      <Input
        ref={searchInput}
        placeholder="Search customers"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16, width: 200 }} // Add this line for styling
      />
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default CustomersTable;

import React, { useEffect, useState } from "react";
import { Avatar, Table } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  resetProductState,
} from "@/redux/actions/productActions";
import { toast } from "react-toastify";
import moment from "moment/moment";
import Loader from "@/components/Loader";
import Custom404 from "@/components/CustomNotfound";
import { useRouter } from "next/router";

const AllProducts = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { products, isDeleted, error, loading } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(getProducts());
    localStorage.removeItem("executed");
  }, [dispatch]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };

  useEffect(() => {
    if (isDeleted) {
      toast.success("Product deleted successfully!");
      dispatch(resetProductState());
      dispatch(getProducts());
    }
    if (error) {
      toast.error(error);
      dispatch(resetProductState());
    }
  }, [dispatch, isDeleted, error]);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (x) => {
        return <p>...{x.slice(19, 30)}</p>;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (v) => {
        return <p>{v.slice(0, 50)}...</p>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (v) => {
        return <p>{v.slice(0, 80)}...</p>;
      },
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (v) => {
        return <Avatar src={v[0]} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "InStock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Subcategory",
      dataIndex: "subcategory",
      key: "subcategory",
    },
    {
      title: "Sub Subcategory",
      dataIndex: "subSubcategory",
      key: "subSubcategory",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div className="flex w-full">
          <EditOutlined
            onClick={() => {
              router.push(`/dashboard/products/edit/${record._id}`);
              // localStorage.setItem("executed", "true");
            }}
            className="cursor-pointer text-green-500"
          />
          <DeleteOutlined
            onClick={() => deleteHandler(record._id)}
            className="cursor-pointer mx-2 text-red-500"
          />
          <span
            onClick={() => router.push(`/products/view/${record._id}`)}
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
    <>
      {products.length > 0 ? (
        <>
          <div className="flex w-[100%] p-4 min-h-screen">
            <div
              className="w-full p-3 md:p-6 overflow-x-auto"
              style={{ overflowX: "scroll" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-5xl font-thin mb-4 my-4">
                  Products({products.length})
                </h2>
                <h2
                  onClick={() => router.push("/dashboard/products/new")}
                  className="text-2xl md:text-3xl font-thin mb-4 my-4 cursor-pointer"
                >
                  +New
                </h2>
              </div>
              <div className="bg-white w-full">
                <Table
                
                  dataSource={products}
                  columns={columns}
                  pagination={{ pageSize: 10 }}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Custom404/>
        </>
      )}
    </>
  );
};

export default AllProducts;

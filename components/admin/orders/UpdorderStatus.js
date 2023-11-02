import React, { useState, useEffect } from "react";
import { Select, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  clearOrderClearError,
  getSingleOrder,
  resetOrderState,
  updateOrderStatus,
} from "@/redux/actions/ordersActions";
import { toast } from "react-toastify";

const { Option } = Select;

const UpdateOrderStatus = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [newStatus, setNewStatus] = useState("");
  const { isUpdated, error, updateLoading } = useSelector((state) => state.order);
  const { order } = useSelector((s) => s.order);

  useEffect(() => {
    if (id) {
      dispatch(getSingleOrder(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (order) {
      setNewStatus(order.orderStatus);
    }
  }, [order]);

  useEffect(() => {
    if (isUpdated) {
      toast.success("Order status updated successfully!");
      dispatch(resetOrderState());
      router.back();
    }
  }, [isUpdated, router, dispatch]);

  useEffect(() => {
    if (error) {
       toast.error(error);
      dispatch(clearOrderClearError());
    }
  }, [error, dispatch]);

  const handleStatusChange = (value) => {
    setNewStatus(value);
  };

  const handleUpdateStatus = () => {
    if (newStatus && id) {
      dispatch(updateOrderStatus(id, newStatus));
    } else {
      message.error("Please select a status");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 bg-white border rounded shadow-lg mb-4 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Order Status</h2>

        {order && (
          <Select
            value={newStatus}
            onChange={handleStatusChange}
            className="w-full  my-2    rounded-lg "
            size="large"
          >
            <Option value="In Progress">In Progress</Option>
            <Option value="Cancelled">Cancelled</Option>
            <Option value="Delivered">Delivered</Option>
          </Select>
        )}

        <Button type="primary" className="custom-btn w-full" onClick={handleUpdateStatus}>
          {updateLoading ? "Updating Status..." : "Update Status"}
        </Button>
      </div>
    </div>
  );
};

export default UpdateOrderStatus;

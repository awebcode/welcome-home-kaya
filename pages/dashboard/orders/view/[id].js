import DashboardLayout from "@/components/admin/dashboard/DashLayout";
import PreviewOrders from "@/components/admin/orders/PreviewOrder";
import React from "react";

const SingleOrder = () => {
  return (
    <DashboardLayout>
      <PreviewOrders />
    </DashboardLayout>
  );
};

export default SingleOrder;

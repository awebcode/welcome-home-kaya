const Orders = dynamic(() => import("@/components/admin/orders/Orders"), {
  ssr: false,
});
import DashboardLayout from "@/components/admin/dashboard/DashLayout";
import dynamic from "next/dynamic";
import React from "react";

const App = () => {
  return (
    <DashboardLayout>
      <Orders />
    </DashboardLayout>
  );
};

export default App;

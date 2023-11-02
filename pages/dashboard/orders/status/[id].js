
import dynamic from "next/dynamic";

const UpdateOrderStatus = dynamic(
  () => import("@/components/admin/orders/UpdorderStatus"),
  {
    ssr: false,
  }
);
import React from "react";

const ChaneStatus = () => {
  return (
    <div>
      <UpdateOrderStatus />
    </div>
  );
};

export default ChaneStatus;

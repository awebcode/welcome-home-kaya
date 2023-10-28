import dynamic from "next/dynamic";

const ChangeOrderStatus = dynamic(
  () => import("@/components/admin/orders/ChangeOStatus"),
  {
    ssr: false,
  }
);
import React from "react";

const ChaneStatus = () => {
  return (
    <div>
      <ChangeOrderStatus />
    </div>
  );
};

export default ChaneStatus;

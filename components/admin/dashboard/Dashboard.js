import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashLayout'
import {
  Card,
  Metric,
  Text,
  CategoryBar,
  Legend,
  Title,
  Divider,
  BadgeDelta,
} from "@tremor/react";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const Dashboard = () => {
  const navigate = useRouter();
  const { users } = useSelector(s => s.user)
  const { projects } = useSelector((s) => s.project);
  const { orders } = useSelector((s) => s.order);

  // ismobile

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold (768 in this case) based on your needs
    };

    handleResize(); // Call it once to set the initial state

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <DashboardLayout>
      <div className="container my-5">
        <h3 className="bg-clip-text font-extrabold p-4  text-[44px] md:text-6xl m-3 text-transparent bg-gradient-to-r from-emerald-500 to-yellow-500 uppercase">
          Welcome Homes
        </h3>
        {/* Users */}
        <div
          className="cursor-pointer"
          onClick={() => navigate.push("/dashboard/customers")}
        >
          <Card className="mx-auto bg-white">
            <BadgeDelta
              className="float-right mx-1 my-1"
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size={isMobile ? "xs" : "xl"}
            >
              Customers {users?.length}
            </BadgeDelta>

            <Card className="max-w-xs block bg-white border-green-300">
              <Text>Total Customers</Text>
              <Metric>{users && users.length}</Metric>
            </Card>
            <Divider style={{ fontSize: isMobile ? "20px" : "30px" }}>Customers</Divider>
            {/* Display the number of verified  Customers */}
            {/*  */}

            <Legend
              className="mt-3"
              categories={[
                `Admins: ${users?.filter((s) => s.role === "admin")?.length}`,
                `Sub Admins: ${
                  users?.filter((s) => s.role === "sub_admin")?.length || 0
                }`,
                `Customers: ${users?.length}`,
                `Disabled users: ${users?.filter((s) => s.role === "disabled")?.length}`,
                `Banned Users: ${users?.filter((s) => s.role === "banned")?.length}`,
              ]}
              colors={["emerald", "red", "purple", "amber"]}
            />
          </Card>
        </div>
        {/* projects */}
        <div
          className="cursor-pointer my-4"
          onClick={() => navigate.push("/dashboard/projects")}
        >
          <Card className="mx-auto bg-white">
            <BadgeDelta
              className="float-right mx-1 my-1"
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size={isMobile ? "xs" : "xl"}
            >
              Projects {projects?.length}
            </BadgeDelta>

            <Card className="max-w-xs block bg-white border-green-300">
              <Text>Total Projects</Text>
              <Metric>{projects && projects.length}</Metric>
            </Card>
            <Divider style={{ fontSize: isMobile ? "20px" : "30px" }}>Projects</Divider>
            {/* Display the number of verified  Projects */}
            {/*  */}

            <Legend
              className="mt-3"
              categories={[
                `Foundation: ${
                  projects?.filter((s) => s.phase === "foundation")?.length
                }`,
                `Framing/Roofing: ${
                  projects?.filter((s) => s.phase === "framing_roofing")?.length
                }`,
                `MEP Roughing and Systems: ${
                  projects?.filter((s) => s.phase === "mep_roughing")?.length
                }`,
                `Sheetrock: ${projects?.filter((s) => s.phase === "sheetrock")?.length}`,
                `Fishes: ${projects?.filter((s) => s.phase === "fishes")?.length}`,
                `Punchlist: ${projects?.filter((s) => s.phase === "punchlist")?.length}`,
                `Completed: ${projects?.filter((s) => s.phase === "completed")?.length}`,
              ]}
              colors={["emerald", "red", "purple", "amber", "teal", "green"]}
            />
          </Card>
        </div>
        {/* Orders */}
        <div
          className="cursor-pointer"
          onClick={() => navigate.push("/dashboard/orders")}
        >
          <Card className="mx-auto bg-white">
            <BadgeDelta
              className="float-right mx-1 my-1"
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size={isMobile ? "xs" : "xl"}
            >
              Orders {orders?.length}
            </BadgeDelta>

            <Card className="max-w-xs block bg-white border-green-300">
              <Text>Total Orders</Text>
              <Metric>{orders && orders.length}</Metric>
            </Card>
            <Divider style={{ fontSize: isMobile ? "20px" : "30px" }}>Orders</Divider>
            {/* Display the number of verified  Orders */}
            {/*  */}

            <Legend
              className="mt-3"
              categories={[
                `Pending: ${orders?.filter((s) => s.status === "pending")?.length}`,
                `Rejected: ${
                  orders?.filter((s) => s.status === "rejected")?.length || 0
                }`,
                `Under Review: ${
                  orders?.filter((s) => s.status === "under_review")?.length || 0
                }`,
              ]}
              colors={["emerald", "red", "purple", "amber"]}
            />
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard
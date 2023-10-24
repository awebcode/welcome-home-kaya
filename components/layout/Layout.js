import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "@/redux/actions/userActions";

const SidebarModal = dynamic(() => import("./SideModal"), {
  ssr: false,
});
const Topbar = dynamic(() => import("./Topbar"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const dispatch=useDispatch()
  const { user } = useSelector((u) => u.user);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const logoutHandler=() => {
    dispatch(logout())
    toast.success("Logged out.")
  }
  return (
    <>
      <Topbar
        user={user}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        logoutHandler={logoutHandler}
      />
      <div className="flex flex-row mx-[2px] p-[2px] md:m-2 md:p-2">
        <div className={`md:mr-20 `}>
          <div className="hidden md:flex">
            <Sidebar
              user={user}
              isSidebarOpen={isSidebarOpen}
              logoutHandler={logoutHandler}
            />
          </div>

          <SidebarModal
            user={user}
            isModalOpen={isSidebarOpen}
            setSidebarOpen={setIsSidebarOpen}
            logoutHandler={logoutHandler}
          />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default Layout;

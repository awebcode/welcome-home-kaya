import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row mx-[2px] p-[2px] md:m-2 md:p-2">
      <div className="mr-20 md:mr-20">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "./Shared/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden "
          >
            Open Sidebar Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            
            <Sidebar />
            
          </ul>
        </div>
      </div>

    
     
    </div>
  );
};

export default AdminLayout;

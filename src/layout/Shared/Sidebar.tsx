import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <li> <NavLink to='/' className="truncate">Back to Home</NavLink> </li>
            <li> <NavLink to='/admin/event-item-management'>Event Item Management</NavLink> </li>
            <li> <NavLink to='/admin/recent-event-management'>Recent Event Management</NavLink> </li>
        </>
    );
};

export default Sidebar;
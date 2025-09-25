import React from "react";
import { FaUser, FaBlog, FaChartBar, FaUsers } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { key: "profile", label: "Profile", icon: <FaUser /> },
    { key: "posts", label: "Posts", icon: <FaBlog /> },
    { key: "stats", label: "Stats", icon: <FaChartBar /> },
    { key: "users", label: "Users", icon: <FaUsers /> },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Blog Dashboard
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(item => (
          <SidebarItem
            key={item.key}
            item={item}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

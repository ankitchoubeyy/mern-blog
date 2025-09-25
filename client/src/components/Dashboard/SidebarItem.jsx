import React from "react";

const SidebarItem = ({ item, activeSection, setActiveSection }) => {
  return (
    <button
      className={`w-full flex items-center p-2 rounded-lg ${
        activeSection === item.key ? "bg-gray-700" : "hover:bg-gray-700"
      }`}
      onClick={() => setActiveSection(item.key)}
    >
      <span className="mr-2">{item.icon}</span> {item.label}
    </button>
  );
};

export default SidebarItem;

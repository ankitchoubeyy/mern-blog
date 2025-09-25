import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Profile from "../components/Dashboard/Content/Profile";
import Posts from "../components/Dashboard/Content/Posts";
import Stats from "../components/Dashboard/Content/Stats";
import Users from "../components/Dashboard/Content/Users";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderContent = () => {
    switch (activeSection) {
      case "profile": return <Profile />;
      case "posts": return <Posts />;
      case "stats": return <Stats />;
      case "users": return <Users />;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-6 overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import './Layout.css';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="main-content">
          {/* This is where the nested route content will be injected */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

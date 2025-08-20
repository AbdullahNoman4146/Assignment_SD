import React, { useState } from "react";
import "./App.css";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [activePage, setActivePage] = useState("profile");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-container">

      <div className={`main-content ${isSidebarOpen ? "with-sidebar" : "collapsed-sidebar"}`}>
        {activePage === "profile" && <Profile />}
        {activePage === "articles" && <Articles />}
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <button
          className="toggle-btn"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {isSidebarOpen && (
          <ul>
            <li onClick={() => setActivePage("profile")}>Profile</li>
            <li onClick={() => setActivePage("articles")}>My Articles</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

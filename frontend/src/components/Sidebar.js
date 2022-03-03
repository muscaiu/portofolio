import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button onClick={toggleSidebar} className="close-btn">
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isSidebarOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isSidebarOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar

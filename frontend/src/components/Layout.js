import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
// Styles are aleady imported in gatsby-browser.js
// import "../css/main.css"

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header ">
          <img src={logo} alt="logo " />
          <buton className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </buton>
        </div>
        <PageLinks styleClass="nav-links"> </PageLinks>
      </div>
    </nav>
  )
}

export default Navbar

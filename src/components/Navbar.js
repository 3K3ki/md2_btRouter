import React from 'react'
import { NavLink } from 'react-router-dom'
const NavLinkStyle = ({isActive})=>{
        return {
          color: isActive ? "white":"Black",
          backgroundColor: isActive ? "Blue" : "Wthite"
        }
      }

export default function Navbar() {
    
  return (
    <ul className="nav justify-content-end my-5">
    <li className="nav-item">
      <NavLink className="nav-link" style={NavLinkStyle} to={"/"} >
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" style={NavLinkStyle} to={"/About"}>
        About
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" style={NavLinkStyle} to={"/User"}>
        User
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" style={NavLinkStyle} to={"/Contract"}>Contact</NavLink>
    </li>
  </ul>
  )
}

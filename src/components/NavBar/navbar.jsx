import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.webp";
import contactIcon from"../../assets/emailIcon.svg"
import {Link} from "react-scroll"
export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuItem">Home</Link>
        <Link className="desktopMenuItem">About</Link>
        <Link className="desktopMenuItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn"><img className="desktopContactIcon" src={contactIcon} alt="contect Icon" />Contact</button>
      
    </nav>
  );
}

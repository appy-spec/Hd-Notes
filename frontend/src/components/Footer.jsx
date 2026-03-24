import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-muted py-4 border-top w-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row justify-content-center mb-1">
          <small style={{margin:"0%"}}>By Rahul Patel</small>
        </div>
        <div>
          <small>
            &copy; {new Date().getFullYear()} <strong>NoteApp</strong>. All rights reserved.
            &nbsp; | &nbsp; Built with 💙 using MERN Stack
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-muted py-4 border-top w-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-auto">
            <Link to="/" className="text-muted mx-2 text-decoration-none">
              Home
            </Link>
            <Link to="/signup" className="text-muted mx-2 text-decoration-none">
              SignUp
            </Link>
            <Link to="/login" className="text-muted mx-2 text-decoration-none">
              Login
            </Link>
            <Link to="/dashboard" className="text-muted mx-2 text-decoration-none">
              Dashboard
            </Link>
          </div>
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

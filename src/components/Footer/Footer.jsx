import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>My ToDoList</h3>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My ToDoList. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
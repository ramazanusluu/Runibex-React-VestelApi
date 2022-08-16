import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <a href="/" className="category">
              Televizyon
            </a>
            <ul>
              <li>
                <a href="/" className="subCategory">
                  Smart
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

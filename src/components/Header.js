import React from "react";
import headerLogo from "../image/header-logo.png";

function Header() {
  return (
    <div className="my-1">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            <img src={headerLogo} alt="logo" title="vestel-logo" style={{width: "140px"}}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

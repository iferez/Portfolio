import React from "react";
import Logo from "../assets/logo_iferez.png";

function Header() {
  return (
    <header className="section-header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://github.com/iferez">
            <img src={Logo} alt="Logo iFerez" className="logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivanferez/" target="_blank" rel="noopener noreferrer"
            className="flex items-center btn btn-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

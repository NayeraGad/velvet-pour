import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="/">
          <img src="/logo.png" alt="" />
          <span>Velvet Pour</span>
        </a>
        
        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={id}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

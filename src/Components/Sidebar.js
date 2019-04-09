import React from "react";

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="brand">
            <a href="#">jaw</a>
          </li>
          <li>
            <a href="#">Art</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram fa-2x" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

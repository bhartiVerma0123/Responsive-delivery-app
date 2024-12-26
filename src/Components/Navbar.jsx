import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.jpg";
import { BiBasket } from "react-icons/bi";
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm d-flex ">
    <div class="container-fluid">
      <div className="navbar-brand m-4">
        <img src={Logo} alt="" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link " to ="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to ="/">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/section2">
             Our Menu
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/section4">
             Contact
            </Link>
          </li>
          <li className="basket">
           <BiBasket/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

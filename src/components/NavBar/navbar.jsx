import React from "react";
import { CardWidget } from "../CartWidget/cartwidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <ul className="nav-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Carrito</a></li>
      </ul>
      <CardWidget/>
    </nav>
  );
};

export default Navbar;
import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
<nav className="navbar fondo navbar-expand-lg bg-light">
    <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/Error">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/Error">Quienes Somos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Catalogo</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><CartWidget /></a>
                </li>
            </ul>
        </div>
    </div>
</nav>


  );
}

export default Navbar
import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
<nav className="navbar fondo navbar-expand-lg bg-light">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Quienes Somos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Catalogo</a>
                </li>
            </ul>
    </div>
  </div>
</nav>


  )
}

export default Navbar
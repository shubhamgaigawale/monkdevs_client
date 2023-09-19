import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    const [active, setActive] = useState(null)

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Monk<span className="text-warning">Devs</span></Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
                        <li className={`nav-item ${active && 'active'}`} onClick={() => setActive(true)}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={`nav-item ${active && 'active'}`} onClick={() => setActive(true)}>
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className={`nav-item ${active && 'active'}`} onClick={() => setActive(true)}>
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className={`nav-item ${active && 'active'}`} onClick={() => setActive(true)}>
                            <Link to="/contactus" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

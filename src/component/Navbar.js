import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function Navbar() {
    return(

        <>
        <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/'>
                            HealthCare
                        </Link>
                        <button type="button" className="navbar-toggle" data-toggle='collapse' data-target='#myNavbar'>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
    
                    </div>
                    <div className="collapse navbar-collapse" id='myNavbar'>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-link">
                            Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className="nav-link">
                            Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">
                            Contact Us
                            </Link>
                        </li>
                        
                    </ul>
                    </div>
    
                </div>
            </nav>
        </>
    )
}
export default Navbar;
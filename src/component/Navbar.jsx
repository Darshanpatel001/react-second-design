import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
const Navbar = () => {
  return (
   
    <header class="navbar navbar-expand-lg">
    <div class="container">
        <Link to={"/home"} href="index.html" class="navbar-brand fs-2"><img src={logo} alt="logo"/></Link>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <i class="navbar-toggler-icon"></i>
        </button>
        <nav class="collapse navbar-collapse justify-content-end py-5 px-3 p-lg-0" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item ms-lg-3 mx-auto mx-lg-0"> <Link to={"/Home"} class="nav-link" href="#">Home</Link>
                </li>
                <li class="nav-item ms-lg-3 mx-auto mx-lg-0 dropdown"><Link to={"/About"} href="javascript:void(0);" class="nav-link"
                        data-bs-toggle="dropdown" data-bs-target="#pages-menu">Pages
                        <i class="fa-solid fa-angle-down"></i></Link>
                    <ul class="dropdown-menu" id="pages-menu">
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">About Us</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Services</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Contact Us</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Log In</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Sign Up</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Forgot Password</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown ms-lg-3 mx-auto mx-lg-0"><Link to={"/Contact"}> <a href="javascript:void(0);" class="nav-link"
                        data-bs-toggle="dropdown" data-bs-target="#utility-menu">Utility Pages
                        <i class="fa-solid fa-angle-down"></i></a></Link>
                    <ul class="dropdown-menu" id="Utility-menu">
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Style Guide</a>
                        </li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">404 Not Found</a>
                        </li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Password
                                Protected</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Licenses</a></li>
                        <li class="dropdown-item"><a href="javascript:void(0);" class="nav-link">Changelog</a></li>
                    </ul>
                </li>

                <li class="nav-item ms-lg-3 mx-auto mx-lg-0"><a href="javascript:void(0);" class="nav-link">Blog</a>
                </li>
                <li class="nav-item ms-lg-3 mx-auto mx-lg-0 ps-4"><a href="javascript:void(0);"
                        class="nav-link">Contact</a></li>
            </ul>
            <button class=" btn ms-lg-0 mx-auto">
                <a href="javascrip:void(0);" class=" w-button  cstm-btn-1">Sign Up</a>
            </button>
        </nav>
    </div>
</header> );


};

export default Navbar;

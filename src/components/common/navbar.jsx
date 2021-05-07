import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <NavLink to="/" exact className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Home</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink to="/posts" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Posts</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                   <NavLink to="/login" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                         aria-controls="pills-home" aria-selected="true">Login</NavLink>
               </li>
            </ul>
        </div>
    );
};

export default Navbar;

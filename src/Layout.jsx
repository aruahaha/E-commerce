import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import myImage from "D:/coding/E-commerce/src/SHOOKY.png"

export default function Layout() {
    const [menuOpen, setMenuOpen] = React.useState(false)
    return (
        <>
            <nav className="navbar" id="topNav">
                <Link className="nav-logo" to="/"><img className="nav-img" src={myImage}></img></Link>
                <NavLink className={menuOpen ? "nav-links open nav-wmn" : "nav-links nav-wmn"} to="/Women" >Women</NavLink>
                <NavLink className={menuOpen ? "nav-links open nav-men" : "nav-links nav-men"} to="/Men" >Men</NavLink>
                <NavLink className={menuOpen ? "nav-links open nav-abt" : "nav-links nav-abt"} to="/About" >About</NavLink>
                <NavLink className={menuOpen ? "nav-links open nav-cart" : "nav-links nav-cart"} to="/Cart" >Cart</NavLink>
                <div className="menu" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
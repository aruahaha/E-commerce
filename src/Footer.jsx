import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <Outlet />
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#">Men's Shoes</a></li>
                            <li><a href="#">Women's Shoes</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping Information</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <ul class="social-links">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import "./style.css"


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Footer />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
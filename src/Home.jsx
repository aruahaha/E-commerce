import React from "react";
import { Link } from "react-router-dom";
import myImage from "D:/coding/E-commerce/src/shoe2.jpg"
import myImage2 from "D:/coding/E-commerce/src/shoe4.jpg"


export default function Home() {
    return (
        <div className="main-home">
            <div className="home">
                <img className="home-img" src={myImage} alt="shoe" />
                <div className="img-text">
                    <h1>Step into style and comfort with SHOOKY. Where every stride tells a story</h1>
                </div>
            </div>
            <div className="second-home">
                <h2>Transform your every step into a fashion statement with SHOOKY's edgy,
                    boundary-pushing designs. Walk the talk of cool.</h2>
                <img className="shoes-img" src={myImage2} />
            </div>
        </div>


    )
}
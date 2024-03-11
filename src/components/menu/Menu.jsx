import React from 'react'
import "./menu.css"
import logo from "../../assets/logo.png"
const Menu = () => {
  return (
    <nav>
        <div class="container">
            <div class="main_nav">
                <div class="logo">
                    <a href="#"><img src={logo} alt="logo"/></a>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Culture</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Menu
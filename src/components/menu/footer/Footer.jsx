import React from 'react'
import "./footer.css"
import logo from "../../../assets/logo.png"
import footer_icon from "../../../assets/footer_icon.png"

const Footer = () => {
  return (
    <footer>
        <div class="container footer_main">
            <div class="footer_top">
                <div class="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div class="text">
                    <span>Ready to explore?</span>
                    <a href="#">get started</a>
                </div>
            </div>
            <div class="footer_menu">
                <div class="icon">
                    <h3>Let's go on vacation, Make your day</h3>
                    <p>terms and conditions</p>
                    <img src={footer_icon} alt="" />
                </div>
                <div class="service">
                    <ul>
                        <li><p>Services</p></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Campaigns</a></li>
                        <li><a href="#">Brandings</a></li>
                        <li><a href="#">Offline</a></li>
                    </ul>
                </div>
                <div class="about">
                    <ul>
                        <li><p>About</p></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Benefits</a></li>
                        <li><a href="#">Term</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>
                <div class="help">
                    <ul>
                        <li><p>Help</p></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright 2023 QWERy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
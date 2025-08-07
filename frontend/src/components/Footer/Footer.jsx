import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita voluptas nostrum nulla, debitis odio corrupti magni iusto non esse vitae nam placeat rerum amet excepturi ratione, sit qui nisi?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Email: info@example.com</li>
                        <li>Phone: +123456789</li>
                        <li>Address: 123 Main St, Anytown, USA</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">© 2024 Food Delivery. All rights reserved.</p>
        </div>
    )
}

export default Footer
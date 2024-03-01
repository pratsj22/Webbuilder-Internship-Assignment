import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="column">
                    <div>CATEGORIES</div>
                    <span>Web Builder</span>
                    <span>Hosting</span>
                    <span>Data Center</span>
                    <span>Robotic-Automation</span>
                </div>
                <div className="column">
                    <div>CONTACT</div>
                    <span>Contact</span>
                    <span>Privacy Policy</span>
                    <span>Terms Of Service</span>
                    <span>Categories</span>
                    <span>About</span>
                </div>
                <div className="country">
                    <div>United States</div>
                    <img src="downArrow.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
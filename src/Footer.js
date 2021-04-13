import React from 'react';
import "./Footer.css";


function Footer() {
    return (
        <>
        
            <div className="main-footer">
                <div className="columns">
                    <h5>Quick Links</h5>
                    <div className="col1 link">
                        <li> FAQ's</li>
                        <li> Help</li>
                        <li>Services</li>
                        <li> Subscribe</li>
                        <li> Log-in</li>
                    </div>
                    <div className="col2 link">
                        <li>sign-up</li>
                        <li>movies</li>
                        <li>Services</li>
                        <li> privacy</li>
                        <li> Jobs </li>
                    </div>
                    <div className="col3 link">
                        <li> account</li>
                        <li> ways to watch</li>
                        <li>netflix originals</li>
                        <li> terms of use</li>
                        <li> contact us</li>
                    </div>
                </div>
            </div>
            <footer class="background">
                <p class="text-footer">
                    copyright &copy; Dishant 2021-All rights reserved.
                </p>
            </footer>
        </>
    );
}


export default Footer;
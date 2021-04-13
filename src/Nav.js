import React, { useEffect, useState } from 'react';
import "./Nav.css";


function Nav() {
    const[show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`Nav ${show && "nav-black"}`}>
            <img className="nav-logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="netflix logo" />

        </div>
    )
}

export default Nav;
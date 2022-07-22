import React, { Component } from 'react';
import "./Navbar.css"

function Navbar({ isOpen }) {

    return (
        <div id="nav" className={isOpen ? "open" : ""}>
            <ul>
                <li className="nav-items"> HOME</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> WERK</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> OVER</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> DIENSTEN</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> PARTNERS</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> STORIES</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> VACATURES</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> EVENTS</li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> CONTACT</li>
                <hr class="Nav-hr"></hr>
            </ul>

        </div>

    );
}


export default Navbar;
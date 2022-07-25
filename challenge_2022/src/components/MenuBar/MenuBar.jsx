import React, { Component } from 'react';
import "./MenuBar.css"

function MenuBar({ isOpen }) {

    return (
        <div id="nav" className={isOpen ? "open" : ""}>
  
           <div class="nav-block">
            <ul>
            <p> COUNTRIES </p>
            <li> GLOBAL</li>
            <li> NETHERLANDS</li>
            <li> UNITED STATES</li>
            <li> IRELAND</li>
            <li> UNITED KINGDOM</li>
            <li> GERMANY</li>
            <li> SWITZERLAND</li>
            </ul>


            <ul class="nav-block1">
                <li className="nav-items"><a href="/home"> HOME </a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"><a href="work">WORK</a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"><a href="culture"> CULTURE</a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"><a href="partners"> PARTNERS </a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> <a href="stories">STORIES </a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> <a href="careers">CAREERS </a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"> <a href="events">EVENTS </a> </li>
                <hr class="Nav-hr"></hr>
                <li className="nav-items"><a href="contact">CONTACT </a> </li>
                <hr class="Nav-hr"></hr>
            </ul>

        </div>
        </div> 

    );
}


export default MenuBar;
import React, { Component } from 'react';
import './NavBar.css'

function NavBar ({ setMenuStatus }){
    return (
      <div>
        <div className="Navbar">


          <ul className="ul-list">
          <img className="NavLogo" src="./DEPTwit.png" width={88.04} height={25} />
            <li><a href="/work" className="list-items">WORK </a> </li>
            <li><a href="/culture" className="list-items"> CULTURE  </a> </li>
            <li><a href="/services" className="list-items"> SERVICES  </a> </li>
            <li><a href="/insights" className="list-items"> INSIGHTS  </a> </li>
            <li><a href="/careers" className="list-items"> CAREERS  </a> </li>
            <li><a href="/contact" className="list-items"> CONTACT  </a> </li>
            <li><a href="/more"> <img src="./vectordots.png" width={30.4} height={8} /></a></li>
          </ul>

      </div>
    
    <div className="Navbar2">
    <img className="NavLogo" src="./DEPT.png" width={88.04} height={25} />
     <div className="menuButton">
        <button
          type="button"
          onClick={() => {
            setMenuStatus(true);
          }}
        >
          MENU
        </button>
        </div>
    </div>

   </div>
    );
  }

export default NavBar;


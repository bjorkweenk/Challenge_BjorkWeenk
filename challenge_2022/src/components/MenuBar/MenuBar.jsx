import React from "react";
import "./MenuBar.css"


function Menubar({ setMenuStatus }) {
  return (

    <div className="Navbar">
      <img className="NavLogo" src="./DEPTwit.png" width={88.04} height={25} />

      <ul className="ul-list">
        <li className="list-items"> WORK </li>
        <li className="list-items"> CULTURE </li>
        <li className="list-items"> SERVICES </li>
        <li className="list-items"> INSIGHTS </li>
        <li className="list-items"> CAREERS </li>
        <li className="list-items"> CONTACT </li>
        <li className="list-items"> <img src="./vectordots.png" width={30.4} height={8}/></li>
      </ul>



      {/* <div className="menuButton">
        <button
          type="button"
          onClick={() => {
            setMenuStatus(true);
          }}
        >
          MENU
        </button>
        </div>*/}

    </div>
  );
}


export default Menubar;
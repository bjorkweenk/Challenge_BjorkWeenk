import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul className="ul-list">
                    <img className='list-item' src="./DEPTwit.png" width={88.04} height={25} />
                    <li className="list-item"> WORK </li>
                    <li className="list-item">SERVICES </li>
                    <li className="list-item">STORES </li>
                    <li className="list-item">ABOUT </li>
                    <li className="list-item">CARREERS </li>
                    <li className="list-item">CONTACT</li>
                </ul>

                <hr/>
                <section className="Term-Section">
                <p className="TextFooter">Chamber of Commerce: 63464101</p>
                <p className="TextFooter">VAT: NL 8552.47.502.B01</p>
                <p className="TextFooter">Terms and conditions</p>
                <p className="TextFooter">© 2022 Dept Agency </p>
                </section>

<div className='FooterMobile'>
                <ul className="ul-list2">
                    <li className="list-item2"> WORK </li>
                    <li className="list-item2">SERVICES </li>
                    <li className="list-item2">STORES </li>
                    <li className="list-item2">ABOUT </li>
                    <li className="list-item2">CARREERS </li>
                    <li className="list-item2">CONTACT</li>
                </ul>

                <hr/>
                <section className="Term-Section1">
                 <ul>
                <p className="TextFooter1">Chamber of Commerce: 63464101</p>
   
                <p className="TextFooter1">VAT: NL 8552.47.502.B01</p>
             
                <p className="TextFooter1">Terms and conditions</p>
              
                <p className="TextFooter1">© 2022 Dept Agency </p>
                </ul>
                </section>
                </div>
            </footer>
        
           
        
        );

    }
}

export default Footer;
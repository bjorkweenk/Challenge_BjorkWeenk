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
            </footer>
        );
    }
}

export default Footer;
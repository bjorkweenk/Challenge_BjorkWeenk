import React, { Component } from 'react';
import "./ClientCard.css"

class ClientCard extends Component {
    render() {
        return (

            <>
            {/* Bol/Kempen/Philips/Gemeentemuseum */}

            <div className="container">
            <div className="grid-1" class="bol">
                <h5> BOL.COM</h5>
                <p> A Summer island in the Netherlands</p>
                <h6> <img src="./round.png"></img> Read more </h6>
            </div>

            <div className="grid-2" class="kempen">
                <h5> KEMPEN</h5>
                <p> Not some average banking website</p>
                <h6> <img src="./round.png"></img> Read more </h6>
            </div>

            <div className="grid-3" class="philips">
                <h5> PHILIPS</h5>
                <p> Beautiful design meets innovative technology</p>
                <h6> <img src="./round.png"></img> Read more </h6>
            </div>

            <div className="grid-4" class="gemeentemuseum">
                <h5> GEMEENTEMUSEUM</h5>
                <p> A 100 years of Mondriaan <span dangerouslySetInnerHTML={{ __html: "&" }}></span> De Stijl</p>
                <h6> <img src="./round.png"></img> Read more </h6>
            </div>
        </div>

        </>
        );
      
    }
}

export default ClientCard;
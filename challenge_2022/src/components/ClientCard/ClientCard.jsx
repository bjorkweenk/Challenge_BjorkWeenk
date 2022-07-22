import React, { Component } from 'react';
import "./ClientCard.css"

class ClientCard extends Component {
    render() {
        return (
            <div>
             <section className='clients'> 
                <div className="bol"> <h5> BOL.COM</h5>
                <h3> A Summer island in the Netherlands</h3>
                <h6> <img src="./round.png"></img> Read more </h6></div>
                <div className='kempen'><h5> BOL.COM</h5>
                <h3> A Summer island in the Netherlands</h3>
                <h6> <img src="./round.png"></img> Read more </h6></div>
                <div className='philips'><h5> BOL.COM</h5>
                <h3> A Summer island in the Netherlands</h3>
                <h6> <img src="./round.png"></img> Read more </h6></div>
                <div className='gemeentemuseum'><h5> BOL.COM</h5>
                <h3> A Summer island in the Netherlands</h3>
                <h6> <img src="./round.png"></img> Read more </h6></div>
            </section>   
            </div>
        );
    }
}

export default ClientCard;
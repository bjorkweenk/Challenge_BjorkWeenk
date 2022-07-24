import React, { Component } from 'react';
import "./ClientCard3.css"

class ClientCard3 extends Component {
    render() {
        return (
            <div>
                
                {/* Chocomel, JBL, Zalando , Koninklijke bibliotheek */}

                <div className="container5">
                    <div className="grid-1" class="chocomel">
                    <h5> CHOCOMEL</h5>
                        <p> A campaign for the limited edition letter packs</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-2" class="jbl">
                    <h5> JBL</h5>
                        <p> Live like a champion with Jerome Boateng</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-3 alert" class="zalando">
                        <h5> ZALANDO </h5>
                        <p> Innovative SEO and content strategy for Zalando</p>
                        <h6> <img src="./round.png"></img> Read more </h6>

                    </div>

                    <div className="grid-4 success" class="koninklijkebibliotheek">
                     <h5> KONINKLIJKE BIBLIOTHEEK</h5>
                     <p> The search of the most influential book ever</p>
                     <h6> <img src="./round.png"></img> Read more </h6>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}

export default ClientCard3;
import React, { Component } from 'react';
import "./ClientCard3.css"

class ClientCard3 extends Component {
    render() {
        return (
            <div>
                
                {/* Chocomel, JBL, Zalando , Koninklijke bibliotheek */}

                <div className="container5">
                    <div className="grid-1" class="chocomel">
                    <h5 className="txt"> CHOCOMEL</h5>
                        <p className="txt"> A campaign for the limited edition letter packs</p>
                        <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-2" class="jbl">
                    <h5 className="txt"> JBL</h5>
                    <p className="txt"> Live like a champion with Jerome Boateng</p>
                        <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-3 alert" class="zalando">
                        <h5 className="txt"> ZALANDO </h5>
                        <p className="txt"> Innovative SEO and content strategy for Zalando</p>
                        <h6 className="txt"> <img src="./round.png"></img> Read more </h6>

                    </div>

                    <div className="grid-4 success" class="koninklijkebibliotheek">
                     <h5 className="txt"> KONINKLIJKE BIBLIOTHEEK</h5>
                     <p className="txt"> The search of the most influential book ever</p>
                     <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}

export default ClientCard3;
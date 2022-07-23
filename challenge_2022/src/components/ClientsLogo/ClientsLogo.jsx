import React, { Component } from 'react';
import './ClientsLogo.css'

class ClientsLogo extends Component {
    render() {
        return (

            <>
                <div className="grid-container" class="clientslogo">
                    <img className="grid-item" src="google.png" width={171.43} height={90}/>
                    <img className="grid-item" src="levis.png" width={171.43} height={90}/>
                    <img className="grid-item" src="netflix.png" width={171.43} height={90}/>
                    <img className="grid-item" src="spotify.png" width={171.43} height={90}/>
                    <img className="grid-item" src="patagonia.png" width={171.43} height={90}/>
                    <img className="grid-item" src="fujitsu.png"width={171.43} height={90}/>
                    <img className="grid-item" src="adyen.png" width={171.43} height={90}/>
                    <img className="grid-item" src="audi.png" width={171.43} height={90}/>
                    <img className="grid-item" src="triumph.png" width={171.43} height={90}/>
                    <img className="grid-item" src="tesla.png" width={171.43} height={90}/>
                    <img className="grid-item" src="asos.png" width={171.43} height={90}/>
                    <img className="grid-item" src="takeaway.png" width={171.43} height={90}/>
                </div>
            </>
        );
    }
}

export default ClientsLogo;
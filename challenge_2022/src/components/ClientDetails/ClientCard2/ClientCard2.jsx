import React, { Component } from 'react';
import "./ClientCard2.css"

class ClientCard2 extends Component {
    render() {
        return (
            <div>
                    {/* Belighting */}
                    <div className='container3'>
                    <div className="grid-1" class="belightining">
                        <h5 className="txt"> BE LIGHTINING</h5>
                        <p className="txt"> Delivering clarity on a global scale</p>
                        <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-2" class="tui">
                        <h5 className="txt"> TUI</h5>
                        <p className="txt"> Swipe to find your next holiday destination</p>
                        <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientCard2;
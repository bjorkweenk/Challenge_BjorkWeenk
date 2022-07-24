import React, { Component } from 'react';
import "./ClientCard2.css"

class ClientCard2 extends Component {
    render() {
        return (
            <div>
                    {/* Belighting */}
                    <div className='container3'>
                    <div className="grid-1" class="belightining">
                        <h5> BE LIGHTINING</h5>
                        <p> Delivering clarity on a global scale</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-2" class="tui">
                        <h5> TUI</h5>
                        <p> Swipe to find your next holiday destination</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientCard2;
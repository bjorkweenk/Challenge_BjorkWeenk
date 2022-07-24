import React, { Component } from 'react';
import "./ClientCard4.css"
class ClientCard4 extends Component {
    render() {
        return (
            <div>
                   {/* libertyglobal & arla  */}
                   <div className='container7'>
                    <div className="grid-1" class="libertyglobal">
                        <h5> LIBERTY GLOBAL</h5>
                        <p> Delivering complex commerce solutions</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div className="grid-2" class="arla">
                        <h5> ARLA</h5>
                        <p> Swipe to find your next holiday destination</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientCard4;
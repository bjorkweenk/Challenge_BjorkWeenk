import React, { Component } from 'react';
import "./ClientNote.css"

class ClientNote extends Component {
    render() {
        return (
            <div>
                           {/* Florensis */}
                           <div className='container2'>
                    <div className="grid-1"  class="Florensis">
                        <h5 className="txt"> FLORENSIS</h5>
                             <p className="txt">Rethinking the entire online ecosystem</p>
                            <h6 className="txt"> <img src="./round.png"></img> Read more </h6> </div>


                    <div className="grid-2">
                        <div className='Microsoft-Oneill1'>
                            <h5> Microsoft </h5>
                            <p className="florensis"> Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming <br></br> culture and bringing a fresh flavour<br></br> to their Xbox social media <br></br>channels</p>
                            <h6> <img src="./round.png"></img> Read more </h6>
                            <hr></hr>
                            <h5> O'NNEIL </h5>
                             <p className="florensis">Integrating existing content <br></br> into O<span dangerouslySetInnerHTML={{ __html: "'" }}></span>Neills<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s new e-commerce <br></br> platform</p>
                            <h6> <img src="./round.png"></img> Read more </h6>
                            <hr></hr>
                            <h5> Microsoft </h5>
                             <p className="florensis">Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming culture and bringing a fresh flavour <br></br>to their Xbox social media channels</p>
                             <h6> <img src="./round.png"></img> Read more </h6></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientNote;
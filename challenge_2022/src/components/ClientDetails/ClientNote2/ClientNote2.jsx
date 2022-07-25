import React, { Component } from 'react';
import "./ClientNote2.css"
class ClientNote2 extends Component {
    render() {
        return (
            <div>
            {/* Florensis */}
            <div className='container2'>

     <div className="grid-2">
         <div className='Microsoft-Oneill'>
             <h5 className="txt"> Microsoft </h5>
             <p className="txt"> Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming <br></br> culture and bringing a fresh flavour<br></br> to their Xbox social media <br></br>channels</p>
             <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
             <hr></hr>
             <h5 className="txt"> O'NNEIL </h5>
              <p className="txt">Integrating existing content into O<span dangerouslySetInnerHTML={{ __html: "'" }}></span>Neills<span dangerouslySetInnerHTML={{ __html: "'" }}></span>snew e-commerce platform</p>
             <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
             <hr></hr>
             <h5 className="txt"> Microsoft </h5>
              <p className="txt">Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming culture and bringing a fresh <br></br>flavour to their Xbox social <br></br>media channels</p>
              <h6 className="txt"> <img src="./round.png"></img> Read more </h6>
              </div>
     </div>

     <div className="grid-1"  class="Florensis">
         <div><h5 className="txt"> FLORENSIS</h5>
              <p className="txt">Rethinking the entire online ecosystem</p>
             <h6 className="txt"> <img src="./round.png"></img> Read more </h6> </div>
     </div>
 </div>
</div>
        );
    }
}

export default ClientNote2;
import React, { Component } from 'react';
import "./Landing.css"

class Landing extends Component {
    render() {
        return (
            <div>
                <section className='SectionLanding'>
                    <div className='SectionText'>
                    <h4 className="TextLanding"> WORK</h4>
                    <h5 className='TextLanding2'> A selection of projects that <b>pioneer <br></br> tech</b> and <b>marketing</b> to help brands <br></br> stay ahead. </h5>
                    </div>
                </section>
                <section className='SectionShowBar'>
                    <h4> Show me <span className="SectionLinks">all work</span></h4>
                    <h4> in <span className="SectionLinks">all industries</span></h4>
                </section>
            </div>
        );
       
    }
}

export default Landing;
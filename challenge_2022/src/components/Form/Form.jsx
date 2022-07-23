import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div>
                <section className="section-form">
                    <h2 className="text-form">QUESTION? <br></br>
                        WE ARE HERE <br></br> TO HELP! </h2>

                        <div className="form">
                        <p> NAME</p>
                       <hr></hr>
                        <p> MESSAGE</p>
                        <hr></hr>
                        </div>

                        <p> EMAIL </p>
                        <hr></hr>

                        </section>
                       <button className="btn"> SEND </button>
              
            </div>
        );
    }
}

export default Form;
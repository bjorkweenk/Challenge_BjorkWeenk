import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div>
                <section>
                    <h2>QUESTION? <br></br>
                        WE ARE HERE <br></br> TO HELP! </h2>
                        <p> NAME</p>
                        <p> MESSAGE</p>
                        <p> EMAIL</p>
                       <button> SEND </button>
                </section>
            </div>
        );
    }
}

export default Form;
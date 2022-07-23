import React, { Component } from 'react';
import "./ClientCard.css"

class ClientCard extends Component {
    render() {
        return (
            <>

                <div class="container">
                    <div class="grid-1">
                        <h5> BOL.COM</h5>
                        <h3> A Summer island in the Netherlands</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div class="grid-2">
                        <h5> KEMPEN</h5>
                        <h3> Not some average banking website</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div class="grid-3">
                        <h5> PHILIPS</h5>
                        <h3> Beautiful design meets innovative technology</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div class="grid-4">
                        <h5> GEMEENTEMUSEUM</h5>
                        <h3> A 100 years of Mondriaan <span dangerouslySetInnerHTML={{ __html: "&" }}></span> De Stijl</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                </div>
                <section>
                    <div className="Florensis"><h5> FLORENSIS</h5>
                        <h3> Rethinking the entire online ecosystem</h3>
                        <h6> <img src="./round.png"></img> Read more </h6> </div>
                    <div className='Microsoft-Oneil'>
                        <h5> Microsoft </h5>
                        <p> Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                        <hr></hr>
                        <h5> O'NNEIL </h5>
                        <p> Integrating existing content into O<span dangerouslySetInnerHTML={{ __html: "'" }}></span>Neills<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s new e-commerce platform</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                        <hr></hr>
                        <h5> Microsoft </h5>
                        <p> Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p></div>
                    <h6> <img src="./round.png"></img> Read more </h6>
                    <hr></hr>
                </section>

                <section className="section-clients">
                    <div className='Belighting'></div>
                    <div className='tui'></div>
                </section>

                <section>
                    <div className='Microsoft-Oneil'>
                        <h5> AMAZON </h5>
                        <p> Starting with delivering through drones</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                        <hr></hr>
                        <h5> O'NNEIL </h5>
                        <p> Integrating existing content into O<span dangerouslySetInnerHTML={{ __html: "'" }}></span>Neills<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s new e-commerce platform</p>
                        <h6> <img src="./round.png"></img> Read more </h6>
                        <hr></hr>
                        <h5> Microsoft </h5>
                        <p> Tapping into Ireland<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p></div>
                    <h6> <img src="./round.png"></img> Read more </h6>
                    <hr></hr>
                    <div className="Florensis"><h5> FLORENSIS</h5>
                        <h3> Rethinking the entire online ecosystem</h3>
                        <h6> <img src="./round.png"></img> Read more </h6> </div>

                </section>


                <div class="container">
                    <div class="grid-1">
                        <h5> BOL.COM</h5>
                        <h3> A Summer island in the Netherlands</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div class="grid-2">
                        <h5> KEMPEN</h5>
                        <h3> Not some average banking website</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div class="grid-3">
                        <h5> PHILIPS</h5>
                        <h3> Beautiful design meets innovative technology</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>

                    <div class="grid-4">
                        <h5> GEMEENTEMUSEUM</h5>
                        <h3> A 100 years of Mondriaan <span dangerouslySetInnerHTML={{ __html: "&" }}></span> De Stijl</h3>
                        <h6> <img src="./round.png"></img> Read more </h6>
                    </div>
                </div>

                <article> “Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month””
                    <br />
                    MATTIJS TEN DRINK - CEO, TRANSAVIA
                </article>

                <section className="section-clients">
                    <div className='Liberty-global'></div>
                    <div className='Arla'></div>
                </section>

                <article> <h4> CLIENTS</h4>
                    We value a great working relationship with our clients above all else. It<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s why they often come to our parties. It<span dangerouslySetInnerHTML={{ __html: "'" }}></span>s also why we<span dangerouslySetInnerHTML={{ __html: "'" }}></span>re able to challenge and inspire
                    them to reach for the stars.
                    <br />
                    MATTIJS TEN DRINK - CEO, TRANSAVIA
                </article>

            </>
        );
    }
}

export default ClientCard;
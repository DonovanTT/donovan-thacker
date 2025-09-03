import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import { Helmet } from 'react-helmet';

const TITLE = 'Donovan Thacker';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            splashText: "",
            splashAttribution: "",
            splashTextArray: [
                "It always seems impossible until it's done.",
                "Shoot for the moon. Even if you miss, you'll land among the stars.",
                "You just can't beat the person who never gives up.",
                "Quality is not an act, it is a habit.",
                "You can never quit. Winners never quit, and quitters never win.",
                "Without hard work, nothing grows but weeds.",
                "The secret of getting ahead is getting started."
            ],
            splashTextAuthorArray: [
                "Nelson Mandela",
                "Les Brown",
                "Babe Ruth",
                "Aristotle",
                "Ted Turner",
                "Gordon B. Hinckley",
                "Mark Twain"
            ]
        };
    }

    componentDidMount() {
        var quoteNum = Math.floor(Math.random() * this.state.splashTextArray.length);
        this.setState({
            splashText: this.state.splashTextArray[quoteNum],
            splashAttribution: this.state.splashTextAuthorArray[quoteNum]
        })
    }
      
    render() {
        return (
            <div className = "centered">
                
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>

                <div className="me1 title segmented">
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg">
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className="multiLine + purpleText + outlinedText shocking">
                            <h1>SCROLL</h1>
                            <h1>DOWN!</h1>
                        </div>
                        
                    </div>
                    <div className="quoteSeg"></div>
                </div>

                <div className="me2 title"></div>
                
                <div className="me3 title"></div>

                <div className="me4 title"></div>

                <div className="me5 title"></div>

                <div className="me6 title"></div>

                <div className="me7 title"></div>

                <div className="me8 title"></div>

                <div className="me9 title"></div>

                <div className="me10 title"></div>

                <div className="me11 title"></div>

                <div className="me12 title"></div>

                <div className="me13 title"></div>

                <div className="me14 title"></div>

                <div className="me14 title"></div>

                <div className="me14 title segmented">
                    <div className="quoteSeg"></div>

                    <div className="quoteSeg"></div>

                    <div className="quoteSeg + whiteText">
                        <h3 className="quote">"{this.state.splashText}"</h3>
                        <br/>
                        <h5 className="quoteCred">- {this.state.splashAttribution}</h5>
                    </div>
                </div>

                <div className="me14 title segmented">
                    <div className="quoteSeg">
                        <h3 className="whiteText"> Hi, I'm Donovan Thacker. I'm a software and web developer from Poultney, Vermont.</h3>
                    </div>
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg"></div>
                </div>

                <div className="me14 title segmented">
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg">
                        <h3 className="whiteText"> I'm an aspiring game developer, author and entrepreneur.</h3>
                    </div>
                </div>

                <div className="me14 title segmented">
                    <div className="quoteSeg">
                        <h3 className="whiteText"> I love snowboarding, cooking, and chess, and I'm learning to play the guitar.</h3>
                    </div>
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg"></div>
                </div>

                <div className="me14 title segmented">
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg">
                        <h3 className="whiteText"> I also love my two cats, Aspen and Chicken Nugget &Sigma;:3 </h3>
                    </div>
                </div>

                <div className="me14 title segmented">
                    <div className="quoteSeg">
                    </div>
                    <div className="quoteSeg"></div>
                    <div className="quoteSeg"></div>
                </div>
            </div>
        )
    }
}

export default Home;
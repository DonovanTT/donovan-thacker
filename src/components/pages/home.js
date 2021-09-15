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
                "Rather than reasoning by analogy, you boil things down to the most fundamental truths you can imagine and you reason up from there.",
                "Help!",
                "It always seems impossible until it's done.",
                "Shoot for the moon. Even if you miss, you'll land among the stars.",
                "You just can't beat the person who never gives up.",
                "Quality is not an act, it is a habit.",
                "You can never quit. Winners never quit, and quitters never win.",
                "Without hard work, nothing grows but weeds.",
                "The secret of getting ahead is getting started."
            ],
            splashTextAuthorArray: [
                "Elon Musk",
                "Donovan Thacker",
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

                <div className="me1 title"></div>

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

                <p className="me13 title segmented">
                    <div className="quoteSeg"></div>

                    <div className="quoteSeg"></div>

                    <div className="quoteSeg">
                        <h3 className="quote">"{this.state.splashText}"</h3>
                        <br/>
                        <h5 className="quoteCred">- {this.state.splashAttribution}</h5>
                    </div>

                </p>
            </div>
        )
    }
}

export default Home;
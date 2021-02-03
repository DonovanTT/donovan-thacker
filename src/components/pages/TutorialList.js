import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

class TutorialList extends Component {
    render() {
        return (
            <div className="Page Padded">
                <h1 className="Centered"> TUTORIALS </h1>

                <br/> 

                <p> I find that I learn best by taking notes. I also find that I frequently revisit my notes when programming because I work like a machine but don't have the memory of one. </p>

                <br/> 

                <p> I also want to build a respectable portfolio to demonstrate that I am a capable front-end developer. </p>

                <br/> 

                <p> And finally, I want to work on more projects that have the potential to earn me passive income. </p>

            </div>
        )
    }
}

export default TutorialList;
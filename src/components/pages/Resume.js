import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import { Helmet } from 'react-helmet';

const TITLE = "Donovan's Resume";

class Resume extends Component {
    render() {
        return (
            <div className="page padded">

                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>

                <h3 className="purpleText"> Technical Skills </h3>
                <div className="skillsList">
                    <div className="skillGroup">
                        <h5 className="skillBubble">C++ &nbsp; &#9733;  &#9733; &#9734;</h5>
                        <h5 className="skillBubble">CSS &nbsp; &#9733;  &#9733;  &#9733;</h5>
                        <h5 className="skillBubble">Express.js &nbsp; &#9733; &#9734; &#9734;</h5>
                        <h5 className="skillBubble">Git &nbsp; &#9733;  &#9733; &#9734;</h5>
                        <h5 className="skillBubble">GML &nbsp; &#9733;  &#9733; &#9733;</h5>
                        <h5 className="skillBubble">HTML &nbsp; &#9733;  &#9733;  &#9733;</h5>
                        <h5 className="skillBubble">Java &nbsp; &#9733; &#9733; &#9733;</h5>
                        <h5 className="skillBubble">JavaScript &nbsp; &#9733;  &#9733;  &#9733;</h5>
                        <h5 className="skillBubble">JSON &nbsp; &#9733;  &#9734;  &#9734;</h5>
                        <h5 className="skillBubble">MongoDB &nbsp; &#9733;  &#9733; &#9734;</h5>
                        <h5 className="skillBubble">Node.js &nbsp; &#9733;  &#9733;  &#9733;</h5>
                        <h5 className="skillBubble">React &nbsp; &#9733;  &#9733;  &#9733;</h5>
                        <h5 className="skillBubble">Redux &nbsp; &#9733; &#9734; &#9734;</h5>
                        <h5 className="skillBubble">SQL &nbsp; &#9733;  &#9733; &#9734;</h5>
                    </div>
                </div>
                <br/>

                <h3 className="purpleText"> Education </h3>
                
                <div className="resumeBlurb">
                    <h4>B.S. Computer Information Systems</h4>
                    <div className="splitContent">
                        <h6>Castleton University</h6>
                        <h6>Dec 2020</h6>
                    </div>
                </div>
                
                <br/>

                <h3 className="purpleText"> Experience </h3>

                <div className="resumeBlurb">
                    <h4>Kitchen Manager</h4>
                    <div className="splitContent">
                        <h6>Taps Tavern</h6>
                        <h6>Apr 2021 - Present</h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Line Cook</h4>
                    <div className="splitContent">
                        <h6>Taps Tavern</h6>
                        <h6>Aug 2019 - Apr 2021</h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Web Development Intern</h4>
                    <div className="splitContent">
                        <h6> Lakeside News & the Rutland Sun </h6>
                        <h6> &nbsp; Sep 2018 - Jun 2019 </h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Building Manager</h4>
                    <div className="splitContent">
                        <h6> Castleton University </h6>
                        <h6> Sep 2017 - Dec 2020 </h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Library Assistant</h4>
                    <div className="splitContent">
                        <h6> Champlain College </h6>
                        <h6> Aug 2016 - Dec 2016 </h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Eco-Rep</h4>
                    <div className="splitContent">
                        <h6> Champlain College </h6>
                        <h6> Aug 2016 - Dec 2016 </h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Cashier/Grocer/Produce Clerk/Deli Clerk</h4>
                    <div className="splitContent">
                        <h6> Shaw's Supermarkets </h6>
                        <h6> Nov 2014 - Aug 2019 </h6>
                    </div>
                </div>

                <br/>

                <div className="resumeBlurb">
                    <h4>Summer Intern</h4>
                    <div className="splitContent">
                        <h6> Poultney Mettowee Natural Resources Conservation District </h6>
                        <h6> Jun 2013 </h6>
                    </div>
                </div>

                <br/>

            </div>
        )
    }
}

export default Resume;
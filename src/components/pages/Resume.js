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
                        <h5 className="skillBubble">&nbsp; ADO &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; ASP.NET &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; C++ &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; C# &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; CSS &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Express.js &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Git &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; GML &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Heroku &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; HTML &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Java &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; JavaScript &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; JSON &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; MongoDB &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Netlify &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Node.js &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; React &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; Redux &nbsp;</h5>
                        <h5 className="skillBubble">&nbsp; SQL &nbsp;</h5>

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
                    <h4>IT Systems Developer</h4>
                    <div className="splitContent">
                        <h6>Vermont Agency of Digital Services</h6>
                        <h6>Oct 2021 - Present</h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Kitchen Manager</h4>
                    <div className="splitContent">
                        <h6>Taps Tavern</h6>
                        <h6>Apr 2021 - Sep 2021</h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Line Cook</h4>
                    <div className="splitContent">
                        <h6>Taps Tavern</h6>
                        <h6>Aug 2019 - Apr 2021</h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Web Development Intern</h4>
                    <div className="splitContent">
                        <h6> Lakeside News & the Rutland Sun </h6>
                        <h6> &nbsp; Sep 2018 - Jun 2019 </h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Building Manager</h4>
                    <div className="splitContent">
                        <h6> Castleton University </h6>
                        <h6> Sep 2017 - Dec 2020 </h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Library Assistant</h4>
                    <div className="splitContent">
                        <h6> Champlain College </h6>
                        <h6> Aug 2016 - Dec 2016 </h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Eco-Rep</h4>
                    <div className="splitContent">
                        <h6> Champlain College </h6>
                        <h6> Aug 2016 - Dec 2016 </h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Cashier/Grocer/Produce Clerk/Deli Clerk</h4>
                    <div className="splitContent">
                        <h6> Shaw's Supermarkets </h6>
                        <h6> Nov 2014 - Aug 2019 </h6>
                    </div>
                </div>
                <div className="resumeBlurb">
                    <h4>Summer Intern</h4>
                    <div className="splitContent">
                        <h6> Poultney Mettowee Natural Resources Conservation District </h6>
                        <h6> Jun 2013 </h6>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}

export default Resume;
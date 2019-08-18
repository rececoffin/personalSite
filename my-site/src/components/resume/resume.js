import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <section id="resume">
                        {/* Education------------------------------------- */}
                        <div className="row education">
                            <div className="three columns header-col">
                                <h1><span>Education</span></h1>
                            </div>
                            <div className="nine columns main-col">
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>Colorado School of Mines</h3>
                                        <p className="info">Bachalors in Computer Science <span>•</span> <em className="date">May 2019</em></p>
                                        <p>
                                            Graduated with honors with a focus on Robotics and Intelligence
                                            Systems. Was a member of the Club Baseball team for 4 years and
                                            searved as an officer and captain for two. Was also a member of
                                            the Mines Linux Users Group.
                                        </p>
                                    </div>
                                </div> {/* item end */}
                                {/* <div className="row item">
                                    <div className="twelve columns">
                                        <h3>Haxtun High School</h3>
                                        <p className="info">Haxtun, Colorado<span>•</span> <em className="date">May 2015</em></p>
                                        <p>
                                            Was an active member of Future Business Leaders of America, and
                                            Future Farmers of America for 4 years. Participated in 4
                                        </p>
                                    </div>
                                </div> item end */}
                            </div> {/* main-col end */}
                        </div> {/* End Education */}
                        {/* Work
----------------------------------------------- */}
                        <div className="row work">
                            <div className="three columns header-col">
                                <h1><span>Work</span></h1>
                            </div>
                            <div className="nine columns main-col">
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>Connexta LLC</h3>
                                        <p className="info">Software Engineer <span>•</span> <em className="date">May 2014 - Present</em></p>
                                        <p>
                                            I work open source development sprint tasks, ranging from creating new console 
                                            administrator commands, re factoring and upgrading core underlying components, 
                                            and developing JavaScript user interface improvements.
                                        </p>
                                    </div>
                                </div> {/* item end */}
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>Full Contact</h3>
                                        <p className="info">Software Engineer Intern <span>•</span> <em className="date">May 2013 - August 2013</em></p>
                                        <p>
                                            I spent 6 weeks working with a team to develop a machine learning solution that
                                             could detect fraud accounts in real time. We then modified the solution to apply
                                              to an existing database in order to detect already active fraud accounts as well
                                              as developing a user interface in order to manually review the flagged accounts.
                                        </p>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* main-col end */}
                        </div> {/* End Work */}
                        {/* Skills
----------------------------------------------- */}
                        <div className="row skill">
                            <div className="three columns header-col">
                                <h1><span>Skills</span></h1>
                            </div>
                            <div className="nine columns main-col">
                                <p>
                                    Extensive experience working in an agile enviroment. Strong presentatio
                                    and communitication stkills. As well as experience in the following technologies.
                                </p>
                                <div className="bars">
                                    <ul className="skills">
                                        <li><span className="bar-expand java" /><em>Java</em></li>
                                        <li><span className="bar-expand python" /><em>Python</em></li>
                                        <li><span className="bar-expand react" /><em>React JS</em></li>
                                        <li><span className="bar-expand cplusplus" /><em>C++</em></li>
                                        <li><span className="bar-expand matlab" /><em>Matlab</em></li>
                                        {/* <li><span className="bar-expand jquery" /><em>jQuery</em></li> */}
                                    </ul>
                                </div>{/* end skill-bars */}
                            </div> {/* main-col end */}
                        </div> {/* End skills */}
                    </section> {/* Resume Section End*/}
                    <p>
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span><br />
                                <span>{resumeData.address1}<br />
                                      {resumeData.address2}
                                </span><br />
                                <span>{resumeData.phone}</span><br />
                                <span>{resumeData.email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="Resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                    </div> {/* end row */}
                    {/* end .main-col */}
                </div>

            </React.Fragment>
        )
    }
}
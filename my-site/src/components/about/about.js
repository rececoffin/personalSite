import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p> I am a Software Engineer in the greater Denver area. I graduated with
                                a B.S. in Computer Science with a focus on Robotics and Intelligence
                                Systems from the Colorado School of Mines in 2019.
                                I am a Colorado native
                                who enjoys all sorts of outdoor activities such as hiking or fishing.
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
                        </div> {/* end .main-col */}
                    </div>
                </section> {/* About Section End*/}

            </React.Fragment>
        )
    }
}
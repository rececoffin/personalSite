import React, { Component } from 'react';
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
                                        <span>Rece Coffin</span><br />
                                        <span>3430 S. Platte River Dr. Apt 5405<br />
                                           Denver, CO 80110 US 
                                        </span><br />
                                        <span>(970)520-7484</span><br />
                                        <span>coffin.rece@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
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
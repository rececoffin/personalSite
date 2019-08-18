import React, { Component } from 'react';
import resumeData from '../../resumeData'
export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="contact">
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">
                                Feel free to send me an email with any questions, job offers, or interesting
                                pieces of trivia you feel I should know.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns">
                            {/* form */}
                            <form action method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input type="text" defaultValue size={35} id="contactName" name="contactName" defaultValue={""}/>
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" defaultValue={""}/>
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" defaultValue={""}/>
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                                    </div>
                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form> {/* Form End */}
                            {/* contact-warning */}
                            <div id="message-warning"> Error boy</div>
                            {/* contact-success */}
                            <div id="message-success">
                                <i className="fa fa-check" />Your message was sent, thank you!<br />
                            </div>
                        </div>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Email and Phone</h4>
                                <p className="address">
                                    {resumeData.name}<br />
                                    {resumeData.email} <br />
                                    <span>{resumeData.phone}</span>
                                </p>
                            </div>
                        </aside>
                    </div>
                </section> {/* Contact Section End*/}

            </React.Fragment>
        )
    }
}
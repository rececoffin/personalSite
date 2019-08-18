import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt="" src="images/portfolio/code.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>BitStacker</h5>
                                                    <p>An early project</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt="" src="images/portfolio/code2.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Robotics</h5>
                                                    <p>My human centered robotics capstone</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt="" src="images/portfolio/ddf.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>DDF</h5>
                                                    <p>An open source project I contribute to</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt="" src="images/portfolio/code2.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Useless</h5>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup--------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/code.jpg" alt="" />
                            <div className="description-box">
                                <h4>BitStacker</h4>
                                <p>My Software Engineering capstone project</p>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/rececoffin/BitStacker">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/code2.jpg" alt="" />
                            <div className="description-box">
                                <h4>Human Centered Robotics</h4>
                                <p>Final project for human centered robotics class</p>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/rececoffin/HumanCenteredFinal">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/ddf.jpg" alt="" />
                            <div className="description-box">
                                <h4>DDF</h4>
                                <p>An open source, search and discovery tool I contribute to</p>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/rececoffin/ddf">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/code2.jpg" alt="" />
                            <div className="description-box">
                                <h4>I need more projects</h4>
                                <p>Enjoy this site</p>
                            </div>
                            <div className="link-box">
                                <a href="https://theuselessweb.com/">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                    </div> {/* row End */}
                </section> {/* Portfolio Section End*/}

            </React.Fragment>
        )
    }
}
import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{resumeData.name}</h1>
                            <h3>
                                A <span>{resumeData.role}</span> at <span>{resumeData.company}. </span>
                                Let's <a className="smoothscroll" href="#about">start scrolling</a> and <a className="smoothscroll" href="#about">learn more</a>.</h3>
                            <hr />
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            </li>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header> {/* Header End */}
            </React.Fragment>
        )
    }
}
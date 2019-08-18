import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
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
                            </ul>
                            {/* <ul className="copyright">
                                <li>© Copyright Rece Coffin</li>
                                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                            </ul> */}
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>

            </React.Fragment>
        )
    }
}
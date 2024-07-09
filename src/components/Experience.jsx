import React from 'react'
import { Link } from 'react-scroll';
const Experience = () => {
    return (
        <div className="mainwork">
            <div>
            <h2 className="title-edu">Work Experiences</h2>
                <div className="testwork">
                    <div className="work-section section1">
                        <h2>PT. Lapi Divusi</h2>
                        <br />
                        <strong>Programmer Internship</strong>
                        <br />
                        <ul className="skills-list">
                            <li>
                                Develop mobile attendance recording system using react native for IOS and Android
                            </li>
                            <li>
                                Learn about how to work in industry
                            </li>
                        </ul>
                    </div>
                    <div className="work-section section2">
                        <h2>Fujitsu Indonesia</h2>
                        <br />
                        <strong>Functional Developer / Fulstack Engineer</strong>
                        <br />
                        <ul className="skills-list">
                            <li>
                                Modify ERD according to the Subject Matter Expert's request
                            </li>
                            <li>
                                Create function and stored procedure in PostgreSQL
                            </li>
                            <li>
                                Create front-end and back-end function using .Net Core and Telerik�s KendoUI framework
                            </li>
                        </ul>
                    </div>
                    <div className="work-section section3">
                        <h2>Multimedia Security Lab - NCUT</h2>
                        <br />
                        <strong>Research Assistant</strong>
                        <br />
                        <ul class="skills-list">
                            <li>
                                Design data hiding scheme for image steganography
                            </li>
                            <li>
                                Translate the design into a Matlab program
                            </li>
                            <li>
                                Analyze the result and create the report
                            </li>
                        </ul>
                    </div>
                    <div className="work-section section4">
                        <h2> Xiangshun Information Co., Ltd</h2>
                        <br />
                        <strong>Software Engineer</strong>
                        <br />
                        <ul className="skills-list">
                            <li>
                                Using .Net core, Blazor, and MSSQL
                            </li>
                            <li>
                                Translate documents from chinese to english
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="scroll-button">
        <Link to="project" spy={true} smooth={true} offset={-15} duration={500}>
          <button>Scroll to Next Section</button>
        </Link>
      </div>
        </div>

    )
}

export default Experience
import React from 'react'
import Binus from "../assets/images/logobinus.png"
import Polban from "../assets/images/logopolban.png"
import NCUT from "../assets/images/logoncut.png"
import { Link } from 'react-scroll';
const Education = () => {
    return (

        <div className="main-edu">
            <h2 className="title-edu">Education</h2>
            <div className="card-edu">

                <a href="https://www.ncut.edu.tw/" target="_blank" className="post-card-link">
                    <div className="edu-section">
                        <h3 className="education-h1">National Chin-Yi University of Technology</h3>
                        <strong>Master Degree - Computer Science </strong>
                        <p>GPA : 3.92</p>
                        <img src={NCUT} width="180" height="180" />
                    </div>
                </a>
                <a href="https://binus.ac.id/" target="_blank" className="post-card-link">
                    <div className="edu-section">
                        <h3 className="education-h1">Bina Nusantara University</h3>
                        <strong>Bachelor Degree - Computer Science</strong>
                        <p>GPA : 3.27</p>
                        <img src={Binus} width="200" height="200" />
                    </div>
                </a>
                <a href="https://www.polban.ac.id/" target="_blank" className="post-card-link">
                    <div className="edu-section">
                        <h3 className="education-h1">Politeknik Negeri Bandung</h3>
                        <strong>Diploma Degree - Computer Science </strong>
                        <p>GPA : 2.8</p>
                        <img src={Polban} width="150" height="200" />
                    </div>
                </a>
            </div>
            <div className="scroll-button">
        <Link to="experience" spy={true} smooth={true} offset={-15} duration={500}>
          <button>Scroll to Next Section</button>
        </Link>
      </div>
        </div>

    )
}

export default Education
import React from 'react'
import { Link } from 'react-scroll';
import Scroll from "../assets/images/down-arrow.svg"

const Certification = () => {
  return (
    <div className="main-cert">
    <h2 className="title-cert">Course & Certification</h2>
    <div className="card-cert">
    <a href="https://www.coursera.org/account/accomplishments/professional-cert/F5ZSPW8722CX" target="_blank" className="post-card-link">
            <div className="cert-section">
            <strong>Google Data Analytic Specialization Certificate</strong>
                <p>Google - Issued Oct 2021 - Credential ID F5ZSPW8722CX</p>
            </div>
        </a>
        <a href="https://www.dicoding.com/certificates/JLX1LL44JX72" target="_blank" className="post-card-link">
            <div className="cert-section">
            <strong>Learn SOLID Programming Principles</strong>
            <p>Dicoding - Issued Apr 2023 - Credential ID JLX1LL44JX72</p>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/informit-bandung-31a577170/?originalSubdomain=id" target="_blank" className="post-card-link">
            <div className="cert-section">
                <strong>Adroid Applications Development with Android Studio</strong>
                <p>InformIT - Issued Apr 2018 - Credential ID 18C716</p>
              
            </div>
        </a>
        <a href="https://www.coursera.org/professional-certificates/google-project-management" target="_blank" className="post-card-link">
            <div className="cert-section">
            <strong>Google Project Management: Professional Certificate</strong>
            <p>On-going</p>
            </div>
        </a>
        
    </div>
    <div className="scroll-button">
<Link to="education" spy={true} smooth={true} offset={-15} duration={500}>
<img src={Scroll} alt="Scroll to Next Section" />
</Link>
</div>
</div>
  )
}

export default Certification
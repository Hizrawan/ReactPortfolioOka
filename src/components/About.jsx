import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Scroll from "../assets/images/down-arrow.svg"
import cv2024 from '../assets/CV2024.pdf';

function About() {
        const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
        const [tooltipVisible, setTooltipVisible] = useState(false);
      
        const handleMouseMove = (event) => {
          setTooltipPosition({ x: event.pageX, y: event.pageY});
        };
      
        const handleMouseEnter = () => {
          setTooltipVisible(true);
        };
      
        const handleMouseLeave = () => {
          setTooltipVisible(false);
        };
      
        const handleClick = () => {
          const link = document.createElement('a');
          link.href = cv2024; 
          link.download = 'Resume_Hizrawan_2024.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
    return (
        <div className="App">
            <div className="card" onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>
          {tooltipVisible && (
        <span
          className="tooltip"
          style={{ left: `${tooltipPosition.x}px`, top: `${tooltipPosition.y}px` }}
        >
          Click me to download my resume
        </span>
      )}
                <div className="card-content">
                    <h1 className="name">Hizrawan Dwi Oka</h1>
                    <p className="description"> I'm a recently graduated computer science student. Before continuing my master's studies, I had experience working as a software engineer for about three years, Mostly using C#.</p>
                </div>
            </div>
            <div className="scroll-button">
        <Link to="skill" spy={true} smooth={true} offset={-15} duration={500}>
        <img src={Scroll} alt="Scroll to Next Section" />
        </Link>
      </div>
        </div>
        
    );
}

export default About;

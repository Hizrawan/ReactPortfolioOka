import React from 'react'
import { Link } from 'react-scroll';
import Scroll from "../assets/images/down-arrow.svg"

const Project = () => {
  return (
    <div className="mainproject">
        <div className='project-container'> <h1>Projects</h1>
    <div className="project-section">

        <a href="https://github.com/Hizrawan/ReactPortfolioOka" target="_blank" className="post-card-link">
            <div className="card-project">
                <h4>React Portfolio Website</h4>
                <p >A website built using React for showcasing my skills, achievements. Build Using .Net Core 8, and Blazor.</p>
                <p className='linkproject'>https://github.com/Hizrawan/ReactPortfolioOka</p>
            </div>
        </a>
        <a href="https://github.com/Hizrawan/PortfolioOkaBlazor" target="_blank" className="post-card-link">
            <div className="card-project">
                <h4>Blazor C# Portfolio Website</h4>
                <p>A website built using Blazor for showcasing my skills, achievements. Build Using .Net Core 8, and Blazor.</p>
                <p className='linkproject'>https://github.com/Hizrawan/PortfolioOkaBlazor</p>
            </div>
        </a>
        <a href="https://github.com/Hizrawan/PortfolioOkaBlazor" target="_blank" className="post-card-link">
            <div className="card-project">
                <h4>Portfolio Website</h4>
                <p>A website for showcasing my skills, achievements. Build Using .Net Core 8, and Blazor.</p>
                <p className='linkproject'>https://github.com/Hizrawan/PortfolioOkaBlazor</p>
            </div>
        </a>
        <a href="https://github.com/Hizrawan" className="post-card-link">
            <div className="card-project">
                <h4>Show More</h4>
                <p>View all posts</p>
            </div>
        </a>
    </div></div>
   
    <div className="scroll-button">
        <Link to="blog" spy={true} smooth={true} offset={-15} duration={500}>
        <img src={Scroll} alt="Scroll to Next Section" />
        </Link>
      </div>
</div>
  )
}

export default Project
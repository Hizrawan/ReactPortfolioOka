import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { Element } from 'react-scroll';
import Certification from './components/Certification';

export default function App() {
    return (
        <div>
            <Navbar />
            <Element name="about">
                <About />
            </Element>
            <Element name="skill">
                <Skill />
            </Element>
            <Element name="certification">
                <Certification />
            </Element>
            <Element name="education">
                <Education />
            </Element>
            <Element name="experience">
                <Experience />
            </Element>
            <Element name="project">
                <Project />
            </Element>
            <Element name="blog">
                <Blog />
            </Element>
            <Element name="contact">
                <Footer />
            </Element>
        </div>
    );
}

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
//import Certification from "./components/Certification";
import Experience from "./components/Experience";
import Blog from "./components/Organization";
import Skill from "./components/Skill";
import Project from "./components/Language";

export default function App() {
    return (
        <div>
            <About />
            <Skill />
            <Education />
            <Experience />
            <Project />
            <Blog />
            <Navbar />
        </div>

    )
}
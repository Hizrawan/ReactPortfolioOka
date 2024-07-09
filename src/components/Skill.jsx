import React from 'react'
import { Link } from 'react-scroll';
const Skill = () => {
    return (
        <div className="mainskills">
            <div className="skills-section">
                <h2 className="title-skills">Skills</h2>
                <ul className="skills-list">

                    <li><strong>Front-end</strong> - Proficient in HTML, CSS, JavaScript, and Blazor.</li>
                    <li><strong>Back-end</strong> - Knowledgeable in databases, and API development.</li>
                    <li><strong>Project Management</strong> - Familiar with Agile methodologies and version control systems like Git.</li>
                    <li><strong>Game Development</strong> - Currently developing game using Godot Engine</li>

                </ul>
            </div>
            <div className="scroll-button">
        <Link to="education" spy={true} smooth={true} offset={-15} duration={500}>
          <button>Scroll to Next Section</button>
        </Link>
      </div>
        </div>
    )
}

export default Skill
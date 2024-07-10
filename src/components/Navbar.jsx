import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            Skill
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="certification"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Certification
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

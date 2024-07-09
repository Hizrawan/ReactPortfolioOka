import React from 'react';
import { Link } from 'react-scroll';

const ScrollButton = ({ to }) => (
  <div className="scroll-button">
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <button>Scroll to Next Section</button>
    </Link>
  </div>
);

export default ScrollButton;

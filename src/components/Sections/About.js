import React from 'react';
import Scroll from '../Scroll';
const About = () => {
  return (
    <section id="top" className="one dark cover">
      <div className="container">
        <header>
          <h2 className="alt">
            Hi! I'm <strong>Mia!</strong>
          </h2>
          <p>Frontend JavaScript Developer </p>
        </header>

        <footer>
          <Scroll type="id" element={'portfolio'}>
            <a href="#portfolio" className="button">
              Projects
            </a>
          </Scroll>
        </footer>
      </div>
    </section>
  );
};

export default About;

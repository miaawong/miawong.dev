import React from 'react';
import beach from '../../assets/images/beachresort.png';
import matcha from '../../assets/images/matchamia.png';
import weather from '../../assets/images/weatherapp.png';
import landscape from '../../assets/images/landscape.png';
import { FaGithub, FaDesktop } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="portfolio" className="two">
      <div className="container">
        <header>
          <h2>Recent Projects</h2>
        </header>

        <div className="row">
          <div className="col-6 col-12-mobile">
            <article className="item">
              <a
                href="https://react-beach-resort-mia.netlify.com"
                className="image fit"
              >
                <img src={beach} alt="Beach Resort" />
              </a>
              <header>
                <h3>Beach Resort</h3>
                <a
                  href="https://github.com/miaawong/Beach-Resort"
                  className="projectIcons"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://react-beach-resort-mia.netlify.com"
                  className="projectIcons"
                >
                  <FaDesktop />
                </a>
              </header>
            </article>

            <article className="item">
              <a
                href="https://reactweatherapp-mia.netlify.com/"
                className="image fit"
              >
                <img src={weather} alt="" />
              </a>
              <header>
                <h3>React Weather App</h3>
                <a
                  href="https://github.com/miaawong/react-weatherApp"
                  className="projectIcons"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://weatherapp-miawong.netlify.com"
                  className="projectsIcons"
                >
                  <FaDesktop />
                </a>
              </header>
            </article>
          </div>
          <div className="col-6 col-12-mobile">
            <article className="item">
              <a href="https://matchamia.netlify.com" className="image fit">
                <img src={matcha} alt="matchamia" />{' '}
              </a>
              <header>
                <h3>Matcha Mia</h3>
                <a
                  href="https://github.com/miaawong/matchamia"
                  className="projectIcons"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://matchamia.netlify.com"
                  className="projectIcons"
                >
                  <FaDesktop />
                </a>
              </header>
            </article>
            <article className="item">
              <a
                href="https://osorno-scapes.netlify.com/"
                className="image fit"
              >
                <img src={landscape} alt="landscape" />{' '}
              </a>
              <header>
                <h3>Landscape </h3>
                <a
                  href="https://github.com/miaawong/osorno_scapes"
                  className="projectIcons"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://osorno-scapes.netlify.com/"
                  className="projectIcons"
                >
                  <FaDesktop />
                </a>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

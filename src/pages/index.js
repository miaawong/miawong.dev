import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar/Index';
import {
  FaGithub,
  FaDesktop,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaNodeJs,
  FaCss3Alt,
} from 'react-icons/fa';

import beach from '../assets/images/beachresort.png';
import matcha from '../assets/images/matchamia.png';
import under from '../assets/images/under.jpeg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Projects', icon: 'fa-th' },
  { id: 'skills', name: 'Skills', icon: 'fa-laptop' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Mia</strong>
            </h2>
            <h2>Web developer</h2>
            <p>
              Addicted to creating things on the web. Consistently learning
              about web development and challenging myself with projects.
            </p>
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
                  href="https://github.com/miaawong/react-weatherApp"
                  className="image fit"
                >
                  <img src={under} alt="" />
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
                    href="https://react-beach-resort-mia.netlify.com"
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
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="skills">
          <div className="skills-block">
            <header>
              <h2>Skills</h2>
            </header>
            <div className="skills-container">
              <p className="row1">
                HTML5 <FaHtml5 />{' '}
              </p>
              <p className="row2">
                CSS3
                <FaCss3Alt style={{ marginLeft: '4px' }} />{' '}
              </p>
              <p className="row3">
                JavaScript
                <FaJs style={{ marginLeft: '3px' }} />{' '}
              </p>
              <p className="row4">
                React.js <FaReact />{' '}
              </p>
              <p className="row5">Gatsby.js</p>
              <p className="row6">
                Bootstrap <FaBootstrap />{' '}
              </p>
              <p className="row7">jQuery</p>
              <p className="row8">
                git <FaGit style={{ marginLeft: '3px' }} />{' '}
              </p>
              <p className="row9">
                Github <FaGithub style={{ marginLeft: '3px' }} />{' '}
              </p>
              <p className="row10">
                Node.js <FaNodeJs style={{ marginLeft: '3px' }} />{' '}
              </p>
              <p className="row11">MySQL</p>
              <p className="row12">MongoDB</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;

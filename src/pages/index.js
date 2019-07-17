import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import beach from '../assets/images/beachresort.png';
import matcha from '../assets/images/matchamia.png';
import under from '../assets/images/under.jpeg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Projects', icon: 'fa-th' },
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
              <br />
              Web developer
            </h2>
            <p>I love creating things on the web, check them out!</p>
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
                <a href="/#" className="image fit">
                  <img src={beach} alt="Beach Resort" />
                </a>
                <header>
                  <h3>Beach Resort</h3>
                </header>
              </article>

              <article className="item">
                <a href="/#" className="image fit">
                  <img src={under} alt="" />
                </a>
                <header>
                  <h3>React Weather App</h3>
                </header>
              </article>
            </div>
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={matcha} alt="" />
                </a>
                <header>
                  <h3>Matcha Mia</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar/Index';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Projects', icon: 'fa-th' },
  { id: 'skills', name: 'Skills', icon: 'fa-laptop' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <About />
      <Projects />
      <Skills />
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;

import React from 'react';
import {
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaNodeJs,
  FaCss3Alt,
} from 'react-icons/fa';
const Skills = () => {
  return (
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
  );
};

export default Skills;

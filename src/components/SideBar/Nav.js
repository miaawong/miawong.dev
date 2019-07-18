import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import resume from '../../assets/resume/miawong.pdf';

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
        <li>
          <a href={resume} download>
            <span
              className="fa fa-download"
              style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
            >
              Resume
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

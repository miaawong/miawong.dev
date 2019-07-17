import React from './node_modules/react';
import { Link } from './node_modules/gatsby';

export default function Footer({ title, heading }) {
  return (
    <div id="logo">
      <Link to="/">
        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}

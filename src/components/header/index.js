import React from 'react';
import './header.css';

const Header = () => (
  <header className="header">
    <span className="header__icon" role="img" aria-label="keyboard">⌨️</span>
    <h1 className="header__title">hidutil key remapping generator for MacOS Sonoma+</h1>
    <h6>// fork deployed from original repo by <a href="https://github.com/amarsyla/hidutil-key-remapping-generator">amarsyla</a> for permanence. hid usage tables and specs can be reviewed <a href='https://developer.apple.com/library/archive/technotes/tn2450/_index.html'>here</a>.</h6>
  </header>
);

export default Header;
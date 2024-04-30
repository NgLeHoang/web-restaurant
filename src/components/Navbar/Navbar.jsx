import React from 'react';
import images from '../../constants/images';
import styles from './Navbar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Navbar = () => (
  <nav className={cx('wrrapper')}>
    <div className={cx('navbar-logo')}>
      <img src={images.logo} alt='app-logo'/>
    </div>
    <ul className={cx('navbar-links')}>
      <li><a href="#home">Home</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-booked'>
      <a href="/">Book Table</a>
    </div>
  </nav>
);

export default Navbar;

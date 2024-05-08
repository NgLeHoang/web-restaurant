import React, { useState } from 'react';
import images from '../../../constants/images';
import styles from './Navbar.scss';
import classNames from 'classnames/bind';
import config from '../../../config';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={cx('navbar-wrapper')}>
    <div className={cx('navbar-logo')}>
      <img src={images.logo} alt='app-logo'/>
    </div>
    <ul className={cx('navbar-links')}>
      <Link to={config.routes.home}><span>Home</span></Link>
      <Link to={config.routes.menu}><span>Menu</span></Link>
      <Link to={config.routes.gallery}><span>Gallary</span></Link>
      <Link to={config.routes.about}><span>About</span></Link>
      <Link to={config.routes.contact}><span>Contact</span></Link>
    </ul>
    <div className={cx('navbar-booked')}>
      <Link to={config.routes.contact}><span>Book Table</span></Link>
    </div>
    <div className={cx('navbar-small-screen')}>
      <GiHamburgerMenu color="#fff" fontSize={26} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
      <div className={cx('navbar-small-screen-overlay slide-bottom')}>
        <MdOutlineRestaurantMenu fontSize={26} className={cx('overlay-close')} onClick={() => setToggleMenu(false)} />
        <ul className={cx('navbar-small-screen-links')}>
          <Link to={config.routes.home}><span>Home</span></Link>
          <Link to={config.routes.menu}><span>Menu</span></Link>
          <Link to={config.routes.gallery}><span>Gallary</span></Link>
          <Link to={config.routes.about}><span>About</span></Link>
          <Link to={config.routes.contact}><span>Contact</span></Link>
        </ul>
      </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;

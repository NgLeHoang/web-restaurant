import React, { useEffect, useState } from 'react';
import images from '../../../constants/images';
import styles from './Navbar.scss';
import classNames from 'classnames/bind';
import config from '../../../config';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { Link } from 'react-router-dom';
import DropDown from '../../../components/DropDown/DropDown';
import data from '../../../constants/data';
const cx = classNames.bind(styles);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cx('navbar-wrapper', { 'scrolled': isScrolled })}>
    <Link to={config.routes.home} reloadDocument>
      <div className={cx('navbar-logo')}>
        <img src={images.logo} alt='app-logo'/>
      </div>
    </Link>
    <ul className={cx('navbar-links')}>
      <Link to={config.routes.home} reloadDocument><span>Home</span></Link>
      <Link to={config.routes.menu} reloadDocument><DropDown title="Menu" items={data.menuNavbarDetails}/></Link>
      <Link to={config.routes.gallery} reloadDocument><span>Gallary</span></Link>
      <Link to={config.routes.about} reloadDocument><span>About</span></Link>
      <Link to={config.routes.contact} reloadDocument><span>Contact</span></Link>
    </ul>
    <div className={cx('navbar-booked')}>
      <Link to={config.routes.contact} reloadDocument><span>Book Table</span></Link>
    </div>
    <div className={cx('navbar-small-screen')}>
      <GiHamburgerMenu color="#fff" fontSize={26} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
      <div className={cx('navbar-small-screen-overlay slide-bottom')}>
        <MdOutlineRestaurantMenu fontSize={26} className={cx('overlay-close')} onClick={() => setToggleMenu(false)} />
        <ul className={cx('navbar-small-screen-links')}>
          <Link to={config.routes.home} reloadDocument><span>Home</span></Link>
          <Link to={config.routes.menu} reloadDocument><span>Menu</span></Link>
          <Link to={config.routes.gallery} reloadDocument><span>Gallary</span></Link>
          <Link to={config.routes.about} reloadDocument><span>About</span></Link>
          <Link to={config.routes.contact} reloadDocument><span>Contact</span></Link>
        </ul>
      </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;

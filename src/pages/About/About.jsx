import React from 'react';

import classNames from 'classnames/bind';
import styles from './About.scss';
import { images } from '../../constants';
import CategoryPage from '../../components/CategoryPage/CategoryPage';
import AboutUs from '../../container/AboutUs/AboutUs';
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const cx = classNames.bind(styles);

const About = () => (
  <div className={cx('about-wrapper')}>
    <CategoryPage image={images.bg} pageTitle='About'/>
    <div className={cx('about-box-wrapper')}>
      <AboutUs title="Phone" details1="713.690.7508" icon={<FaPhone />}/>
      <AboutUs title="Address" details1="7758 W Tidwell Rd Ste 108, Houston, TX 77040, USA" icon={<FaMapMarkerAlt />}/>
      <AboutUs title="Working Hours" details1="Mon - Sat: 8:00 - 22:00" details2="Sun: Closed" icon={<FaRegClock />}/>
    </div>
  </div>
);

export default About;
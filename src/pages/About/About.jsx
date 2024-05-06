import React from 'react';

import classNames from 'classnames/bind';
import styles from './About.scss';
import { images } from '../../constants';
import CategoryPage from '../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const About = () => (
  <div className={cx('about-wrapper')}>
    <CategoryPage image={images.bg} pageTitle='About'/>
  </div>
);

export default About;
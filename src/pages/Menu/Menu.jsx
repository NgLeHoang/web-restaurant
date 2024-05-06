import React from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.scss';
import CategoryPage from '../../components/CategoryPage/CategoryPage';
import { images } from '../../constants';

const cx = classNames.bind(styles);

const Menu = () => (
  <div className={cx('menu-wrapper')}>
    <CategoryPage image={images.bg} pageTitle="Menu"/>
  </div>
);

export default Menu;
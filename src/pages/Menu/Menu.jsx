import React from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.scss';
import CategoryPage from '../../components/CategoryPage/CategoryPage';
import { images, data } from '../../constants';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu';

const cx = classNames.bind(styles);

const Menu = () => (
  <div className={cx('menu-wrapper')}>
    <CategoryPage image={images.bg} pageTitle="Menu"/>
    <CategoryMenu images={data.imagesCategoryMenu} />
  </div>
);

export default Menu;
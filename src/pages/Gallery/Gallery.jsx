import React from 'react';

import classNames from 'classnames/bind';
import styles from './Gallery.scss';
import Gallery from '../../container/Gallery/Gallery';
import { images } from '../../constants';
import CategoryPage from '../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const Gallary = () => (
  <div className={cx('gallery-page-wrapper')}>
    <CategoryPage image={images.bg} pageTitle='Gallery'/>
    <Gallery />
  </div>
);

export default Gallary;
import React from 'react';

import classNames from 'classnames/bind';
import styles from './Gallery.scss';
import GalleryItems from '../../components/GalleryItems/GalleryItems';
import { data } from '../../constants';

const cx = classNames.bind(styles);

const Gallery = () => (
  <div className={cx('gallery-wrapper')}>
    {data.imagesGallery.map((image, index) => (
      <GalleryItems key={image.images + index} image={image.images}/>
    ))}
  </div>
);

export default Gallery;

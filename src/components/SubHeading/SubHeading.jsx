import React from 'react';
import { images } from '../../constants';
import classNames from 'classnames/bind';
import styles from './SubHeading.scss';

const cx = classNames.bind(styles);

const SubHeading = ({ tilte }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className={cx('subheading-title')}>{tilte}</p>
    <img src={images.spoon} alt="spoon" className={cx('spoon-image')}/>
  </div>
);

export default SubHeading;

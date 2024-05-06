import React from 'react';

import classNames from 'classnames/bind';
import styles from './Address.scss';

const cx = classNames.bind(styles);

const Address = () => (
  <div className={cx('address-wrapper')}>
    <p className={cx('address-title')}>Pho Dalat Restaurant</p>
    <a href='https://maps.app.goo.gl/tNvaG5r5RR9MqR8S7' target="_blank" rel="noreferrer" className={cx('address-map')}>7758 W Tidwell Rd Ste 108, Houston, TX 77040, USA</a>
  </div>
);

export default Address;
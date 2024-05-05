import React from 'react';

import classNames from 'classnames/bind';
import styles from './MenuItem.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ titleEng, titleVn, price}) => (
  <div className={cx('menu-item')}> 
    <div className='menu-item-heading'>
      <div className={cx('menu-item-name')}>
        <p className='menu-item-title-name' style={{color: '#DCCA87'}}>{titleEng}</p>
      </div>
      <div className='menu-item-dash'></div>
      <div className={cx('menu-item-price')}>
        <p className='menu-item-title-price' style={{color: '#DCCA87'}}>{price}</p>
      </div>
    </div>

    <div className='menu-item-name-vn'>
      <p className='menu-item-sub'>{titleVn}</p>
    </div>
  </div>
);

export default MenuItem;

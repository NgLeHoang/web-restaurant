import React from 'react';

import classNames from 'classnames/bind';
import styles from './SpecialMenu.scss';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';

const cx = classNames.bind(styles);

const SpecialMenu = () => (
  <div className={cx('special-menu')} id='menu'>
    <div className={cx('special-menu-title')}>
      <SubHeading tilte='Menu That Fits You Palatte'/>
      <h1 className={cx('special-heading-title')}>The Best Seller's</h1>
    </div>
    <div className={cx('special-menu-details')}>
      <div className={cx('special-menu-pho')}>
        <p className={cx('special-menu-heading')}>Phở</p>
        <div className={cx('special-menu-items')}>
          {data.phoSpecial.map((pho, index) => (
            <MenuItem key={pho.titleEng + index} titleEng={pho.titleEng} titleVn={pho.titleVn} price={pho.price}/>
          ))}
        </div>
      </div>
      <div className={cx('special-menu-image')}>
          <img src={images.phobospecial} alt="menu" />
      </div>
      <div className={cx('special-menu-drink')}>
        <p className={cx('special-menu-heading')}>Rice Plates</p>
        <div className={cx('special-menu-items')}>
          {data.ricePlateSpecial.map((ricePlate, index) => (
            <MenuItem key={ricePlate.titleEng + index} titleEng={ricePlate.titleEng} titleVn={ricePlate.titleVn} price={ricePlate.price}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop: '16px'}}>
      <button className={cx('button-explore')}>View More</button>
    </div>
  </div>
);

export default SpecialMenu;

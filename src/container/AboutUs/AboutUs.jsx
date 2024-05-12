import React from 'react';

import classNames from 'classnames/bind';
import styles from './AboutUs.scss';

const cx = classNames.bind(styles);

const AboutUs = ({ title, details1, details2, icon}) => {
  const removeNonNumeric = (str) => {
    return str.replace(/\D/g, '');
  };

  const formattedDetails1 = removeNonNumeric(details1);

  const isPhoneTitle = (title) => {
    return title.toLowerCase() === "phone";
  };

  const isAddressTitle = (title) => {
    return title.toLowerCase() === "address";
  };

  return (
    <div className={cx('about-box')}>
      <p className={cx('about-title')}>{title}</p>
      {details1 && (
        <p className={cx('about-details')}>
          {isPhoneTitle(title) ? (
            <a href={`tel:${formattedDetails1}`}>{details1}</a>
          ) : isAddressTitle(title) ? (
            <a href="https://maps.app.goo.gl/tNvaG5r5RR9MqR8S7" target="_blank" rel="noreferrer">
              {details1}
            </a>
          ) : (
            details1
          )}
        </p>
      )}
      {details2 && <p className={cx('about-details')}>{details2}</p>}
      <div className={cx('about-icon-wrapper')}>
        {icon}
      </div>
    </div>
  );
};

export default AboutUs;

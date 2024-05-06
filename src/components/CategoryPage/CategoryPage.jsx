import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryPage.scss';

const cx = classNames.bind(styles);

const CategoryPage = ({pageTitle, image}) => {
    const [shadowStyle, setShadowStyle] = useState({});

    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const textShadow = `var(--color-golden) ${x - x+5}px ${y - y+5}px 2px`;
        setShadowStyle({ textShadow });
    };

    const handleMouseLeave = () => {
        setShadowStyle({});
    };

    return (
        <div className={cx('category-wrapper')}>
            <img src={image} alt="category page" />
            <div className='category-page-title' onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={shadowStyle}>
                <span>{pageTitle}</span>
            </div>
        </div>
    );
};

export default CategoryPage;
import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryPage.scss';

const cx = classNames.bind(styles);

const CategoryPage = ({pageTitle, image}) => {
    const [shadowStyle, setShadowStyle] = useState({});
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const textShadow = `var(--color-golden) ${x - x+5}px ${y - y+5}px 2px`;
        setShadowStyle({ textShadow });
    };

    const handleMouseLeave = () => {
        setShadowStyle({});
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrollingDown(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll); 

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    return (
        <div className={cx('category-wrapper')}>
            <div className={cx('category-page-image-wrapper')}>
                <img src={image} alt="category page" className={isScrollingDown ? 'scroll-down' : 'scroll-up'}/>
            </div>
            <div className='category-page-title' onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={shadowStyle}>
                <span>{pageTitle}</span>
            </div>
        </div>
    );
};

export default CategoryPage;
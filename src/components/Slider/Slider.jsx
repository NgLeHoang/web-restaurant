import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation} from 'swiper/modules';

import classNames from "classnames/bind";
import styles from './Slider.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Slider = ({ slides }) => {
    
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            grabCursor = {true}
            centeredSlides={true}
            loop = {true}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
            }}
            className={cx('slider-wrapper')}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.image} className={cx('slider-image-container')}>
                    <Link to={slide.url} reloadDocument>
                        <img src={slide.image} alt={slide.title} className={cx('slider-image')}/>
                        <p className={cx('image-title')}>{slide.title}</p>
                        <div className="image-overlay"></div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
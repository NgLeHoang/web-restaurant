import classNames from "classnames/bind";
import { FiFacebook, FiInstagram } from "react-icons/fi"
import styles from './Footer.scss';
import { images } from "../../../constants";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const Footer = () => {
    const [overlayHeight, setOverlayHeight] = useState(0);

    useEffect(() => {
        adjustOverlayHeight();
        window.addEventListener('resize', adjustOverlayHeight);
        return () => {
            window.removeEventListener('resize', adjustOverlayHeight);
        };
    }, []);

    const adjustOverlayHeight = () => {
        const footerLinksHeight = document.querySelector('.footer-links').clientHeight;
        setOverlayHeight(footerLinksHeight);
    };

    return (
        <div className={cx('footer-wrapper')}>
            <img src={images.bg} alt="bg footer" className={cx('footer-overlay')} style={{ height: overlayHeight }}/>
            <div className={cx('footer-links')}>
                <div className={cx('footer-links-contact')}>
                    <h1 className={cx('footer-heading')}>Contact Us</h1>
                    <p className={cx('footer-links-details')}>7758 W Tidwell Rd Ste 108, Houston, TX 77040, USA</p>
                    <p className={cx('footer-links-details')}>713.690.7508</p>
                </div>
                <div className={cx('footer-links-logo')}>
                    <img src={images.logo} alt="footer logo" />
                    <p className={cx('footer-logo-name')}>Pho Dalat Restaurant</p>
                    <p className={cx('footer-links-details')}>"The best way to find yourself is to lose yourself in the service of others."</p>
                    <img src={images.spoon} alt="footer spoon" className={cx('footer-spoon')}/>
                    <div className={cx('footer-links-icon')}>
                        <a href="https://www.facebook.com/PhoDaLatHouston" target="_blank" rel="noreferrer"><FiFacebook /></a>
                        <FiInstagram />
                    </div>
                </div>
                <div className={cx('footer-links-works')}>
                    <h1 className={cx('footer-heading')}>Working Hours</h1>
                    <p className={cx('footer-links-details')}>Monday - Saturday</p>
                    <p className={cx('footer-links-details')}>10:00 AM to 8:00 PM</p>
                    <p className={cx('footer-links-details')}>Sunday</p>
                    <p className={cx('footer-links-details')}>Closed</p>
                </div>
            </div>
            <div className={cx('footer-copyright')}>
                <p className={cx('footer-copyright-name')}>2024 Pho Dalat Restaurant. Designed by NLH.</p>
            </div>
        </div>
    );
};

export default Footer;
import classNames from "classnames/bind";
import { FiFacebook, FiInstagram } from "react-icons/fi"
import styles from './Footer.scss';
import { images } from "../../../constants";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const Footer = () => {
    const [overlayHeight, setOverlayHeight] = useState(700);

    useEffect(() => {
        const adjustOverlayHeight = () => {
            const footerLinksElement = document.querySelector('.footer-links');
            if (footerLinksElement) {
              const footerLinksHeight = footerLinksElement.clientHeight;
              setOverlayHeight(footerLinksHeight);
            }
        };

        adjustOverlayHeight();

        window.addEventListener('resize', adjustOverlayHeight);
        return () => {
            window.removeEventListener('resize', adjustOverlayHeight);
        };
    }, [overlayHeight]);

    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('footer-map')}>
                <iframe
                    title="Pho Dalat Restaurant"
                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.3995720478792!2d-95.506154!3d29.8527484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c58edf7cc75d%3A0x9eb60e24d3c2341a!2sPho%20Dalat!5e0!3m2!1svi!2s!4v1715223591811!5m2!1svi!2s"}
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
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
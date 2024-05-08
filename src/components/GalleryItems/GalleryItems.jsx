import classNames from "classnames/bind";
import styles from './GalleryItems.scss';

const cx = classNames.bind(styles);

const GalleryItems = ({ image }) => {
    return (
        <div className={cx('galery-items-wrapper')}>
            <img src={image} alt="gallery items" />
        </div>
    );
};

export default GalleryItems;
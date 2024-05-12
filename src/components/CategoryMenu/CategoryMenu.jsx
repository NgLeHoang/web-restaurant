import classNames from "classnames/bind";
import styles from './CategoryMenu.scss';

const cx = classNames.bind(styles);

const CategoryMenu = ({ images }) => (
    <div className={cx('category-menu-wrapper')}>
        {images.map((image) => (
            <div key={image.imageUrl} className={cx('category-menu-card')}>
                <img src={image.imageUrl} alt={image.title} />
                <p className={cx('category-menu-card-title')}>{image.title}</p>
                <div className="image-overlay"></div>
            </div>
        ))}
    </div>
);

export default CategoryMenu;
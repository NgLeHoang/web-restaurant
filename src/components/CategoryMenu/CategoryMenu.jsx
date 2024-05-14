import classNames from "classnames/bind";
import styles from './CategoryMenu.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CategoryMenu = ({ images }) => (
    <div className={cx('category-menu-wrapper')}>
        {images.map((image) => (
            <Link to={image.url} reloadDocument>
                <div key={image.imageUrl} className={cx('category-menu-card')}>
                    <img src={image.imageUrl} alt={image.title} />
                    <p className={cx('category-menu-card-title')}>{image.title}</p>
                    <div className="image-overlay"></div>
                </div>
            </Link>
        ))}
    </div>
);

export default CategoryMenu;
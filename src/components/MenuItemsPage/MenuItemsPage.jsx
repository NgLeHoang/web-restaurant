import classNames from "classnames/bind";
import styles from './MenuItemsPage.scss';

const cx = classNames.bind(styles);

const MenuItemsPage = ({ title, image }) => (
    <div className={cx('menu-items-page-wrapper')}>
        <p className={cx('menu-items-page-title')}>{title}</p>
        <div className={cx('menu-items-page-image')}>
            <img src={image} alt={title} />
        </div>
    </div>
);

export default MenuItemsPage;
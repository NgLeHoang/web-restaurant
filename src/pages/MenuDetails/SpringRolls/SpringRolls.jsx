import classNames from "classnames/bind";
import styles from './SpringRolls.scss';
import CategoryPage from "../../../components/CategoryPage/CategoryPage";
import { images, data } from "../../../constants";
import { MenuItem } from "../../../components";
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";

const cx = classNames.bind(styles);

const SpringRolls = () => (
    <div className={cx('spring-rolls-wrapper')}>
        <CategoryPage pageTitle="Menu Spring Rolls" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Spring Rolls" image={images.springroll}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageSpringRolls.map((springroll, index) => (
                    <MenuItem key={springroll.titleEng + index} titleEng={springroll.titleEng} titleVn={springroll.titleVn} price={springroll.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default SpringRolls;
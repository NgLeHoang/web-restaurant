import classNames from "classnames/bind";
import styles from './Beverage.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const Beverage = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Beverages" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Beverages" image={images.bevergate}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageBeverages.map((beverage, index) => (
                    <MenuItem key={beverage.titleEng + index} titleEng={beverage.titleEng} titleVn={beverage.titleVn} price={beverage.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default Beverage;
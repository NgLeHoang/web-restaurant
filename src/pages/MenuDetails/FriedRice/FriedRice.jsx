import classNames from "classnames/bind";
import styles from './FriedRice.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const FriedRice = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Fried Rice" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Fried Rice" image={images.friedrice}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageFriedRice.map((friedrice, index) => (
                    <MenuItem key={friedrice.titleEng + index} titleEng={friedrice.titleEng} titleVn={friedrice.titleVn} price={friedrice.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default FriedRice;
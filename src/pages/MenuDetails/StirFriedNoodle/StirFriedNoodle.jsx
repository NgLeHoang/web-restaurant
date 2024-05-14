import classNames from "classnames/bind";
import styles from './StirFriedNoodle.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const StirFriedNoodle = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Stir-Fried Noodles" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Stir-Fried Noodles" image={images.friednoodle}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageStirFriedNoodles.map((friednoodle, index) => (
                    <MenuItem key={friednoodle.titleEng + index} titleEng={friednoodle.titleEng} titleVn={friednoodle.titleVn} price={friednoodle.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default StirFriedNoodle;
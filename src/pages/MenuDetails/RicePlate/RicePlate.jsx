import classNames from "classnames/bind";
import styles from './RicePlate.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const RicePlate = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Rice Plates" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Rice Plates" image={images.riceplate}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsRicePlates.map((riceplate, index) => (
                    <MenuItem key={riceplate.titleEng + index} titleEng={riceplate.titleEng} titleVn={riceplate.titleVn} price={riceplate.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default RicePlate;
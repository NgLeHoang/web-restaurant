import classNames from "classnames/bind";
import styles from './NoodleSoup.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const NoodleSoup = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Noodles Soup" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Noodles Soup" image={images.noodlesoup}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageNoodlesSoup.map((noodlesoup, index) => (
                    <MenuItem key={noodlesoup.titleEng + index} titleEng={noodlesoup.titleEng} titleVn={noodlesoup.titleVn} price={noodlesoup.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default NoodleSoup;
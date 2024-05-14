import classNames from "classnames/bind";
import styles from './RiceVermicelliBowl.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const RiceVermicelliBowl = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Rice Vermicelli Bowls" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Rice Vermicelli Bowls" image={images.ricevermicellibowl}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageRiceVermiccelliBowls.map((rice, index) => (
                    <MenuItem key={rice.titleEng + index} titleEng={rice.titleEng} titleVn={rice.titleVn} price={rice.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default RiceVermicelliBowl;
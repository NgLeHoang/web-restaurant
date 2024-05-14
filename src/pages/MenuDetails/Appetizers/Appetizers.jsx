import classNames from "classnames/bind";
import styles from './Appetizers.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const Appetizers = () => (
    <div className={cx('appetizers-wrapper')}>
        <CategoryPage pageTitle="Menu Appetizers" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Appetizers" image={images.appetizer}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageAppetizers.map((appetizer, index) => (
                    <MenuItem key={appetizer.titleEng + index} titleEng={appetizer.titleEng} titleVn={appetizer.titleVn} price={appetizer.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default Appetizers;
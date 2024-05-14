import classNames from "classnames/bind";
import styles from './FamilySize.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const FamilySize = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Family Size" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Family Size" image={images.familysize}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPageFamilySize.map((familysize, index) => (
                    <MenuItem key={familysize.titleEng + index} titleEng={familysize.titleEng} titleVn={familysize.titleVn} price={familysize.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default FamilySize;
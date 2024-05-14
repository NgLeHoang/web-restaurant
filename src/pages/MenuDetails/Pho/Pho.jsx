import classNames from "classnames/bind";
import styles from './Pho.scss';
import { data, images } from "../../../constants";
import { MenuItem } from '../../../components'
import MenuItemsPage from "../../../components/MenuItemsPage/MenuItemsPage";
import CategoryPage from '../../../components/CategoryPage/CategoryPage';

const cx = classNames.bind(styles);

const Pho = () => (
    <div className={cx('fried-rice-wrapper')}>
        <CategoryPage pageTitle="Menu Phở" image={images.bg}/>
        <div className={cx('menu-items-page-container')}>
            <MenuItemsPage title="Phở" image={images.phoCategory}/>
            <div className={cx('menu-items-page-details')}>
                {data.menuItemsPagePho.map((pho, index) => (
                    <MenuItem key={pho.titleEng + index} titleEng={pho.titleEng} titleVn={pho.titleVn} price={pho.price}/>
                ))}
            </div>
        </div>
    </div>
);

export default Pho;
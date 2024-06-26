import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

import styles from './Home.scss';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import config from '../../config';
import SpecialMenu from "../../container/Menu/SpecialMenu";
import Address from "../../container/Address/Address";
import Slider from "../../components/Slider/Slider";

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('home-row')}>
                <div className={cx('home-info')}>
                    <SubHeading tilte='Pho Dalat Restaurant'/>
                    <h1 className={cx('home-header-title')}>The Best Restaurant In Houston</h1>
                    <p className={cx('home-header-details')}>Pho Dalat Restaurant is a restaurant with Vietnamese-style dishes and drinks, promising to bring great flavors for customers to enjoy. Our menu is very diverse, please explore it.</p>
                    <button className={cx('button-explore')}><Link to={config.routes.menu} reloadDocument>Explore Menu</Link></button>
                </div>

                <div className={cx('home-image')}>
                    <img src={images.homeimage}
                     alt="home"
                     />
                </div>
            </div>
            <Address />
            <SpecialMenu />
            <div className={cx('category-container')}>
                <div className={cx('category-heading')}>
                    <h1 className={cx('category-title')}>Category Menu</h1>
                    <div className={cx('category-dash')}></div>
                </div>
                <Slider slides={data.imagesCategory}/>
            </div>
        </div>
    );
};

export default Home;
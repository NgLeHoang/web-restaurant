import classNames from "classnames/bind";
import { NavLink } from 'react-router-dom';

import styles from './Home.scss';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import config from '../../config';
import SpecialMenu from "../../container/Menu/SpecialMenu";
import Address from "../../container/Address/Address";

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('home-row')}>
                <div className={cx('home-info')}>
                    <SubHeading tilte='Pho Dalat Restaurant'/>
                    <h1 className={cx('home-header-title')}>The Best Restaurant In Houston</h1>
                    <p className={cx('home-header-details')}>Pho Dalat Restaurant is a restaurant with Vietnamese-style dishes and drinks, promising to bring great flavors for customers to enjoy. Our menu is very diverse, please explore it.</p>
                    <button className={cx('button-explore')}><NavLink to={config.routes.menu} end>Explore Menu</NavLink></button>
                </div>

                <div className={cx('home-image')}>
                    <img src={images.homeimage}
                     alt="home"
                     />
                </div>
            </div>
            <Address />
            <SpecialMenu />
        </div>
    );
};

export default Home;
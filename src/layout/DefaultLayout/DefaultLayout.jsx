import Navbar from '../components/Navbar/Navbar'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.scss';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => (
    <div className={cx('wrapper')}>
        <Navbar />
        <div className={cx('container')}>
            <div className={cx('content')}>{children}</div>
        </div>
        <Footer />
    </div>
);

export default DefaultLayout;
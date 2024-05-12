import classNames from "classnames/bind";
import styles from './Contact.scss';
import CategoryPage from "../../components/CategoryPage/CategoryPage";
import { images } from "../../constants";

const cx = classNames.bind(styles);

const Contact = () => (
  <div className={cx('contact-page-wrapper')}>
    <CategoryPage image={images.bg} pageTitle="Contact"/>
  </div>
);

export default Contact;
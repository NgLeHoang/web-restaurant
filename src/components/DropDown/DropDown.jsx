import classNames from "classnames/bind";
import styles from './DropDown.scss';
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const DropDown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };

    return (
        <span 
            className={cx('dropdown-wrapper')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title}
            {isOpen && (
                <ul className="dropdown-menu">
                {items.map((item, index) => (
                    <li key={index} className="dropdown-item">
                    <Link to={item.url} reloadDocument><p>{item.label}</p></Link>
                    </li>
                ))}
                </ul>
            )}
        </span>
    );
};

export default DropDown;
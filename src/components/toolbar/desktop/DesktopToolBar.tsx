import { NavLink } from "react-router-dom";
import { RiSearchFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./DesktopToolBar.module.css";

const DesktopToolBar = () => {
  return (
    <header className={styles.container}>
      <NavLink to={"/"}>
        <h2 className={styles.logo}>LOGOHUB</h2>
      </NavLink>
      <nav className={styles.navigationContainer}>
        <NavLink to={"/"}>
          <p>Каталог</p>
        </NavLink>

        <NavLink to={"/"}>
          <p>О нас</p>
        </NavLink>

        <NavLink to={"/"}>
          <p>FAQ</p>
        </NavLink>

        <NavLink to={"/"}>
          <p>Контакты</p>
        </NavLink>
      </nav>

      <div className={styles.imagesContainer}>
        <NavLink to={"/"}>
          <RiSearchFill />
        </NavLink>

        <NavLink to={"/"}>
          <FaBookmark />
        </NavLink>

        <NavLink to={"/"}>
          <FaUser />
        </NavLink>

        <NavLink to={"/"}>
          <FaShoppingCart />
        </NavLink>
      </div>
    </header>
  );
};

export default DesktopToolBar;

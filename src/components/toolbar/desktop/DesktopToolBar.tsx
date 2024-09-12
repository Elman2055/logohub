import { NavLink } from "react-router-dom";
import search from "../../../../public/search.png";
import favourites from "../../../../public/favourites.png";
import user from "../../../../public/user.png";
import cart from "../../../../public/cart.png";
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
          <img src={search} alt="search" />
        </NavLink>

        <NavLink to={"/"}>
          <img src={favourites} alt="favourites" />
        </NavLink>

        <NavLink to={"/"}>
          <img src={user} alt="user" />
        </NavLink>

        <NavLink to={"/"}>
          <img src={cart} alt="cart" />
        </NavLink>
      </div>
    </header>
  );
};

export default DesktopToolBar;

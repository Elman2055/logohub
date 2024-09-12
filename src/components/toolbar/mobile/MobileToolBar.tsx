import { NavLink } from "react-router-dom";
import sideBtn from "../../../../public/sideButton.png";
import search from "../../../../public/search.png";
import user from "../../../../public/user.png";
import cart from "../../../../public/cart.png";
import styles from "./MobileToolBar.module.css";
import { useState } from "react";

const MobileToolBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.side}>
          <img
            src={sideBtn}
            alt="side button"
            className={styles.sideBtnImage}
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavLink to={"/"}>
            <h3 className={styles.logoText}>LOGOHUB</h3>
          </NavLink>
        </div>
        <nav className={styles.mobileNavigation}>
          <NavLink to={"/"}>
            <img src={search} alt="search" />
          </NavLink>
          <NavLink to={"/"}>
            <img src={user} alt="user" />
          </NavLink>
          <NavLink to={"/"}>
            <img src={cart} alt="cart" />
          </NavLink>
        </nav>
      </header>
      <div
        className={`${styles.sidebarWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <ul className={styles.navList}>
          <div className={styles.sideBtns}>
            <button className={styles.sideBtn}>Вход</button>
            <button className={`${styles.sideBtn} ${styles.registerBtn}`}>
              Регистрация
            </button>
          </div>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to={"/"}>Каталог</NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to={"/contacts"}>FAQ</NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to={"/"}>О нас</NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to={"/"}>Контакты</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileToolBar;

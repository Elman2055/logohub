import { NavLink } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiSearchFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./MobileToolBar.module.css";
import { useState } from "react";

const MobileToolBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.side}>
          <HiMiniBars3CenterLeft onClick={() => setIsOpen(!isOpen)} />
          <NavLink to={"/"}>
            <h3 className={styles.logoText}>LOGOHUB</h3>
          </NavLink>
        </div>
        <nav className={styles.mobileNavigation}>
          <NavLink to={"/"}>
            <RiSearchFill />
          </NavLink>
          <NavLink to={"/"}>
            <FaUser />
          </NavLink>
          <NavLink to={"/"}>
            <FaShoppingCart />
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
            <NavLink to={"/catalog/Все"}>Каталог</NavLink>
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

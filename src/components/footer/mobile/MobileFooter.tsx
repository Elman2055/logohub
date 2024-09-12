import logo from "../../../../public/footerLogo.png";
import styles from "./MobileFooter.module.css";

const MobileFooter = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.formBlock}>
            <h3 className={styles.title}>
              Остались вопросы? Мы <br /> готовы помочь!
            </h3>
            <input type="text" placeholder="*Имя" />
            <input type="tel" placeholder="*Телефон" />
            <input type="email" placeholder="Почта" />
            <input type="text" placeholder="Комментарий" />
            <button className={styles.sendBtn}>Отправить</button>
            <div className={styles.checkContainer}>
              <input type="checkbox" />
              <p>
                Нажимая на кнопку «Отправить», вы соглашаетесь <br /> с
                Политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p>
          Lorem ipsum dolor sit amet consectetur. Massa et egestas amet
          scelerisque amet et arcu
        </p>
        <h3 className={styles.email}>logohub.main@mail.com</h3>
        <div className={styles.gridContainer}>
          {["WhatsApp", "Telegram", "Instagram", "Facebook"].map(
            (el, index) => (
              <button key={index} className={styles.socialBtns}>
                {el}
              </button>
            )
          )}
        </div>
        <div className={styles.downNav}>
          <p>© Copyright 2024 Logohub</p>
          <a href="" target="_blank">
            <p>Политика конфиденциальности</p>
          </a>
          <p
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={styles.uptext}
          >
            Вернуться наверх
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;

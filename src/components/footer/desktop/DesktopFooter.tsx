import logo from "../../../../public/footerLogo.png";
import styles from "./DesktopFooter.module.css";

const DesktopFooter = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.formBlock}>
            <h3 className={styles.title}>
              Остались вопросы? <br /> Мы готовы помочь!
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
          <div className={styles.email}>
            <p>Или напишите на нашу почту:</p>
            <h3>logohub.main@mail.com</h3>
          </div>
        </div>
      </div>
      <div className={styles.downContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.downBlock}>
          <p className={styles.downTitle}>
            Lorem ipsum dolor sit amet consectetur. Massa et egestas amet
            scelerisque amet et arcu. Varius augue nullam a condimentum nunc
            amet.
          </p>
          <div>
            <h3 className={styles.downEmail}>logohub.main@mail.com</h3>
            {["WhatsApp", "Telegram", "Instagram", "Facebook"].map(
              (el, index) => (
                <button key={index} className={styles.socialBtns}>
                  {el}
                </button>
              )
            )}
          </div>
        </div>
        <div className={styles.downNav}>
          <p>© Copyright 2024 Logohub</p>
          <a href="" target="_blank">
            <p>Политика конфиденциальности</p>
          </a>
          <p
            className={styles.uptext}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Вернуться наверх
          </p>
        </div>
      </div>
    </>
  );
};

export default DesktopFooter;

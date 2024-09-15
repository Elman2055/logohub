import { ChangeEvent, useEffect, useState } from "react";
import logo from "../../../../public/footerLogo.png";
import styles from "./DesktopFooter.module.css";

const DesktopFooter = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    tel: "",
    email: "",
    commit: "",
  });

  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { name, tel, email } = userInfo;
    if (
      name.trim() !== "" &&
      tel.trim() !== "" &&
      email.trim() !== "" &&
      isChecked
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [userInfo, isChecked]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.formBlock}>
            <h3 className={styles.title}>
              Остались вопросы? <br /> Мы готовы помочь!
            </h3>
            <input
              type="text"
              placeholder="*Имя"
              onChange={handleInputChange}
              name="name"
              value={userInfo.name}
            />
            <input
              type="tel"
              placeholder="*Телефон"
              onChange={handleInputChange}
              name="tel"
              value={userInfo.tel}
            />
            <input
              type="email"
              placeholder="Почта"
              onChange={handleInputChange}
              name="email"
              value={userInfo.email}
            />
            <input
              type="text"
              placeholder="Комментарий"
              onChange={handleInputChange}
              name="commit"
              value={userInfo.commit}
            />
            <button
              className={`${styles.sendBtn} ${
                !isButtonActive ? styles.notActive : ""
              }`}
              disabled={!isButtonActive}
            >
              Отправить
            </button>
            <div className={styles.checkContainer}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}></span>
                <p>
                  Нажимая на кнопку «Отправить», вы соглашаетесь <br /> с
                  Политикой конфиденциальности
                </p>
              </label>
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

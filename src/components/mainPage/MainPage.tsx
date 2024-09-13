import { useEffect, useState } from "react";
import { TMain } from "../../types/types.data";
import Carousel from "../ui/slider/Slider";
import first from "../../../public/firstColImage.png";
import second from "../../../public/secondColImage.png";
import third from "../../../public/thirdColIMage.png";
import four from "../../../public/fourColImage.png";
import five from "../../../public/fiveColImage.png";
import six from "../../../public/six.png";
import { infoBlock } from "./MainData";
import styles from "./MainPage.module.css";

const MainPage = ({
  mainProduct,
  sliderSaleProducts,
  sliderNewProducts,
  sliderExclusiveProducts,
}: TMain) => {
  const [currentSlider, setCurrentSlider] = useState(sliderSaleProducts);
  const [activeButton, setActiveButton] = useState<string>("Скидки");

  useEffect(() => {
    if (sliderSaleProducts) {
      setCurrentSlider(sliderSaleProducts);
    }
  }, [sliderSaleProducts]);

  return (
    <>
      <div className={styles.mainBg}>
        <div className={styles.container}>
          <div className={styles.mainBlock}>
            <div className={styles.leftBlockBg}>
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur{" "}
                <br />
                feugiat luctus dui eros. Dolor sed sed aliquet eu pretium
              </p>
              <button className={styles.mainBtn}>Узнать больше</button>
            </div>
            {mainProduct.map((el) => (
              <div key={el.product_id} className={styles.rightBlock}>
                <img
                  src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
                  alt="product"
                />
                <p className={styles.title}>{el.title}</p>
                <p className={styles.description}>{el.description}</p>
                <div className={styles.prriceBlock}>
                  {el.old_price ? (
                    <p className={styles.oldPrice}>{el.old_price} тг</p>
                  ) : (
                    <></>
                  )}
                  <p>{el.price} тг</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sliderTitleContainer}>
          <h2 className={styles.titleSlider}>Лучшие предложения</h2>
          <>
            {[
              { slider: sliderSaleProducts, sliderText: "Скидки" },
              { slider: sliderNewProducts, sliderText: "Новые" },
              { slider: sliderExclusiveProducts, sliderText: "Эксклюзивныe" },
            ].map((el, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlider(el.slider);
                  setActiveButton(el.sliderText);
                }}
                className={`${styles.sliderBtns} ${
                  activeButton === el.sliderText ? styles.activeBtn : ""
                }`}
              >
                {el.sliderText}
              </button>
            ))}
          </>
        </div>
        <Carousel productSlider={currentSlider} />
      </div>
      <div className={styles.mainBgWrapper}>
        <div className={styles.container}>
          <div className={styles.mainTextContainer}>
            <h2 className={styles.mainUpText}>Узнайте нас</h2>
            <h4 className={styles.mainDownText}>Наш путь и ценности</h4>
          </div>

          {infoBlock.map((el) => (
            <div
              key={el.id}
              className={`${styles.infoBlock} ${
                el.id === 2 ? styles.infoEndBlock : ""
              }`}
            >
              <div className={styles.firstCol}>
                <h3 className={styles.infoTitle}>{el.title}</h3>
                <p className={styles.infoDescription}>{el.description}</p>
                <img src={el.image1} alt="info picture" />
              </div>
              <div className={styles.secondCol}>
                <img src={el.image2} alt="info picture" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;

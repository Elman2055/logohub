import { useEffect, useState } from "react";
import { TMain } from "../../types/types.data";
import Carousel from "../ui/slider/Slider";
import { answersBlock, infoBlock } from "./MainData";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import useDesktop from "../../hooks/useDesktop";
import styles from "./MainPage.module.css";

const MainPage = ({
  mainProduct,
  sliderSaleProducts,
  sliderNewProducts,
  sliderExclusiveProducts,
}: TMain) => {
  const isDesktop = useDesktop();

  const [currentSlider, setCurrentSlider] = useState(sliderSaleProducts);
  const [activeButton, setActiveButton] = useState<string>("Скидки");
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);

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
              <p className={styles.leftDescription}>
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
                <div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sliderTitleContainer}>
          <h2 className={styles.titleSlider}>Лучшие предложения</h2>
          <div>
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
          </div>
        </div>
        {isDesktop ? (
          <Carousel productSlider={currentSlider} cartCurrent={4.5} />
        ) : (
          <Carousel
            productSlider={currentSlider}
            cartCurrent={1.5}
            mobileCurrent={1}
          />
        )}
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
                {isDesktop && <img src={el.image1} alt="info picture" />}
              </div>
              <div className={styles.secondCol}>
                {!isDesktop && <img src={el.image1} alt="info picture" />}
                <img
                  src={el.image2}
                  alt="info picture"
                  className={styles.mobileInfoImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.downMainBg}>
        <div className={styles.container}>
          <div className={`${styles.mainBlock} ${styles.mobileMain}`}>
            <div className={`${styles.leftBlockBg} ${styles.downLeftBlockBg}`}>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p className={styles.descriptionDown}>
                Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur
                feugiat <br /> luctus dui eros. Dolor sed sed aliquet eu pretium
              </p>
              {isDesktop && (
                <button className={styles.mainBtn}>Узнать больше</button>
              )}
            </div>
            {mainProduct.map((el) => (
              <img
                key={el.product_id}
                src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
                alt="product"
                className={styles.productImage}
              />
            ))}
            {!isDesktop && (
              <button className={`${styles.mainBtn} ${styles.mobileMainBtn}`}>
                Узнать больше
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {isDesktop ? (
          <Carousel
            productSlider={currentSlider}
            cartCurrent={3.5}
            isOnlyImages={true}
          />
        ) : (
          <Carousel
            productSlider={currentSlider}
            cartCurrent={1.5}
            mobileCurrent={1}
            isOnlyImages={true}
          />
        )}

        <div className={styles.answersBlock}>
          <h3>Часто задаваемые вопросы</h3>
          {answersBlock.map((el) => (
            <div key={el.id} className={styles.infoTextBlock}>
              <div className={styles.questionBlock}>
                <h4>{el.question}</h4>
                {openedQuestion === el.id ? (
                  <FaMinus
                    onClick={() =>
                      setOpenedQuestion(openedQuestion === el.id ? null : el.id)
                    }
                  />
                ) : (
                  <FaPlus
                    onClick={() =>
                      setOpenedQuestion(openedQuestion === el.id ? null : el.id)
                    }
                  />
                )}
              </div>
              {openedQuestion === el.id && (
                <p className={styles.answer}>{el.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;

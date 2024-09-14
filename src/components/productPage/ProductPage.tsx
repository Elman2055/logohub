import { useState } from "react";
import { TMain } from "../../types/types.data";
import { FaBookmark } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import Carousel from "../ui/slider/Slider";
import useDesktop from "../../hooks/useDesktop";
import styles from "./ProductPage.module.css";

const ProductPage = ({
  mainProduct,
  sliderSaleProducts,
  sliderNewProducts,
  sliderExclusiveProducts,
}: TMain) => {
  const isDesktop = useDesktop();

  const [activeTab, setActiveTab] = useState<string>("description");
  const [tabContent, setTabContent] = useState<string>(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  );
  const [currentSlider, setCurrentSlider] = useState(sliderSaleProducts);
  const [activeButton, setActiveButton] = useState<string>("Скидки");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "description") {
      setTabContent(
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      );
    } else if (tab === "howItWorks") {
      setTabContent(
        "Magni vitae consectetur dicta! Quisquam magni libero vitae sunt at. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      );
    }
  };

  return (
    <div className={styles.container}>
      {mainProduct.map((el) => (
        <div key={el.product_id} className={styles.productBlock}>
          <img
            src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
            alt="product"
            className={styles.productImage}
          />
          <div>
            <h3 className={styles.title}>{el.title}</h3>
            <p className={styles.description}>{el.description}</p>
            <div className={styles.priceAndFeedback}>
              <div className={styles.priceBlock}>
                {el.old_price && (
                  <p className={styles.oldPrice}>{el.old_price}тг</p>
                )}
                <p>{el.price}тг</p>
              </div>
              <p className={styles.feedbackCol}>
                4.8 <MdStars /> <span>(16 оценок)</span>
              </p>
            </div>
            <button className={styles.buyBtn}>Купить</button>
            <div className={styles.reserveBtns}>
              <button className={styles.reserveBtn}>
                <FaBookmark />
              </button>
              <button className={styles.reserveBtn}>В Корзину</button>
            </div>
            <div className={styles.tabsContainer}>
              <button
                className={`${styles.tab} ${
                  activeTab === "description" ? styles.activeTab : ""
                }`}
                onClick={() => handleTabClick("description")}
              >
                Описание
              </button>
              <button
                className={`${styles.tab} ${
                  activeTab === "howItWorks" ? styles.activeTab : ""
                }`}
                onClick={() => handleTabClick("howItWorks")}
              >
                Как это работает?
              </button>
            </div>
            <div className={styles.tabContent}>{tabContent}</div>
          </div>
        </div>
      ))}
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
  );
};

export default ProductPage;

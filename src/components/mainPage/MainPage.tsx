import { useEffect, useState } from "react";
import { TMain } from "../../types/types.data";
import styles from "./MainPage.module.css";

const MainPage = ({
  mainProduct,
  sliderSaleProducts,
  sliderNewProducts,
  sliderExclusiveProducts,
}: TMain) => {

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
      
    </>
  );
};

export default MainPage;

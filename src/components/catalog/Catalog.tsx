import { categoryBlock } from "./CatalogData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Catalog.module.css";
import { TProduct } from "../../types/types.data";

const Catalog = ({ products }: { products: TProduct[] }) => {
  const navigate = useNavigate();
  const [catalog, setCatalog] = useState<string>("Все");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Корпоративные</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur <br />{" "}
          feugiat luctus dui eros. Dolor sed sed aliquet eu pretium
        </p>
      </div>
      <div className={styles.catalogBtnsContainer}>
        {categoryBlock.map((el) => (
          <button
            key={el.id}
            onClick={() => {
              setCatalog(el.category);
              navigate({ pathname: `/catalog/${el.category}` });
            }}
            className={`${styles.catalogBtn} ${
              catalog === el.category ? styles.activeBtn : ""
            }`}
          >
            {el.category}
          </button>
        ))}
      </div>

      <div className={styles.gridContainer}>
        {products.map((el) => (
          <Link key={el.product_id} to={`/product/${el.product_id}`}>
            <div className={styles.linkImagesContainer}>
              <img
                src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
                alt="product"
                className={styles.linkImage}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
              <div className={styles.btnContainer}>
                <button onClick={(e) => e.preventDefault()}>Купить</button>
                <button onClick={(e) => e.preventDefault()}>В Корзину</button>
              </div>
            </div>
            <h3 className={styles.title}>{el.title}</h3>
            <>
              <p className={styles.description}>{el.description}</p>
              <div className={styles.priceBlock}>
                {el.old_price && (
                  <p className={styles.oldPrice}>{el.old_price}тг</p>
                )}
                <p>{el.price}тг</p>
              </div>
            </>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

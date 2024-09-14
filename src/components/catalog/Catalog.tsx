import { categoryBlock } from "./CatalogData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { TCatalog } from "../../types/types.data";
import useDesktop from "../../hooks/useDesktop";
import styles from "./Catalog.module.css";

const Catalog = ({
  products,
  title,
  totalPages,
  currentPage,
  setCurrentPage,
}: TCatalog) => {
  const navigate = useNavigate();
  const isDesktop = useDesktop();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p className={styles.descriptionCatalog}>
          Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur{" "}
          {isDesktop ? <br /> : <></>}
          feugiat luctus dui eros. Dolor sed sed aliquet eu pretium
        </p>
      </div>
      <div className={styles.catalogBtnsContainer}>
        {categoryBlock.map((el) => (
          <button
            key={el.id}
            onClick={() => {
              navigate({ pathname: `/catalog/${el.category}` });
            }}
            className={`${styles.catalogBtn} ${
              title === el.category ? styles.activeBtn : ""
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
              {isDesktop && (
                <div className={styles.btnContainer}>
                  <button onClick={(e) => e.preventDefault()}>Купить</button>
                  <button onClick={(e) => e.preventDefault()}>В Корзину</button>
                </div>
              )}
            </div>
            <h3 className={styles.title}>{el.title}</h3>
            <p className={styles.description}>{el.description}</p>
            <div className={styles.priceBlock}>
              {el.old_price && (
                <p className={styles.oldPrice}>{el.old_price}тг</p>
              )}
              <p>{el.price}тг</p>
            </div>
            {!isDesktop && (
              <div className={styles.mobileBtns}>
                <button>Купить</button>
                <button>В Корзину</button>
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className={styles.pagination}>
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            size={isDesktop ? "large" : "medium"}
            shape="rounded"
            onChange={(event, value) => {
              setCurrentPage(value);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            variant="outlined"
          />
        )}
      </div>
    </div>
  );
};

export default Catalog;

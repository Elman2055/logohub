import { useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { TProduct } from "../../../types/types.data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import styles from "./Slider.module.css";

const Carousel = ({ productSlider }: { productSlider: TProduct[] }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
    arrows: false,
  };

  return (
    <Box sx={{ width: "100%", textAlign: "left", margin: "40px 0" }}>
      <Slider ref={sliderRef} {...settings}>
        {productSlider.map((item) => (
          <Link
            key={item.product_id}
            to={`/product/${item.product_id}`}
            className={styles.link}
          >
            <div className={styles.linkImagesContainer}>
              <img
                src={`https://logohub.kz/api/products/previewImage/${item.image_preview}`}
                alt={item.title}
                className={styles.linkImage}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
              <div className={styles.btnContainer}>
                <button onClick={(e) => e.preventDefault()}>Купить</button>
                <button onClick={(e) => e.preventDefault()}>В Корзину</button>
              </div>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.priceBlock}>
              {item.old_price ? (
                <p className={styles.oldPrice}>{item.old_price}тг</p>
              ) : (
                <></>
              )}
              <p>{item.price}тг</p>
            </div>
          </Link>
        ))}
      </Slider>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <button
          className={styles.sliderBtn}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <GrFormPrevious />
        </button>
        <button
          className={styles.sliderBtn}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <GrFormNext />
        </button>
      </Box>
    </Box>
  );
};

export default Carousel;

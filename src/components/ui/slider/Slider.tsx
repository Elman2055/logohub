import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { TSlider } from "../../../types/types.data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import styles from "./Slider.module.css";

const Carousel = ({
  productSlider,
  cartCurrent,
  isOnlyImages,
  mobileCurrent,
}: TSlider) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: cartCurrent,
    slidesToScroll: mobileCurrent ? mobileCurrent : cartCurrent,
    arrows: false,
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaX < 0) {
      sliderRef.current?.slickPrev();
    } else {
      sliderRef.current?.slickNext();
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [productSlider]);

  return (
    <Box
      sx={{ width: "100%", textAlign: "left", margin: "40px 0" }}
      onWheel={handleWheel}
    >
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
              {!isOnlyImages && !mobileCurrent && (
                <div className={styles.btnContainer}>
                  <button onClick={(e) => e.preventDefault()}>Купить</button>
                  <button onClick={(e) => e.preventDefault()}>В Корзину</button>
                </div>
              )}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            {!isOnlyImages && (
              <>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.priceBlock}>
                  {item.old_price ? (
                    <p className={styles.oldPrice}>{item.old_price}тг</p>
                  ) : (
                    <></>
                  )}
                  <p>{item.price}тг</p>
                </div>
                {mobileCurrent && (
                  <div className={styles.mobileBtns}>
                    <button>Купить</button>
                    <button>В Корзину</button>
                  </div>
                )}
              </>
            )}
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
        {!mobileCurrent && (
          <>
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
          </>
        )}
      </Box>
    </Box>
  );
};

export default Carousel;

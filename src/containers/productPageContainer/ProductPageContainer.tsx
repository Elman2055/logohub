import ProductPage from "../../components/productPage/ProductPage";
import {
  useGetProductQuery,
  useGetProductsMutation,
} from "../../store/logohubApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/types.data";
import styles from "./ProductPageContainer.module.css";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { data } = useGetProductQuery(Number(id));
  const [products] = useGetProductsMutation();

  const [sliderSaleProducts, setSliderSaleProducts] = useState<TProduct[]>([]);
  const [sliderNewProducts, setSliderNewProducts] = useState<TProduct[]>([]);
  const [sliderExclusiveProducts, setSliderExclusiveProducts] = useState<
    TProduct[]
  >([]);

  const [product, setProduct] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const { data } = await products("");
    if (data) {
      setSliderSaleProducts(data.items.slice(0, 8));
      setSliderNewProducts(data.items.slice(8, 16));
      setSliderExclusiveProducts(data.items.slice(4, 12));
    }
  };

  useEffect(() => {
    if (data) {
      setProduct(data.product);
    }
    getProducts();
  }, [data]);

  return (
    <>
      {sliderSaleProducts.length > 0 && (
        <ProductPage
          mainProduct={product}
          sliderSaleProducts={sliderSaleProducts}
          sliderNewProducts={sliderNewProducts}
          sliderExclusiveProducts={sliderExclusiveProducts}
        />
      )}
    </>
  );
};

export default ProductPageContainer;

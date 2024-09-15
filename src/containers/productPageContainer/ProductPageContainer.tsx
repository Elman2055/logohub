import ProductPage from "../../components/productPage/ProductPage";
import {
  useGetProductQuery,
  useGetProductsMutation,
} from "../../store/logohubApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/types.data";
import Loader from "../../components/ui/loader/Loader";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { data, isLoading: productsLoader } = useGetProductQuery(Number(id));
  const [products, { isLoading }] = useGetProductsMutation();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);

  return (
    <>
      <Loader isOpen={productsLoader || isLoading} />
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

import { useEffect, useState } from "react";
import MainPage from "../../components/mainPage/MainPage";
import { useGetProductsMutation } from "../../store/logohubApi";
import { TProduct } from "../../types/types.data";
import Loader from "../../components/ui/loader/Loader";

const MainPageContainer = () => {
  const [mainProduct, setMainProduct] = useState<TProduct[]>([]);
  const [sliderSaleProducts, setSliderSaleProducts] = useState<TProduct[]>([]);
  const [sliderNewProducts, setSliderNewProducts] = useState<TProduct[]>([]);
  const [sliderExclusiveProducts, setSliderExclusiveProducts] = useState<
    TProduct[]
  >([]);

  const [getProduct, { isLoading }] = useGetProductsMutation();

  const getProducts = async () => {
    const { data } = await getProduct("");
    if (data) {
      setMainProduct(data.items.slice(0, 1));
      setSliderSaleProducts(data.items.slice(0, 8));
      setSliderNewProducts(data.items.slice(8, 16));
      setSliderExclusiveProducts(data.items.slice(4, 12));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Loader isOpen={isLoading} />
      <MainPage
        mainProduct={mainProduct}
        sliderSaleProducts={sliderSaleProducts}
        sliderNewProducts={sliderNewProducts}
        sliderExclusiveProducts={sliderExclusiveProducts}
      />
    </>
  );
};

export default MainPageContainer;

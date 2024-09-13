export type TProduct = {
  product_id: number;
  title: string;
  old_price: string | null;
  price: string;
  description: string;
  image_preview: string;
  category: string;
};

export type TMain = {
  mainProduct: TProduct[];
  sliderSaleProducts: TProduct[];
  sliderNewProducts: TProduct[];
  sliderExclusiveProducts: TProduct[];
};

export type TSlider = {
  productSlider: TProduct[];
  cartCurrent: number;
  isOnlyImages?: boolean;
};

import Catalog from "../../components/catalog/Catalog";
import { useGetProductsMutation } from "../../store/logohubApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/types.data";
import { categoryMapping } from "../../components/catalog/CatalogData";
import styles from "./CatalogContainer.module.css";

const CatalogContainer = () => {
  const { id } = useParams();
  const [allProducts] = useGetProductsMutation();
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    if (id) {
      const mappedCategory = categoryMapping[id] || "";
      const { data } = await allProducts(mappedCategory);
      setProducts(data.items);
      console.log(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return <Catalog products={products} />;
};

export default CatalogContainer;

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentProducts, setCurrentProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    if (id) {
      const mappedCategory = categoryMapping[id] || "";
      const { data } = await allProducts(mappedCategory);
      setProducts(data.items);
      setCurrentPage(1);
    }
  };

  const getPages = () => {
    const totalPages = Math.ceil(products.length / 12);
    setTotalPages(totalPages);
    const currentProducts = products.slice(
      (currentPage - 1) * 12,
      currentPage * 12
    );
    setCurrentProducts(currentProducts);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  useEffect(() => {
    getPages();
  }, [products, currentPage]);

  return (
    <Catalog
      products={currentProducts}
      title={id || ""}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default CatalogContainer;

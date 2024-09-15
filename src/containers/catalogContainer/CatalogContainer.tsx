import Catalog from "../../components/catalog/Catalog";
import { useGetProductsMutation } from "../../store/logohubApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/types.data";
import { categoryMapping } from "../../components/catalog/CatalogData";
import useDesktop from "../../hooks/useDesktop";
import Loader from "../../components/ui/loader/Loader";

const CatalogContainer = () => {
  const { id } = useParams();
  const isDesktop = useDesktop();

  const [allProducts, { isLoading }] = useGetProductsMutation();
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
    const cardsLength = isDesktop ? 12 : 6;

    const totalPages = Math.ceil(products.length / cardsLength);
    setTotalPages(totalPages);
    const currentProducts = products.slice(
      (currentPage - 1) * cardsLength,
      currentPage * cardsLength
    );
    setCurrentProducts(currentProducts);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  useEffect(() => {
    getPages();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [products, currentPage]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <Catalog
        products={currentProducts}
        title={id || ""}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default CatalogContainer;

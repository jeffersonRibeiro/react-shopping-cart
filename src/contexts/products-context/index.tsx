import { createContext, FC, useContext, useState, useCallback } from 'react';
import { getProducts } from 'services/products';
import { IProduct } from 'models';

export interface IProductsContext {
  isFetching: boolean;
  products: IProduct[];
  filters: string[];
  fetchProducts(): void;
  filterProducts(filters: string[]): void;
}

const ProductsContext = createContext<IProductsContext | {}>({});

const ProductsProvider: FC = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);

      setProducts(products);
    });
  }, []);

  const filterProducts = (filters: string[]) => {
    setIsFetching(true);
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);

      let filteredProducts;

      if (filters && filters.length > 0) {
        filteredProducts = products.filter((p: IProduct) =>
          filters.find((filter: string) =>
            p.availableSizes.find((size: string) => size === filter)
          )
        );
      } else {
        filteredProducts = products;
      }

      setFilters(filters);
      setProducts(filteredProducts);
    });
  };

  const ProductContextValue: IProductsContext = {
    isFetching,
    products,
    filters,
    fetchProducts,
    filterProducts,
  };

  return (
    <ProductsContext.Provider value={ProductContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
export default ProductsProvider;

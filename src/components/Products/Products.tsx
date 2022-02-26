import Product from './Product';

import { IProduct } from 'models';

import * as S from './style';

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.map((p) => (
        <Product product={p} key={p.sku} />
      ))}
    </S.Container>
  );
};

export default Products;

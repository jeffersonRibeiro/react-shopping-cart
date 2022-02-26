import Selectbox from 'commons/Selectbox';
import * as S from './style';

const sortOptions = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
];

interface IProps {
  className?: string;
}

const Sort = ({ className }: IProps) => (
  <S.Container className={className}>
    Order by
    <Selectbox options={sortOptions} handleOnChange={() => {}} />
  </S.Container>
);

export default Sort;

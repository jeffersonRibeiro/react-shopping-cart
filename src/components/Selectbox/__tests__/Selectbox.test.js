import Selectbox from '..';

const optionsMock = [
  { value: '', label: 'Selecionar' },
  { value: 'lowestprice', label: 'Menor Preço' },
  { value: 'highestprice', label: 'Maior Preço' }
];

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Selectbox options={optionsMock} handleOnChange={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('mount with 3 option element', () => {
  expect(wrapped.find('option').length).toEqual(3);
});

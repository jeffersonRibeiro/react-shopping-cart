import Filter from '../';
import Root from '../../../../Root';

const initialState = {
  filters: {
    items: ['XS', 'S']
  }
};

it('mounts without crashing', () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Filter />
    </Root>
  );
  wrapped.unmount();
});

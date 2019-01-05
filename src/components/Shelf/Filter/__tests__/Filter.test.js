import Filter from '../';
import Root from '../../../../Root';

const initialState = {
  filters: {
    items: ['40', '41']
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

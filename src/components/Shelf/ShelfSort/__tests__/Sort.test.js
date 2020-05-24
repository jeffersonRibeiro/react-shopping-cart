import Sort from '../';
import Root from '../../../../Root';

const initialState = {
  sort: {
    type: 'highestprice'
  }
};

it('mounts without crashing', () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Sort />
    </Root>
  );
  wrapped.unmount();
});

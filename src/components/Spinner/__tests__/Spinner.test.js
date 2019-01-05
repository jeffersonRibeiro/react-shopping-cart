import Spinner from '../';

it('mounts without crashing', () => {
  const wrapped = mount(<Spinner />);
  wrapped.unmount();
});

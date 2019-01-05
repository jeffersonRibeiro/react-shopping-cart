import Clearfix from '..';

it('mounts without crashing', () => {
  const wrapped = mount(<Clearfix />);
  wrapped.unmount();
});

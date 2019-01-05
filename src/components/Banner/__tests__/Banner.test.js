import Banner from '..';

it('mounts without crashing', () => {
  const wrapped = mount(<Banner />);
  wrapped.unmount();
});

import Root from '../../../Root';
import App from '../';

import Shelf from '../../Shelf';
import FloatCart from '../../FloatCart';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a shelf', () => {
  expect(wrapped.find(Shelf).length).toEqual(1);
});

it('shows a floating cart', () => {
  expect(wrapped.find(FloatCart).length).toEqual(1);
});

import { render } from '@testing-library/react';

import Loader from '.';

describe('[components] - Loader', () => {
  const setup = () => {
    return render(<Loader />);
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});

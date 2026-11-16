import { renderWithThemeProvider } from 'utils/test/test-utils';

import Loader from '.';

describe('[components] - Loader', () => {
  const setup = () => {
    return renderWithThemeProvider(<Loader />);
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});

import { renderWithThemeProvider } from 'utils/test/test-utils';

import GithubCorner from '.';

describe('[components] - GithubCorner', () => {
  const setup = () => {
    return renderWithThemeProvider(<GithubCorner />);
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});

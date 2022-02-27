import { render } from '@testing-library/react';

import GithubCorner from '.';

describe('[components] - GithubCorner', () => {
  const setup = () => {
    return render(<GithubCorner />);
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

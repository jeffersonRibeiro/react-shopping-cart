import { render } from '@testing-library/react';

import GithubStarButton from '.';

describe('[components] - GithubStarButton', () => {
  const setup = () => {
    return render(<GithubStarButton />);
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

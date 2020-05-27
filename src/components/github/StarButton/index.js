import React from 'react';

import { Container } from './styles.js';

const StarButton = () => (
  <Container>
    <small>Leave a star on Github if this repository was useful :)</small>
    <a
      className="github-button"
      href="https://github.com/jeffersonRibeiro/react-shopping-cart"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star jeffersonRibeiro/react-shopping-cart on GitHub"
    >
      Star
    </a>
  </Container>
);

export default StarButton;

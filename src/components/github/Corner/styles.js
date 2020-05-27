import styled from 'styled-components';

export const Container = styled.a`
  position: fixed;
  top: 0;
  left: 0;

  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }

  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;

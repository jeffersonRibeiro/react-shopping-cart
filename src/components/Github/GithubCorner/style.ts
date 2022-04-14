import styled from 'styled-components/macro';

export const OctoArm = styled.path``;

export const Container = styled.a`
  &:hover ${OctoArm} {
    animation: octocat-wave 560ms ease-in-out;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover ${OctoArm} {
      animation: none;
    }
    .github-corner ${OctoArm} {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;

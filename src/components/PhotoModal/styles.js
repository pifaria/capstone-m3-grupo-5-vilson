import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 0;
  z-index: 2;
  animation: myAnim 1s ease 0s 1 normal forwards;

  img {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 4px;
    transition: 1s;
  }

  @media (min-width: 1024px) {
    img {
      width: 500px;
      height: 500px;
    }
  }

  @keyframes myAnim {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

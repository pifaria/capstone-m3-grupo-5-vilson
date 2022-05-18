import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  z-index: 2;
  position: absolute;
  background: rgb(0, 0, 0, 0.7) ;
  
  img {
    animation: myAnim 1s ease 0s 1 normal forwards;
    max-width: 300px;
    max-height: 300px;
    border-radius: 4px;
    transition: 1s;
  }

  @media (min-width: 1024px) {

    img {
      max-width: 400px;
      max-height: 400px;
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

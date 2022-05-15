import styled from "styled-components";

export const Container = styled.section`
  width: 250px;
  height: 120px;
  background-color: var(--grey);
  text-align: center;
  border-radius: 4px;
  position: absolute;
  top: 5px;
  right: 5px;
  filter: brightness(0.8);
  animation: myAnim 1s ease 0s 1 normal forwards;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--orange);
    filter: brightness(1.2);
    padding: 0 10px 0 15px;
  }

  @media (max-width: 1024px) {
    right: auto;
    bottom: 5px;
    z-index: 2;
  }

  span {
    color: white;
  }

  header {
    height: 30px;
    border-radius: 4px 4px 0 0;
    padding-top: 3px;
  }

  p {
    text-align: center;
    padding-top: 20px;
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateY(-250px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

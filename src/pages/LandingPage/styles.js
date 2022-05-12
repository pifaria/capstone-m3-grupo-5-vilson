import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: var(--black);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    width: 217px;
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    color: var(--vanilla);
  }
  p{
    margin: 10px;
  }
  .buttons{
    display: flex;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  margin: 30px 0 0 0;
  flex-direction: column;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: var(--orange);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

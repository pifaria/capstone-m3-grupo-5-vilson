import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  overflow-y: scroll;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  margin: 30px 0 0 0;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

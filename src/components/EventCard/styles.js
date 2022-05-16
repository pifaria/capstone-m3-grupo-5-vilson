import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  margin-right: 8px;
  text-align: center;
  padding-bottom: 16px;  
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: var(--orange);
  width: 250px;
  height: 100%;

  h4{
    text-align: start;
    margin-left: 5px;
  }
`

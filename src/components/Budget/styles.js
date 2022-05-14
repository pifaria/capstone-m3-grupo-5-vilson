import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 60px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    width: 200px;
  }

  p {
    color: var(--green);
    background-color: var(--grey);
    padding: 5px;
    border-radius: 4px;
  }

  span {
    width: 84px;
    color: var(--white);
    background-color: var(--white);
  }
`;

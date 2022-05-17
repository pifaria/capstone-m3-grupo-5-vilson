import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  align-self: center;

  button:nth-child(1) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid 1px var(--orange);
    color: var(--orange);
    background-color: transparent;
  }

  .orange-bar {
    height: 2px;
    width: 170px;
    background-color: var(--orange);
  }

  p {
    color: var(--orange);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  height: 200px;
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--beige);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--orange);
    border-radius: 10px;
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  display: flex;
  width: 280px;
  flex-wrap: wrap;
  gap: 20px;

  li {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 80px;
    width: 80px;
  }
`;

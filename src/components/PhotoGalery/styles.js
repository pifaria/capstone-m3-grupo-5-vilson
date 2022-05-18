import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-left: 10%;
  }
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

  @media (min-width: 1024px) {
    .orange-bar {
      width: 480px;
    }

    p {
      font-size: 40px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  overflow-y: scroll;
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

  @media (min-width: 1024px) {
    overflow: initial;
    height: 600px;
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  li {
    display: flex;
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 4px;
  }

  @media (min-width: 1024px) {
    max-height: 600px;
    overflow-y: scroll;
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
    li {
      flex-direction: row;
    }
    img {
      width: 230px;
      height: 230px;
    }
  }
`;

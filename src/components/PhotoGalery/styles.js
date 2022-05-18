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
  width: 100%;
  justify-content: space-between;

  button:nth-child(1) {
    border: none;
    color: var(--orange);
    background-color: transparent;
  }

  svg:hover{
    background-color: var(--orange);
    color: var(--black);
    border-radius: 100%;
  }


  .orange-bar {
    height: 2px;
    width: 70%;
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
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    display: flex;

    button{
      background-color: var(--fullblack);
      border: none;
      color: var(--orange);
      position: absolute;
      padding: 1px;
    }
  }

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 15px;
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

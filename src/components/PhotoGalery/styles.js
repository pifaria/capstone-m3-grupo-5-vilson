import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 1024px) {
    margin-left: 10%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    span {
      display: none;
      font-size: 0.4rem;
    }

    :hover > span {
      display: block;
    }
  }

  button:nth-child(1) {
    border: none;
    color: var(--orange);
    background-color: transparent;
  }

  svg:hover {
    background-color: var(--orange);
    color: var(--black);
    border-radius: 100px;
  }

  @media (min-width: 1024px) {
    svg {
      width: 30px;
      height: 30px;
    }
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
    margin-top: 0;

    p {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  overflow-y: scroll;
  height: 300px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--orange);
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    height: 600px;
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 280px;

  @media (min-width: 1024px) {
    max-width: 970px;
  }

  li {
    display: flex;
    flex-direction: column;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--fullblack);
      border: none;
      color: var(--orange);
      padding: 4px 0;
      margin-bottom: 15px;
      border-radius: 0 0 4px 4px;
      height: 25px;

      p {
        display: none;
        font-size: 0.7rem;
      }

      :hover {
        svg {
          display: none;
        }

        p {
          display: block;
        }
      }
    }
  }

  img {
    height: 80px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    border: solid 1px transparent;

    :hover {
      border: 1px solid var(--orange);
    }
  }

  @media (min-width: 1024px) {
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

    img {
      height: 200px;
      object-fit: cover;
    }

    li {
      button {
        margin-bottom: 20px;
        padding: 10px 0;
      }
    }
  }
`;

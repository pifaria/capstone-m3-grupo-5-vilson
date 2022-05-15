import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  margin-top: 5px;
  justify-content: center;

  div {
    background-color: black;
    width: 300px;
    display: flex;
    justify-content: space-around;
    height: 160px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
    align-self: center;
    border: solid 1px var(--orange);
    background-color: black;
  }

  @media (min-width: 900px) {
    justify-content: inherit;
    margin-left: 50px;
    div {
      height: 600px;
    }

    img {
      position: absolute;
      top: 120px;
      width: 220px;
      height: 220px;
    }

    main {
      justify-content: flex-end;
      row-gap: 150px;
    }

    p + p {
      margin-bottom: 20px;
    }
  }
`;

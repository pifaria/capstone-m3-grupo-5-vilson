import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  margin-top: 5px;
  justify-content: center;

  div {
    background-color: black;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    row-gap: 10px;
    height: 160px;
  }

  img {
    width: 80px;
    height: 80px;
    align-self: center;
    border: solid 1px var(--orange);
    background-color: black;
  }

  @media (min-width: 900px) {
    margin-left: 30px;

    div {
      height: 592px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    img {
      width: 220px;
      height: 220px;
    }

    p + p {
      margin-bottom: 20px;
    }
  }
`;

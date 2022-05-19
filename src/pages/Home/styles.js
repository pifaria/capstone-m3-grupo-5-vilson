import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: var(--black);
  @media (min-width: 1024px) {
    background: rgb(37, 36, 34);
    background: linear-gradient(
      90deg,
      rgba(37, 36, 34, 1) 0%,
      rgba(93, 92, 86, 1) 70%,
      rgba(108, 104, 96, 1) 100%
    );
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    width: 217px;
    font-family: Inter;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19.36px;
    color: var(--beige);
  }
  p {
    margin: 10px;
  }
  .buttons {
    display: flex;
  }

  img {
    width: 250px;
  }

  button {
    min-width: 80px;
  }

  @media (min-width: 1024px) {
    img {
      height: 115px;
      width: auto;
    }
    .text {
      font-weight: 500;
      font-size: 28px;
      line-height: 38px;
      width: 350px;
    }
  }
`;

export const Grid = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 500px;

    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      margin: 0px 10px;
    }

    .normal {
      width: 182px;
      height: 121px;
      border-radius: 8px;
      object-fit: fill;
    }

    .big {
      width: 182px;
      height: 268px;
      border-radius: 8px;
      object-fit: fill;
    }
  }
`;

export const Divider = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    height: 472.5px;
    width: 2px;
    background-color: var(--orange);
    border: 3px solid #eb5e28;
    margin: 0px 50px;
  }
  @media (min-width: 1440px) {
    margin: 0px 75px;
  }
`;

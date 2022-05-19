import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  margin-top: 5px;
  justify-content: center;

  section {
    background-color: black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 20px 10px;

    h1 {
      border-bottom: 1px solid var(--orange);
      padding-bottom: 5px;
    }

    div {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 16px;
    }
    .div-flex{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    p {
      font-size: 0.9rem;
      color: var(--orange);
      margin-bottom: 10px;
      font-weight: 500;

      span {
        color: var(--vanilla);
      }
    }
  }

  img {
    width: 80px;
    align-self: center;
    border: solid 1px var(--orange);
    background-color: black;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    section {
      width: 220px;
      align-items: center;

      p {
        font-size: 0.9rem;
        margin-bottom: 10px;
      }
    }

    div {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    img {
      width: 150px;
      margin-bottom: 16px;
      object-fit: cover;
    }

    p + p {
      margin-bottom: 20px;
    }
  }
`;

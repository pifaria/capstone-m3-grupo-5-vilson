import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  main {
    display: flex;
    column-gap: 55px;
  }

  @media (min-width: 900px) {
    main {
      display: flex;
      margin-top: 30px;
    }

    .container-dash {
      display: flex;
      flex-direction: column;
    }

    .container-top {
      display: flex;
      align-items: center;
      column-gap: 15px;
      margin-bottom: 5px;
    }

    .container-top > p {
      font-size: 25px;
      color: var(--orange);
    }
    .orange-bar {
      width: 420px;
      height: 2px;
      background-color: var(--orange);
    }
  }
`;

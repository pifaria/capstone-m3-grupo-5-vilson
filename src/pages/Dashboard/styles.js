import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  main {
    display: flex;
    flex-direction: column;
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
    }

    .orange-bar {
      width: 450px;
      height: 5px;
      background-color: var(--orange);
    }
  }
`;

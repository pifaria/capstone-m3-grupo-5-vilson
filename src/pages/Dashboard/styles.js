import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  main {
    display: flex;
    flex-direction: column;

    .container-dash{
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }

    .container-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      button{
        font-size: 0.7rem;
        word-wrap: normal;
        margin: 0;
      }
    }

    .orange-bar{
      width: 100%;
      margin: 0 5px;
      height: 2px;
      background-color: var(--orange);
    }
  }

  @media (min-width: 900px) {
    main {
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
      flex-direction: row;
      justify-content: space-evenly;
      margin-top: 30px;
      padding-bottom: 50px;
      height: 700px;

      .container-dash {
        display: flex;
        flex-direction: column;
        width: 640px;
        margin: 0;
      }
  
      .container-top {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        margin-top: 0;
      }
  
      .container-top > p {
        font-size: 25px;
      }
  
      .orange-bar {
        height: 2px;
        width: 100%;
        background-color: var(--orange);
      }
    }


  }
`;

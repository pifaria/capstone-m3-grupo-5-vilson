import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
`;
export const PhotographersList = styled.div`
  display: flex;
  width: 60%;
  overflow-x: scroll;
`;

export const EventCard = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 669px;
    width: 400px;
    border-radius: 0px;
    background-color: #000000;

    h1 {
      width: 357px;
      height: 47px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 39px;
      line-height: 47px;
      text-align: center;
      color: var(--orange);
    }
  }
`;

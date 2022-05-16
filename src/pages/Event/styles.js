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

export const EventinfoCard = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 600px;
    width: 400px;
    border-radius: 0px;
    background-color: #000000;
    margin: 30px 0 0 0;

    .icon {
      color: var(--orange);
      height: 23px;
      width: 23px;
    }

    .infos{
      display: flex;
    }

    .local-date{
      display: flex;
    }
    .budget{
      display: flex;
    }
    span {
      width: 173px;
      height: 17px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: var(--beige);
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
    }

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

  h2 {
    width: 100px;
    height: 30px;
    left: 1049px;
    top: 683px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: var(--orange);
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: var(--vanilla);
  }

  h5 {
    width: 81px;
    height: 17px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--vanilla);
  }
`;

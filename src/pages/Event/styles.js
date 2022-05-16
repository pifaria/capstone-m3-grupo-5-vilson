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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 400px;
    border-radius: 0px;
    background-color: #000000;
    margin: 30px 0 0 0;

    .divider1{
      width: 330px;
      height: 1px;
      background-color: var(--vanilla);
      margin: 30px 0 10px 0;
    }
    .divider2{
      width: 330px;
      height: 1px;
      background-color: var(--orange);
      margin: 20px 0px;
    }
    .icon {
      color: var(--orange);
      height: 23px;
      width: 23px;
    }

    .infos{
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 0 0 40px 0;
    }

    .local-date{
      display: flex;
      align-items: center;
      margin: 0 0 20px 0;
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
      margin: 10px 0 30px 0;
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
    margin: 0 0 40px 0;
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

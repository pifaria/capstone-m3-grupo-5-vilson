import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 232.97584533691406px;
  width: 200px;
  border-radius: 0px;
  background-color: #000000;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;

  .avatar {
    box-sizing: border-box;
    width: 65px;
    height: 63px;
    background: url(african-gdef4df589_1920.jpg);
    border: 1.39264px solid #eb5e28;
    border-radius: 50px;
    margin: 0px 0 15px 0;
  }

  h4 {
    color: var(--orange);
    margin: 0 0 25px 0;
  }

  .profile{
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .icon{
      width: 30px;
      height: 30px;
      color: var(--orange);
    }
    h3 {
      color: var(--vanilla);
      margin-left: 5px;
      cursor: pointer;
    }
  }


  .buttons {
    display: flex;
  }
`;

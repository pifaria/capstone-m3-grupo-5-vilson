import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border-bottom: 1px solid #eb5e28;
  box-shadow: 0 0 1em var(--orange);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  img{
    width: auto;
    height: 35px;
    cursor: pointer;
  }

  div {
    display: flex;
    .icon {
      width: auto;
      height: 30px;
      color: var(--orange);
      cursor: pointer;
    }
  }

  @media (min-width: 1024px){
    width: 80%;
    justify-content: space-between;

    img{
      width: auto;
      height: 50px;
    }
  }
`;

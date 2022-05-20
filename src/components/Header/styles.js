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
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;

  img{
    width: auto;
    height: 35px;
    cursor: pointer;
  }

  section {
    display: flex;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 45px;

      span{
        font-size: 0.5rem;
      }
    }

    .icon {
      width: 50px;
      height: 30px;
      color: var(--orange);
      cursor: pointer;
    }
  }

  @media (min-width: 900px){
    width: 80%;
    justify-content: space-between;

    img{
      width: auto;
      height: 50px;
    }

    section{
      div{
        span{
          font-size: 0.5rem;
          display: none;
        }

        :hover > span{
          display: block;
        }
      }
    }
  }
`;

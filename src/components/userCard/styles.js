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
    justify-content: space-evenly;
    width: 100%;
    padding: 20px 10px;
    
    div{
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    p{
      font-size: 0.7rem;
      color: var(--orange);
      margin-bottom: 8px;
      font-weight: 500;
    
      span{
        color: var(--vanilla);
      }
    }

  }

  img {
    width: 80px;
    height: 80px;
    align-self: center;
    border: solid 1px var(--orange);
    background-color: black;
  }
  
  @media (min-width: 900px) {
    section{
      width: 220px;
      align-items: center;

      p{
        font-size: 0.5rem;
      }
    }
    
    div {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    img {
      width: 150px;
      height: 150px;
      margin-bottom: 16px;
    }


    p + p {
      margin-bottom: 20px;
    }
  }
`;

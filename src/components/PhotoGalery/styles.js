import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 1024px) {
    margin-left: 10%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    span{
      display: none;
      font-size: 0.4rem;
    }

    :hover > span{
      display: block;
    }
  }

  button:nth-child(1) {
    border: none;
    color: var(--orange);
    background-color: transparent;
  }

  svg:hover{
    background-color: var(--orange);
    color: var(--black);
    border-radius: 100%;
  }


  .orange-bar {
    height: 2px;
    width: 70%;
    background-color: var(--orange);
  }

  p {
    color: var(--orange);
  }

  @media (min-width: 1024px) {
    margin-top: 0;

    p {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  
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

  @media (min-width: 1024px) {
    overflow: initial;
    height: 600px;
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  
  li {
    display: flex;
    flex-direction: column;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--fullblack);
      border: none;
      color: var(--orange);
      padding: 4px 0;
      margin-bottom: 15px;
      border-radius: 0 0 4px 4px;

      p{
        display: none;
        font-size: 0.7rem;
      }

      :hover{
        svg{
          display: none;
        }

        p{
          display: block;
        }
      }
    }
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    
    :hover{
      border: 1px solid var(--orange);
    }
  }

  @media (min-width: 1024px) {

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
    
    img {
      width: 200px;
      height: 200px;
    }

    li{

      button{
        margin-bottom: 20px;
        padding: 10px 0;
      }
    }
  }
`;

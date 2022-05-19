import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-radius: 31px;
  border: 3px solid var(--orange);
  width: 50%;
  
  button{
    background-color: transparent;
    border: none;
    color: var(--vanilla);
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 1024px){
    justify-content: space-around;
    width: 40%;
  }
`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: none;
  font-family: "Inter";
  height: 35px;
  font-style: normal;
  color: var(--vanilla);
  font-weight: 700;
  font-size: 0.7rem;

  ::placeholder{
    color: var(--vanilla)
  }

  @media (min-width: 1024px){
    width: 80%;
    margin: 0;
    font-size: 1rem;
  }
`;

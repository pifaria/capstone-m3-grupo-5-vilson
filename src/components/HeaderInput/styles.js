import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Input = styled.input`
  text-align: center;
  border: 3px solid var(--orange);
  border-radius: 31px;
  background-color: var(--black);
  font-family: "Inter";
  height: 35px;
  width: 80%;
  font-style: normal;
  font-weight: 700;
  font-size: 0.7rem;
  color: var(--vanilla);
  margin-left: 20px;

  ::placeholder{
    color: var(--vanilla)
  }

  @media (min-width: 1024px){
    width: 100%;
    margin: 0;
    font-size: 1rem;
  }
`;

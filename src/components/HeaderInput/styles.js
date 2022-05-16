import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  border-radius: 31px;
  border: 3px solid var(--orange);
  width: 50%;
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
    width: 100%;
    margin: 0;
    font-size: 1rem;
  }
`;

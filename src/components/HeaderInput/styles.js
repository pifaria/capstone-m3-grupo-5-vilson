import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Input = styled.input`
  text-align: center;
  width: 370px;
  height: 52px;
  border: 2.26087px solid var(--orange);
  border-radius: 31.6522px;
  background-color: var(--black);
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18.1361px;
  line-height: 22px;
  color: var(--vanilla);

  ::placeholder{
    color: var(--vanilla)
  }
`;

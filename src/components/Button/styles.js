import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.beigeSchema ? "var(--beige)" : props.greySchema ? 'var(--grey)' : 'var(--orange)')};
  border: none;
  border-radius: 4px;
  width: 100px;
  height: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--black);
  margin: 0px 5px;
`;
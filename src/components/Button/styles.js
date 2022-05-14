import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.beigeSchema ? "var(--grey)" : 'var(--orange)')};
  border: 1px solid ${(props) => (props.beigeSchema ? "var(--orange)" : 'var(--orange)')};
  border-radius: 4px;
  width: 100px;
  height: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => (props.beigeSchema ? "var(--vanilla)" : props.greySchema ? 'var(--black)' : 'var(--black)')};
  margin: 0px 5px;

  :hover{
    box-shadow: inset 0 0 1em ${(props) => (props.beigeSchema ? "var(--orange)" : 'var(--black)')};
    /* background-color: ${(props) => (props.beigeSchema ? "var(--grey)" : 'var(--black)')}; */
    color: ${(props) => (props.beigeSchema ? "var(--vanilla)" : 'var(--black)')};
    border: 1px solid ${(props) => (props.beigeSchema ? "var(--orange)" : 'var(--black)')};;
  }

  :active{
    transform: scale(0.95);
  }
`;
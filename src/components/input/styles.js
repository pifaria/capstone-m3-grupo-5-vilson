import styled from "styled-components";

export const Container = styled.div`
  input {
        height: 35px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--orange);
        caret-color: var(--orange);
        padding-left: 5px;
    color: var(--white);

    &:focus {
            box-shadow: 0 0 0.7em var(--orange);
            border-bottom: none;
        }
    }
`;
        
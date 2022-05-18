import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
background-color: var(--grey);

form{
    display: flex;
    align-items: center;
}

input {
    height: 35px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--orange);
    caret-color: var(--orange);
    padding-left: 5px;
    color: var(--white);
  }
`
export const ModalHeader = styled.div`
display: flex;
justify-content: space-between;

margin: 0 0 15px 0;

button{
    border: none;
    background: none;
    color: var(--vanilla);
}
`
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 4px;
  background-color: var(--orange);
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  form{
      display: flex;
      flex-direction: column;

      input, select{
        background-color: var(--grey);
        height: 35px;
        color: var(--vanilla);
        margin-bottom: 12px;
        padding: 0 5px;
        border-radius: 5px;
        border: none;

        ::placeholder{
          color: var(--vanilla);
        }
      }
      
      button{
        background-color: var(--grey);
        border: 2px solid var(--grey);

        :hover{
          background-color: var(--orange);
          box-shadow: inset 0 0 1em var(--black);
          border: 2px solid var(--black);
        }
      }
  }

  label{
    color: var(--vanilla);
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 3px;
  }

`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0 10px 0;
    color: var(--vanilla);
    border-bottom: 2px solid var(--black);

    .closeModal{
      border: none;
      font-weight: bolder;
      background: none;
      color: #000000;
    }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  padding: 10px;
  max-height: 300px;
  background-color: var(--fullblack);
  border-radius: 4px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--black);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--beige);
    border-radius: 10px;
  }
`

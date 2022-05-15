import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 3.208672046661377px;
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
        border: none;
        background-color: var(--beige);
        padding: 2px;
        border-radius: 5px;
      }
  }
  label{
    color: var(--vanilla);

  }
  .submit{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0 10px 0;
    color: var(--vanilla);

    button{
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
`

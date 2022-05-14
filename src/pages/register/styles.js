import styled from "styled-components";
import { keyframes } from "styled-components";
import Logo from "../../assets/logo.png";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--orange);
    position: absolute;
    margin-top: 6px;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
  }

  .container-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin: 5px 0 5px 0;
    width: 220px;
  }

  span {
    color: var(--orange);
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }
  }

  select {
    height: 35px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--orange);
    caret-color: var(--orange);
    padding-left: 5px;
    width: 220px;
    color: var(--white);
    -webkit-appearance: none;
  }

  .start-value {
    color: #757575;
  }

  select option {
    background: var(--grey);
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
  }

  .select-selected {
    background-color: DodgerBlue;
  }

  textarea {
    resize: none;
    width: 220px;
    height: 40px;
    padding-left: 5px;
    padding-top: 2px;
    border: 1px solid var(--orange);
    margin-top: 8px;
    background-color: transparent;
    color: var(--white);
  }
`;

export const Divider = styled.div`
  width: 5px;
  height: 80vh;
  background-color: var(--orange);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${Logo}) no-repeat center var(--black);
    background-size: contain;
    height: 20vh;
    max-width: 500px;
  }
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
    border-radius: 8px;
    background-color: var(--grey);
    row-gap: 5px;
    width: 300px;

    .buttonsBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 16px;

      button {
        width: 100%;
      }

      span {
        margin: 16px 0;
        color: var(--beige);
      }
    }
  }
`;

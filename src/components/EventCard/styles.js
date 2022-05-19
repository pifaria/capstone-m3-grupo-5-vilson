import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  margin-right: 8px;
  text-align: left;
  padding-bottom: 16px;
  margin-bottom: 15px;

  @media (min-width: 900px) {
    height: 350px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: var(--orange);
  width: 250px;
  height: 100%;
  padding: 20px;

  button {
    width: 80%;
    align-self: center;
  }


  .div-switchToggle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    margin-bottom: 5px;
  }
  .divider1 {
    width: 99%;
    height: 1px;
    background-color: var(--vanilla);
    margin: 10px 0 10px 0;
  }

  .div-end{
    display: flex;
    flex-direction: column;
  }

  .local-date {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0 10px 0;
  }

  .solicitation{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    color: yellow;
    margin: 0px 0 10px 0;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--beige);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--green);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--green);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media (min-width: 900px) {
    width: 290px;
  }
`;

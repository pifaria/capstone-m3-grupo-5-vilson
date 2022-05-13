import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Inter", sans-serif;
    }

    :root {
        --orange: #EB5E28;
        --vanilla: #FFFCF2;
        --black: #252422;
        --grey: #403D39;
        --beige: #CCC5B9;
        --green: #28EB53;
        --red: #EC3E26;
    }
    
    button{
        cursor: pointer;
        font-weight: 500;
    }

    body{
        background-color: var(--black);
        color: var(--vanilla);
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }

    a{
        text-decoration: none;
    }
`
export const customStyles = {
    content: {
      padding: "0px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
};
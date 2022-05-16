import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 16px;
 
  ::-webkit-scrollbar {
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--beige);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--orange);
    border-radius: 10px;
  }
`;

import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 16px;
  border-radius: 5px;

  h1 {
    color: var(--grey);
  }

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

  @media (min-width: 900px) {
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: space-between;
    height: 600px;
    width: 640px;
    overflow-x: hidden;
    background-color: var(--fullblack);
    padding: 20px 10px 20px 20px;

    ::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export const EmptyEventContainer = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--fullblack);
    padding: 20px 10px 20px 20px;
    border-radius: 5px;
    margin: 15px 0 0 0;

h1{
  color: var(--grey);
}
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 640px;
    background-color: var(--fullblack);
    padding: 20px 10px 20px 20px;
    border-radius: 5px;
    margin: 0px 0 0 0;
  }
`;

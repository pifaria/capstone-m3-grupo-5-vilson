import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  background-color: var(--black);
  border-bottom: 1px solid #eb5e28;
  box-shadow: 0px 6px 6px rgba(235, 94, 40, 0.25);
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  img {
    height: 51px;
    width: 61px;
    border-radius: 0px;
  }

  div {
    display: flex;
    .icon {
      width: 56px;
      height: 41px;
      color: var(--orange);
      cursor: pointer;
    }
  }
`;

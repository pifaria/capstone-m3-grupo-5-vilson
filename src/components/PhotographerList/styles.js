import styled from "styled-components";

export const Container = styled.div`
display: flex;
overflow-x: scroll;
margin: 90px 0 0 0;

@media (min-width: 1024px){
  display: flex;
  flex-wrap: wrap;
  width: 650px;
  row-gap: 15px;
  column-gap: 20px;
  justify-content: center;
  margin: 30px 15px 0 0;
  overflow: hidden;
}
`;

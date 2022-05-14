import { useContext } from "react";
import { PortfolioContext } from "../../providers/Portfolio";
import { Container, Content } from "./styles";

function PhotoGalery() {
  const { portfolio, addPhoto, deletePhoto } = useContext(PortfolioContext);

  function onAddPhoto(url) {
    addPhoto(url);
  }

  function onDeletePhoto(id) {
    deletePhoto(id);
  }

  return (
    <Container>
      <Content>
        <button onClick={() => onAddPhoto()}>+</button>
        <ContentList>
          {portfolio.map(({id, url}) => {
            return (
              <li key={id}>
                <img src={url} alt="photo" />
                <button onClick={() => onDeletePhoto(id)}>x</button>
              </li>
            );
          })}
        </ContentList>
      </Content>
    </Container>
  );
}

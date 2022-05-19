import { Box, Container, Content } from "./styles.js";
import Header from "../../components/Header";
import PhotographerList from "../../components/PhotographerList/index.jsx";
import EventList from "../../components/EventList/index.jsx";

const SearchResult = () => {

  return (
    <Container>
        <Header placeholder="Pesquisar fotógrafo"/>
        <Box>
            <Content>
           {/*      <h2> Resultado de : {} </h2>
                { ?(
                    <PhotographerList />
                ):(
                    <EventList />
                )} */}
                
            </Content>
        </Box>
    </Container>
  );
};

export default SearchResult;
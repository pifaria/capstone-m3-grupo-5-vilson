import { Container } from "./styles.js";
import PhotographerCard from "../PhotographerCard/index.jsx";
import {usePhotographerList} from "../../providers/PhotographerList/index";

const PhotographersList = () => {
    const { photographersList } = usePhotographerList();

    return(
        <Container>        
            {photographersList.length > 0 &&
                photographersList.map((photographer, index) => {
                    return <PhotographerCard key={index} info={photographer} />;
                })
            }
        </Container>
  )
}

export default PhotographersList;
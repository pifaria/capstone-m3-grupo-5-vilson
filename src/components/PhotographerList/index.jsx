import { Container } from "./styles.js";
import PhotographerCard from "../PhotographerCard/index.jsx";
import {usePhotographersList} from "../../providers/PhotographerList/index";

const PhotographersList = () => {
    const { photographersList } = usePhotographersList();

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
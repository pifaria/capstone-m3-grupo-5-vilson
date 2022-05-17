import { Container } from "./styles.js";
import PhotographerCard from "../PhotographerCard/index.jsx";
import {usePhotographerList} from "../../providers/PhotographerList/index";

const PhotographerList = () => {
    const { photographerList } = usePhotographerList();

    console.log(photographerList)

    return(
        <Container>        
            {photographerList.length > 0 &&
                photographerList.map((photographer, index) => {
                    return <PhotographerCard key={index} info={photographer} />;
                })
            }
        </Container>
  )
}

export default PhotographerList;
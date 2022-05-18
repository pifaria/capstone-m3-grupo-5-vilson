import { Container } from "./styles.js";
import PhotographerCard from "../PhotographerCard/index.jsx";
import { usePhotographerList } from "../../providers/PhotographerList/index";
import { useEffect } from "react";

const PhotographerList = ({ eventData }) => {
  const { photographerList, getPhotographers } = usePhotographerList();

  useEffect(() => {
    console.log("Antes:", eventData)

    if(!eventData) {
      return; 
    }

    console.log("Depois:", eventData)

    const { type, states } = eventData;

    getPhotographers({type, states});
  }, [eventData]);

  return (
    <Container>
      {photographerList.length > 0 &&
        photographerList.map((photographer, index) => {
          return <PhotographerCard key={index} info={photographer} />;
        })}
    </Container>
  );
};

export default PhotographerList;

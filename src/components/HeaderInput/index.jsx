import { Container, Input } from "../HeaderInput/styles";
import { useState} from "react"

const HeaderInput = ({ placeholder }) => {

 const [value, setValue] = useState()

  return (
    <Container>
      <Input onChange={(evt) => setValue(evt.target.value)} placeholder={placeholder} />
    </Container>
  );
};

export default HeaderInput;

import { Container, Input } from "../HeaderInput/styles";
import { useState} from "react"
import { BiSearch } from 'react-icons/bi'

const HeaderInput = ({ placeholder }) => {

 const [value, setValue] = useState()

  return (
    <Container>
      <Input onChange={(evt) => setValue(evt.target.value)} placeholder={placeholder} />
      <BiSearch type="submit"/>
    </Container>
  );
};

export default HeaderInput;

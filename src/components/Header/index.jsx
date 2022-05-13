import { Container, Content } from "./styles";
import Icon from "../../assets/ClickFinder Icon.png";
import HeaderInput from "../HeaderInput";
import { HiOutlineUserCircle, HiLogout } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({placeholder}) => {

  const history = useHistory()

  return (
    <Container>
      <Content>
        <img alt="." src={Icon}></img>
        <HeaderInput placeholder={placeholder} />
      <div>
        <HiOutlineUserCircle className="icon" />
        <HiLogout className="icon" onClick={() => history.push("/")} />
      </div>
      </Content>
    </Container>
  );
};

export default Header;

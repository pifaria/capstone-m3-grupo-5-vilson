import { Container, Content } from "./styles";
import Icon from "../../assets/ClickFinder Icon.png";
import HeaderInput from "../HeaderInput";
import { HiOutlineUserCircle, HiLogout } from "react-icons/hi";

const Header = ({ placeholder, setAuthenticated }) => {
  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  return (
    <Container>
      <Content>
        <img alt="." src={Icon}/>
        <HeaderInput placeholder={placeholder} />
        <div>
          <HiOutlineUserCircle className="icon" />
          <HiLogout className="icon" onClick={logout} />
        </div>
      </Content>
    </Container>
  );
};

export default Header;

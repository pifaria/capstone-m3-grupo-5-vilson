import { Container, Content } from "./styles";
import Icon from "../../assets/ClickFinder Icon.png";
import HeaderInput from "../HeaderInput";
import { HiOutlineUserCircle, HiLogout } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ placeholder, setAuthenticated }) => {
  const history = useHistory()

  const handleRedirectToHome = () => {
    return history.push("/dashboard")
  }
  
  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };


  return (
    <Container>
      <Content>
        <img alt="." src={Icon} onClick={handleRedirectToHome}/>
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

import { Container, Content } from "./styles";
import Icon from "../../assets/ClickFinder Icon.png";
import HeaderInput from "../HeaderInput";
import { HiOutlineUserCircle, HiLogout } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUserInfo } from "../../providers/userInfo";

const Header = ({ placeholder }) => {
  const history = useHistory()
  const { eraseUserInfo, userInfo } = useUserInfo()

  const handleRedirectToHome = () => {
    return history.push("/dashboard")
  }

  const handleRedirectProfile = () => {
    return history.push(`/profiles/${userInfo.id}`)
  }

  const handleLogout = () => {
    eraseUserInfo()
    return history.push("/")
  }

  return (
    <Container>
      <Content>
        <img alt="." src={Icon} onClick={handleRedirectToHome}/>
        <HeaderInput placeholder={placeholder} />
        <div>
          <HiOutlineUserCircle className="icon" onClick={handleRedirectProfile}/>
          <HiLogout className="icon" onClick={handleLogout} />
        </div>
      </Content>
    </Container>
  );
};

export default Header;

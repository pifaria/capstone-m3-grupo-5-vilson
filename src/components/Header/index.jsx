import { Container, Content } from "./styles";
import Icon from "../../assets/LogoIconMD.png";
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
        <section>
          <div>
            <HiOutlineUserCircle className="icon" onClick={handleRedirectProfile}/>
            <span>Meu perfil</span>
          </div>
          <div>
            <HiLogout className="icon" onClick={handleLogout} />
            <span>Sair</span>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default Header;

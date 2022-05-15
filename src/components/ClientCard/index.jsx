import Button from "../Button";
import { Container, Content } from "./styles";
import { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";

const ClientCard = () => {

    const {userInfo} = useContext(userInfoContext)

  return (
    <Container>
      <Content>
          <div className="avatar">{userInfo.avatar}</div>
          <h3>{userInfo.name}</h3>
          <h4>{userInfo.city}</h4>
          <h4>{userInfo.state}</h4>
          <h4>{userInfo.phone}</h4>
          <h4>{userInfo.email}</h4>
        <div className="buttons">
          <Button >Editar</Button>
        </div>
      </Content>
    </Container>
  );
};

export default ClientCard;
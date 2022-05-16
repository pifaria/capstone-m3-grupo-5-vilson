import React, { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";
import { Container } from "./styles";

export default function UserCard() {
  const { userInfo } = useContext(userInfoContext);
  const { avatar, name, email, number } = userInfo;

  return (
    <Container>
      <div>
        <img src={avatar} alt="user" />

        <p>{name}</p>
        <p>Email: {email}</p>
        <p>Telefone para contato: {number}</p>
      </div>
    </Container>
  );
}

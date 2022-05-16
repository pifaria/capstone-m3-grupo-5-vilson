import React, { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";
import { Container } from "./styles";

export default function UserCard() {
  const { userInfo } = useContext(userInfoContext);
  const { avatar, name, email, number } = userInfo;

  return (
    <Container>
      <section>
        <div>
          <img src={avatar} alt="user" />
          <h1>{name}</h1>
        </div>

        <p>Email: <span>{email}</span></p>
        <p>Telefone para contato: <span>{number}</span></p>
      </section>
    </Container>
  );
}

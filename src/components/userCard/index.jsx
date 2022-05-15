import React, { useContext } from "react";
import { userInfoContext } from "../../providers/userInfo";
import { Container } from "./styles";

export default function UserCard() {
  const { userInfo } = useContext(userInfoContext);

  const { avatar, name, email } = userInfo;

  return (
    <Container>
      <div>
        <img src={avatar} alt="user" />
        <main>
          <p>{name}</p>
          <p>{email}</p>
        </main>
      </div>
    </Container>
  );
}

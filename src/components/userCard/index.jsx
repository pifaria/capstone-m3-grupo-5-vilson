import React from "react";
import { Container } from "./styles";

export default function UserCard({ user }) {
  return (
    <Container>
      {user.type === "photographer" ? (
        <section>
          <div>
            <img src={user.avatar} alt="user" />
            <h1>{user.name}</h1>
          </div>

          <p>
            Email: <span>{user.email}</span>
          </p>
          <p>
            Telefone para contato: <span>{user.number}</span>
          </p>
          <p>{user.bio}</p>
        </section>
      ) : (
        <section>
          <div>
            <img src={user.avatar} alt="user" />
            <h1>{user.name}</h1>
          </div>

          <p>
            Email: <span>{user.email}</span>
          </p>
          <p>
            Telefone para contato: <span>{user.number}</span>
          </p>
        </section>
      )}
    </Container>
  );
}

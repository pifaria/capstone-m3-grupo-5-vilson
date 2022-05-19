import React from "react";
import Button from "../Button";
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
          <div className="div-flex">
            <p>{user.bio}</p>
          </div>

          <div>
            <p>Informações disponíveis</p>
            <p>
              Email: <span>{user.email}</span>
            </p>
            <p>
              Telefone para contato: <span>{user.number}</span>
            </p>
          </div>
         
        </section>
      ) : (
        <section>
          <div>
            <img src={user.avatar} alt="user" />
            <h1>{user.name}</h1>
          </div>
          <div>
            <p>Informações disponíveis</p>
            <p>
              Email: <span>{user.email}</span>
            </p>
            <p>
              Telefone para contato: <span>{user.number}</span>
            </p>
          </div>
        </section>
      )}
    </Container>
  );
}

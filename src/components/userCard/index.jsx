import React from "react";
import { typeTranslate } from "../../utils";
import Button from "../Button";
import { Container } from "./styles";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function UserCard({ user }) {
console.log(user)

  return (
    <Container>
      {user.type === "photographer" ? (
        <section>
          <div className="div-flex-center">
            <img src={user.avatar} alt="Foto de perfil" />
            <h1>{user.name}</h1>
          </div>
          <div className="div-flex">
            <article>{user.bio}</article>
          </div>
          
          <h4>Especialidade - <span>{typeTranslate(user.tags)}</span></h4>

          <label>Informações disponíveis</label>
          <div className="div-informations">
            <p>
              <AiOutlineMail/>
              Email - <span>{user.email}</span>
            </p>
            <p>
              <AiOutlinePhone/>
              Telefone para contato - <span>{user.number}</span>
            </p>
            <p>
              <HiOutlineLocationMarker/>
              Estado - <span>{user.states}</span>
            </p>
          </div>
         
        </section>
      ) : (
        <section>
          <div>
            <img src={user.avatar} alt="Foto de perfil" />
            <h1>{user.name}</h1>
          </div>
          <label>Informações disponíveis</label>
          <div className="div-informations">
            <p>
              <AiOutlineMail/>
              Email - <span>{user.email}</span>
            </p>
            <p>
              <AiOutlinePhone/>
              Telefone para contato - <span>{user.number}</span>
            </p>
            <p>
              <HiOutlineLocationMarker/>
              Estado - <span>{user.states}</span>
            </p>
          </div>
        </section>
      )}
    </Container>
  );
}

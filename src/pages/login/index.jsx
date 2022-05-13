import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Input from "../../components/input";

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório!"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "https://clickfinder-json-server.herokuapp.com/login",
      data,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <h1>Login</h1>
      </div>

      <Input
        name="email"
        error={errors.email?.message}
        register={register}
        placeholder="Digite aqui seu email"
      />
      <Input
        label="Senha"
        register={register}
        placeholder="Digite aqui seu senha"
        name="password"
        type="password"
        error={errors.password?.message}
      />

      <button>Entrar</button>

      <p>Ainda não possui cadastro?</p>

      <button onClick={() => history.push("/signup")}>Cadastre-se</button>
    </form>
  );
}

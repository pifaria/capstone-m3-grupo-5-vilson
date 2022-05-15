import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import { AnimationContainer, Background, Container, Divider } from "./styles";
import Button from "../../components/Button";
import requestApi from "../../services/API";
import { Redirect } from "react-router-dom";
import { userInfoContext } from "../../providers/userInfo";

export default function Login({ authenticated, setAuthenticated }) {
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

  const { saveUserInfo } = useContext(userInfoContext);

  const onSubmitFunction = (data) => {
    requestApi
      .post("login", data)
      .then((res) => {
        saveUserInfo(res.data);

        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <AnimationContainer>
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

          <div className="buttonsBox">
            <Button type="submit">Entrar</Button>

            <span>Ainda não possui cadastro?</span>

            <Button beigeSchema onClick={() => history.push("/signup")}>
              Cadastre-se
            </Button>
          </div>
        </form>
      </AnimationContainer>
      <Divider />
      <Background />
    </Container>
  );
}

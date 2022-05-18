import React, { useState } from "react";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaEye } from "react-icons/fa";
import requestApi from "../../services/API";
import SelectStates from "../../components/SelectStates";
import {
  AnimationContainer,
  Background,
  Container,
  Divider,
  InputsContainer,
} from "./styles";
import Button from "../../components/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { useUserInfo } from "../../providers/userInfo";

export default function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Digite seu nome completo!"),

    email: yup.string().email("Email inválido").required("Digite seu email!"),

    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .required("Campo obrigatório!")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Necessita caractere capital, minusculo, número e especial"
      ),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não correspondem!")
      .required("Campo obrigatório!"),

    type: yup.string().required("Selecione um campo"),

    avatar: yup.string(), //.required("Url da imagem inválido"),

    states: yup.string(),

    phone: yup.string(),

    bio: yup.string(),
  });

  const { saveUserInfo } = useUserInfo();
  const history = useHistory();
  const [showInputs, setShowInputs] = useState(false);

  const onSubmitFunction = (data) => {
    requestApi
      .post("register/", data)
      .then((response) => {
        saveUserInfo(response.data);
        toast.success("Email cadastrado com sucesso!");
      })
      .catch(() => toast.error("Email já cadastrado"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Background />
      <Divider />
      <AnimationContainer>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <h1>Crie sua conta</h1>
          </div>
          <InputsContainer>
            <Input
              register={register}
              placeholder="Nome"
              name="name"
              error={errors.name?.message}
            />
            <Input
              register={register}
              placeholder="Email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              label="Senha"
              placeholder="Senha"
              type="password"
              name="password"
              className="password"
              icon={FaEye}
              error={errors.password?.message}
            />

            <Input
              register={register}
              label="Senha"
              placeholder="Confirmar senha"
              type="password"
              name="passwordConfirm"
              className="password"
              icon={FaEye}
              error={errors.password?.message}
            />

            <Input
              register={register}
              type="number"
              placeholder="(xx) xxxxx-xxxx"
              name="number"
              error={errors.phone?.message}
            />
            <Input
              register={register}
              placeholder="Link da sua foto"
              name="avatar"
              error={errors.avatar?.message}
            />

            <div className="optionsBox">
              <RiArrowDropDownLine />
              <SelectStates register={register} name="states" />
            </div>

            <div className="optionsBox">
              <RiArrowDropDownLine />
              <select
                name="type"
                {...register("type")}
                onChange={(e) =>
                  e.target.value === "photographer"
                    ? setShowInputs(true)
                    : setShowInputs(false)
                }
              >
                <option value="" className="start-value">
                  Você é um cliente?
                </option>
                <option value="cliente">Sou cliente</option>
                <option value="photographer">Sou fotógrafo</option>
              </select>
            </div>

            {showInputs && (
              <div>
                <div className="optionsBox">
                  <RiArrowDropDownLine />
                  <select name="tags" {...register("tags")}>
                    <option value="marriage">Casamento</option>
                    <option value="party">Festa</option>
                    <option value="essay">Ensaio</option>
                    <option value="children">Ensaio Infantil</option>
                    <option value="newborn">Newborn</option>
                    <option value="fashion">Moda</option>
                    <option value="publicity">Publicidade</option>
                  </select>
                </div>
                <div>
                  <textarea
                    {...register("bio")}
                    error
                    placeholder="Fale um pouco sobre você..."
                    name="bio"
                  />
                </div>
              </div>
            )}
          </InputsContainer>
          <div className="container-button">
            <Button>Cadastre-se</Button>
            <p>
              Já possui uma conta? Faça seu
              <span onClick={() => history.push("/login")}>login</span>
            </p>
          </div>
        </form>
      </AnimationContainer>
    </Container>
  );
}

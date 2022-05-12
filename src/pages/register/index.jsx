import React from "react";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaEye } from "react-icons/fa";
import axios from "axios";

export default function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Digite seu nome!"),
    email: yup.string().email("Email inválido").required("Digite seu email!"),
    password: yup
      .string()
      .min(8, "Campo obrigatório")
      .required("Campo obrigatório!")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Necessita caractere capital, minusculo, número e especial"
      ),
    type: yup.string().required("Selecione um campo"),
    avatar: yup.string().required("Url da imagem inválido"),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "https://clickfinder-json-server.herokuapp.com/register",
      data,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   if (authenticated) {
  //     const username = localStorage.getItem("Hub:username");
  //     return <Redirect to={`/home/${username}`} />;
  //   }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h1>Crie sua conta</h1>
        </div>
        <Input
          register={register}
          placeholder={errors.email?.message || "Email"}
          name="email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          label="Senha"
          placeholder={errors.password?.message || "Senha"}
          type="password"
          name="password"
          icon={FaEye}
          error={errors.password?.message}
        />
        <Input
          register={register}
          placeholder={errors.name?.message || "Nome"}
          name="name"
          error={errors.name?.message}
        />

        <Input
          register={register}
          placeholder={errors.avatar?.message || "Link da sua foto"}
          name="avatar"
          error={errors.avatar?.message}
        />

        <select name="type" {...register("type")}>
          <option value="cliente">Cliente</option>
          <option value="photographer">Fotógrafo</option>
        </select>

        <div>
          <button>Registrar</button>
          <p>
            Já possui uma conta? Faça seu{" "}
            <span onClick={() => history.push("/login")}>login</span>
          </p>
        </div>
      </form>
    </>
  );
}

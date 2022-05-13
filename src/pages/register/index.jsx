import React, { useState } from "react";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaEye } from "react-icons/fa";
import requestApi from "../../services/API";
import SelectStates from "../../components/SelectStates";

export default function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Digite seu nome completo!"),
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
    avatar: yup.string(), //.required("Url da imagem inválido"),
    states: yup.string(),
    phone: yup.string(),
    bio: yup.string(),
  });

  const history = useHistory();
  const [showInputs, setShowInputs] = useState(false);

  const onSubmitFunction = (data) => {
    console.log(data);
    requestApi
      .post("register", data)
      .then((show) => {
        console.log(show);
        return history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h1>Crie sua conta</h1>
        </div>
        <Input
          register={register}
          placeholder={errors.name?.message || "Nome"}
          name="name"
          error={errors.name?.message}
        />

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
          type="number"
          placeholder={errors.phone?.message || "(xx) xxxxx-xxxx"}
          name="number"
          error={errors.phone?.message}
        />
        <div>
          <SelectStates register={register} name="states" />
        </div>
        <select
          name="type"
          {...register("type")}
          onChange={(e) =>
            e.target.value === "photographer"
              ? setShowInputs(true)
              : setShowInputs(false)
          }
        >
          <option value="cliente">Cliente</option>
          <option value="photographer">Fotógrafo</option>
        </select>

        {showInputs && (
          <div>
            <div>
              <select name="tags" {...register("tags")}>
                <option value="casamentos">Casamentos</option>
                <option value="ensaios">Ensaios</option>
                <option value="newborn">Newborn</option>
                <option value="eventos">Eventos</option>
                <option value="retratos">Retratos</option>
              </select>
            </div>
            <div>
              <textarea
                {...register("bio")}
                error
                placeholder="Fale um pouco sobre você"
                name="bio"
              />

              <Input
                register={register}
                placeholder={errors.avatar?.message || "Link da sua foto"}
                name="avatar"
                error={errors.avatar?.message}
              />
            </div>
          </div>
        )}

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

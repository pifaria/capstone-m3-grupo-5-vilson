import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";

export default function Input({
  label,
  icon: Icon,
  register,
  error,
  name,
  ...rest
}) {
  const [show, setShow] = useState("password");

  const teste = () => {
    show === "text" ? setShow("password") : setShow("text");
  };
  return (
    <div>
      <input
        {...register(name)}
        {...rest}
        type={label === "Senha" || label === "Confirmar senha" ? show : "text"}
      />
      {Icon ? (
        show === "text" ? (
          <Icon onClick={teste} />
        ) : (
          <BsEyeSlashFill onClick={teste} />
        )
      ) : null}
    </div>
  );
}
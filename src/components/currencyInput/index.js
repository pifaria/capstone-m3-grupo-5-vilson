import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

const defaultMaskOptions = {
  prefix: "R$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

function CurrencyInput({ maskOptions, ...inputProps }) {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return (
    <MaskedInput
      mask={[
        "R$",
        /[0-9]/,
        /[0-9]/,
        ".",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ",",
        /[0-9]/,
        /[0-9]/,
      ]}
      {...inputProps}
    />
  );
}

export default CurrencyInput;

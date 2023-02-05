import { useState } from "react";
import ValidateInfo from "./ValidateInfo";

const useForm = () => {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cardType: "",
    cardExpiration: "",
    cardSecurityCode: "",
    cardPostalCode: "",
    focus: "",
  });

  const [errors, setErrors] = useState({});

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === "cardSecurityCode" ? "cvc" : e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidateInfo(values));
  };

  return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm;

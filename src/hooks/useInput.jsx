import { useState } from "react";

export default function useInput(defaultValue,validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueISValid = validationFn(enteredValue)

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }

  function handleInputBlur(identifier) {
    setDidEdit(true);
  }
  return{
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueISValid
  }
}

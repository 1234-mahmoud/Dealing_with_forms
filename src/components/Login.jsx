import { useState } from "react";
import useInput from "../hooks/useInput";
import {hasMinLength,isEmail} from "../util/validation";
export default function Login() {
  const {
    value: emilValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(enteredValues.password, 6);

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevVal) => ({
  //     ...prevVal,
  //     [identifier]: value,
  //   }));

  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            value={emilValue}
            onError={emailIsInvalid}
            onChange={handleEmailChange}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button" className="button">
          Login
        </button>
        {/**
           if we not write type="button" the default is submit 
           and with this method we prevent the default behavior "submiting the form " 
           */}
      </p>
      <h4>user email is: {enteredValues.email}</h4>
      <h4>user password is: {enteredValues.password}</h4>
    </form>
  );
}

/**
             What does [identifier]: value mean?
      This syntax is called a computed property name in JavaScript. 
      It allows you to dynamically 
      set the key of an object based on the value of a variable.
      
      ------------------------------------example--------------------------
       Example:
      js
      Copy
      Edit
      const identifier = "email";
      const value = "user@example.com";
      
      const obj = {
        [identifier]: value
      };
      
      console.log(obj); // Output: { email: "user@example.com" }
      Without the square brackets, it would be interpreted as a literal key name:
      
      js
      Copy
      Edit
      const obj = {
        identifier: value
      };
      
      console.log(obj); // Output: { identifier: "user@example.com" } ❌ Not what we want
             */

import { useState } from "react";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prevVal) => ({
      ...prevVal,
      [identifier]: value,

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
    }));
  }

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
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
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

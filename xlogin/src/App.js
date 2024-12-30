import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ username: "", password: "" });
  const [loginStatus, setLoginStatus] = useState({ isValid: false, tried: false });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const isUserValid = (username, password) => {
    return username === "user" && password === "password";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = isUserValid(data.username, data.password);
    setLoginStatus({ isValid, tried: true });
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={data.username}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div>
      <h1>Login Page</h1>
      {loginStatus.tried && !loginStatus.isValid && <p>Invalid username or password</p>}
      {loginStatus.isValid ? (
        <p>Welcome, {data.username}!</p>
      ) : (
        renderForm()
      )}
    </div>
  );
}

export default App;

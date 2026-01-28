import { useState } from "react";
import AppInput from "./AppInput";
import AppButton from "./AppButton";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameClass = username.length <= 5 ? "input-error" : "input";
  const passwordClass = password.length <= 5 ? "input-error" : "input";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass === "input-error" || passwordClass === "input-error") {
      alert("Please fill out all fields");
      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }
  return (
    <main>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        {/* <input
          className={usernameClass}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        /> */}
        <AppInput type="text" value={username} className={usernameClass} setName={setUsername} />
        <br />
        {/* <input
          className={passwordClass}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /> */}
        <AppInput type="password" value={password} className={passwordClass} setName={setPassword} />
        <br />
        {/* <button type="submit" className="btn">
          Login
        </button> */}
        <AppButton>Register</AppButton>
        <AppButton>Login</AppButton>
      </form>
    </main>
  );
}

export default App;

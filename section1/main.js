function App() {
  let [userName, setUserName] = React.useState("");
  let [password, setPassword] = React.useState("");
  let usernameClass = userName.length <= 2 && userName.length != 0 ? "input-error" : "";
  let passwordClass = password.length <= 2 && password.length != 0 ? "input-error" : "";
  function handleSubmit(event) {
    event.preventDefault();
    if (usernameClass.length != 0 || passwordClass.length != 0) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Username: ${userName}, Password: ${password}`);
    setUserName("");
    setPassword("");
  }
  return (
    <main
      style={{
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <h1>Hello, World!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={usernameClass}
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          placeholder="miniyk"
        ></input>
        <input
          className={passwordClass}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        ></input>
        <button type="submit">Submit</button>
        <p>
          <span>{userName}</span>:<span>{password}</span>
        </p>
      </form>
    </main>
  );
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const adviceURL = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);
    let response;
    try {
      response = await fetch(adviceURL);
    } catch (error) {
      setAdvice(error.message);
      console.log(error.stack);
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setIsLoading(false);
    setAdvice(data.slip.advice);
  }

  useEffect(() => getAdvice, []);

  return (
    <>
      <h1>Advice</h1>
      <div>{isLoading ? "Loading..." : advice}</div>
      <button disabled={isLoading} onClick={getAdvice}>
        Get Advice
      </button>
    </>
  );
}

export default App;

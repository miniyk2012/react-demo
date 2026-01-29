import useSWR from "swr";
import useTime from "./useTime";

function App() {
  const adviceURL = "https://api.adviceslip.com/advice";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isValidating, mutate: getAdvice } = useSWR(adviceURL, fetcher);
  const time = useTime();
  return (
    <main>
      <p>{time}</p>
      <h1>Advice App</h1>
      <p>{isValidating ? "Loading..." : data.slip?.advice}</p>
      <button disabled={isValidating} onClick={getAdvice}>
        Get Advice
      </button>
    </main>
  );
}

export default App;

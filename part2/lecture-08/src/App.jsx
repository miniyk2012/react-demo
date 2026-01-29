import useSWR from "swr";

import "./App.css";

function App() {
  const adviceURL = "https://api.adviceslip.com/advice";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isValidating, mutate: getAdvice } = useSWR(adviceURL, fetcher);

  return (
    <>
      <h1>Advice</h1>
      <div>{isValidating ? "Loading..." : data?.slip?.advice}</div>
      <button disabled={isValidating} onClick={getAdvice}>
        Get Advice
      </button>
    </>
  );
}

export default App;

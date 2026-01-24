/*
  1. Bind the input/select to the states
  2. Change the circle styles based on the states

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  let [isPurple, setIsPurple] = React.useState(false);
  let [textColor, setTextColor] = React.useState("");
  let [circleSize, setCircleSize] = React.useState(150);
  let [circleRotate, setCircleRotate] = React.useState(0);

  let circleColor = isPurple ? "purple" : "";
  let circleClass = `circle ${textColor}`;

  return (
    <main>
      <label>
        Purple
        <input type="checkbox" checked={isPurple} onChange={(e) => setIsPurple(e.target.checked)} />
      </label>

      <label>
        text color
        <select onChange={(e) => setTextColor(e.target.value)}>
          <option value="text-white" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input type="number" value={circleSize} onChange={(e) => setCircleSize(e.target.value)} />
      </label>

      <label>
        Circle Rotate
        <input type="number" value={circleRotate} onChange={(e) => setCircleRotate(e.target.value)} />
      </label>
      <div
        className={circleClass}
        style={{
          backgroundColor: circleColor,
          height: `${circleSize}px`,
          width: `${circleSize}px`,
          transform: `rotate(${circleRotate}deg)`,
        }}
      >
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);

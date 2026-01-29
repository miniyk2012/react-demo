function AppLabel({ value, setValue, children }) {
  return (
    <label>
      {children}
      <input type="number" value={value} onChange={(event) => setValue(event.target.value)} />
    </label>
  );
}

export default AppLabel;

function AppSelection({ value, setValue }) {
  return (
    <select onChange={(event) => setValue(event.target.value)} value={value}>
      <option value="" selected>
        White
      </option>
      <option value="text-black">Black</option>
      <option value="text-orange">Orange</option>
    </select>
  );
}

export default AppSelection;

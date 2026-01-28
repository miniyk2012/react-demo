function AppInput(props) {
  const { type, value, className, setName } = props;
  return <input className={className} type={type} value={value} onChange={(event) => setName(event.target.value)} />;
}

export default AppInput;

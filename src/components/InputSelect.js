const InputSelect = (props) => {
  const handleSelectChange = (event) => {
   
  props.selectChange(props.selectName, event.target.checked);
};
  return (
    <label className="InputSelectLabel">
      <input
        type="checkbox"
        onClick={handleSelectChange}
        defaultChecked
      ></input>
      {props.selectText}
    </label>
  );
};

export default InputSelect;

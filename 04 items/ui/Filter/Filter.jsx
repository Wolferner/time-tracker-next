const FilterCompanent = ({
  onChangeParametr,
  selectValue,
  label,
  optionsArray,
}) => {
  const valueChangeHandler = (event) => {
    onChangeParametr(event.target.value);
  };

  return (
    <div>
      <div>
        <label>{label}</label>
        <select value={selectValue} onChange={valueChangeHandler}>
          {optionsArray.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterCompanent;

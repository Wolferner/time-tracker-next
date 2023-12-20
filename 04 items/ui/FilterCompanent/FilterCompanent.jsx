import styles from "./FilterCompanent.module.css";

const FilterComponent = ({ onChangeParametr, selectValue, label, options }) => {
  const valueChangeHandler = (event) => {
    onChangeParametr(event.target.value);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__control}>
        <label>{label}</label>
        <select
          value={selectValue}
          onChange={valueChangeHandler}
          // STYLE IN MODULE CSS ALSO NEED TO FIX
          style={{ display: "block!important" }}
        >
          {Object.keys(options).map((key) => {
            return (
              <option key={key + 1} value={options[key]}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;

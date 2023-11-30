import { useState } from "react";
import styles from "./TextField.module.css";

const TextField = ({ placeholder, classNames, onBlurCallback }) => {
  const [inputTitle, setInputTitle] = useState("");

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const inputBlurHandler = () => {
    onBlurCallback({
      title: inputTitle,
    });
  };

  return (
    <input
      placeholder={placeholder}
      className={`${styles.TextField} ${classNames} `}
      onChange={titleChangeHandler}
      value={inputTitle}
      onBlur={inputBlurHandler}
    />
  );
};

export default TextField;

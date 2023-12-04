import { useEffect, useState } from "react";
import styles from "./TextDescription.module.css";

const TextDescription = ({
  placeholder,
  classNames,
  onBlurCallback,
  value,
}) => {
  console.log("Description render");
  const [isEditing, setIsEditing] = useState(false);
  const [textAreaDescription, setTextAreaDescription] = useState("");

  useEffect(() => {
    setTextAreaDescription(value);
  }, [value]);

  const descriptionChangeHandler = (event) => {
    setTextAreaDescription(event.target.value);
  };

  const sendTextHandler = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
    onBlurCallback({
      description: textAreaDescription,
    });
  };

  const togleHandler = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      {isEditing ? (
        <div
          className={`${styles.TextDescriprtion} ${classNames} input-field col s12`}
        >
          <textarea
            id="textarea1"
            className=" materialize-textarea"
            onChange={descriptionChangeHandler}
            onBlur={sendTextHandler}
            value={textAreaDescription}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div
          onClick={togleHandler}
          className={`${styles.TextDescriprtion} ${classNames} col s12`}
        >
          {textAreaDescription ? textAreaDescription : "Your text must be here"}
        </div>
      )}
    </>
  );
};

export default TextDescription;

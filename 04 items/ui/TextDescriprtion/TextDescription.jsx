import { useState } from "react";
import styles from "./TextDescription.module.css";

const TextDescription = ({ placeholder, classNames, onBlurCallback }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textAreaDescription, setTextAreaDescription] = useState("");

  const descriptionChangeHandler = (event) => {
    setTextAreaDescription(event.target.value);
  };

  const togleHandler = () => {
    setIsEditing(!isEditing);
    onBlurCallback({
      description: textAreaDescription,
    });
  };
  return (
    <>
      {isEditing ? (
        <div className={`${styles.TextDescriprtion} input-field col s12`}>
          <textarea
            id="textarea1"
            className=" materialize-textarea"
            onChange={descriptionChangeHandler}
            onBlur={togleHandler}
            value={textAreaDescription}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div
          onClick={togleHandler}
          className={`${styles.TextDescriprtion} col s12`}
        >
          {textAreaDescription ? textAreaDescription : "Your text must be here"}
        </div>
      )}
    </>
  );
};

export default TextDescription;

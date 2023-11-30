import React, { useContext, useEffect, useState } from "react";
import styles from "./Task.module.css";

const TitleDescriptionSet = ({ onGetTitle, onGetDescription }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const togleHandler = () => {
    setIsEditing(!isEditing);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
    onGetDescription();
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className={`${styles.textArea} card-content white-text`}>
      <input
        placeholder="Your Title"
        className="card-title"
        onChange={titleChangeHandler}
        value={title}
      />
      {isEditing ? (
        <div className={`${styles.cardContent} input-field col s12`}>
          <textarea
            id="textarea1"
            className=" materialize-textarea"
            onChange={descriptionChangeHandler}
            onBlur={togleHandler}
            value={description}
            placeholder="Your text must be here"
          />
        </div>
      ) : (
        <div onClick={togleHandler} className={`${styles.cardContent} col s12`}>
          {description ? description : "Your text must be here"}
        </div>
      )}
    </form>
  );
};

export default TitleDescriptionSet;

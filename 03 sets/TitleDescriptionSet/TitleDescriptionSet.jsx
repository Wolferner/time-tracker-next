"use client";

import React, { useEffect, useState } from "react";
import styles from "@/03 sets/TitleDescriptionSet/TitleDescriptionSet.module.css";
import TextField from "@/04 items/ui/TextField/TextField";
import TextDescription from "@/04 items/ui/TextDescriprtion/TextDescription";

const TitleDescriptionSet = ({ onBlurCallback }) => {
  console.log("TitleDescription Render");

  const [titleDescription, setTitleDescription] = useState({
    title: "",
    description: "",
  });

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  useEffect(() => {
    setTitleDescription((prev) => {
      return { ...prev, title: titleInput, description: descriptionInput };
    });

    onBlurCallback(titleDescription);
  }, [titleInput, descriptionInput]);

  const getTitleHandler = (title) => {
    setTitleInput(title);
  };
  const getDescriptionHandler = (description) => {
    setDescriptionInput(description);
  };

  return (
    <form className={`${styles.TitleDescriptionSet} card-content white-text`}>
      <TextField placeholder="Yor Title" onBlurCallback={getTitleHandler} />
      <TextDescription
        placeholder="Your text must be here"
        onBlurCallback={getDescriptionHandler}
      />
    </form>
  );
};

export default TitleDescriptionSet;

import { useState, useEffect } from "react";

const useModals = (deleteFunc) => {
  const [isShownForm, setIsShownForm] = useState(false);
  const [isShowEditingWindow, setIsShownEditingWindow] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const [valueDeleted, setValueDeleted] = useState(false);

  const editValueHandler = (value) => {
    setCurrentValue(value);
    setIsShownEditingWindow((prev) => !prev);
  };

  const hideFormHandler = () => {
    setIsShownForm((prev) => !prev);
  };

  const deleteValueHandler = (id) => {
    deleteFunc(id);
    setValueDeleted((prev) => !prev);
  };

  return {
    isShownForm,
    isShowEditingWindow,
    currentValue,
    valueDeleted,
    editValueHandler,
    hideFormHandler,
    deleteValueHandler,
  };
};

export default useModals;

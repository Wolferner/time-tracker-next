import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ProjectTracker = ({ value, onBlurCallback }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [clientData, setClientData] = useState({
    client: "",
    project: "",
    sub_project: "",
  });

  // useEffect(() => {
  //   setClientData({
  //     client: value.client,
  //     project: value.project,
  //     sub_project: value.sub_project,
  //   });
  // }, [value]);

  const togleVisibility = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  const changeFieldHandler = (data, fieldName) => {
    setClientData((prev) => {
      return { ...prev, [fieldName]: data };
    });
  };

  const formBlurHandler = () => {
    onBlurCallback(clientData);
  };
  return (
    <form onBlur={formBlurHandler}>
      <span onClick={togleVisibility}>
        <h3>Project Tracker</h3>
        {isVisible ? <RemoveIcon /> : <AddIcon />}
      </span>
      {isVisible && (
        <div>
          <input
            onChange={(event) =>
              changeFieldHandler(event.target.value, "client")
            }
            placeholder="Client"
            type="text"
          ></input>
          <input
            onChange={(event) =>
              changeFieldHandler(event.target.value, "project")
            }
            placeholder="Project"
            type="text"
          ></input>
          <input
            onChange={(event) =>
              changeFieldHandler(event.target.value, "sub_project")
            }
            placeholder="Sub-Project"
            type="text"
          ></input>
        </div>
      )}
    </form>
  );
};

export default ProjectTracker;

import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

const IncidentTracker = ({ value, onBlurCallback }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [incidentData, setIncidentData] = useState({
    inc: "",
    incTitle: "",
    incDescription: "",
    businessName: "",
    businessSurename: "",
    businessEmail: "",
    supportName: "",
    supportSurename: "",
    supportEmail: "",
    rfc: "",
    crq: "",
    charm: "",
  });
  const [isSystemChanges, setIsSystemChanges] = useState(false);

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
    setIncidentData((prev) => {
      return { ...prev, [fieldName]: data };
    });
  };

  const formBlurHandler = () => {
    onBlurCallback(incidentData);
  };

  const systemChangesHandler = () => {
    setIsSystemChanges((prev) => {
      return !prev;
    });
  };
  return (
    <form onBlur={formBlurHandler}>
      <span onClick={togleVisibility}>
        <h6>Incident Tracker</h6>
        {isVisible ? <RemoveIcon /> : <AddIcon />}
      </span>
      {isVisible && (
        <>
          <fieldset>
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "inc")
              }
              placeholder="Incident #"
              type="text"
            />
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "incTitle")
              }
              placeholder="Title"
              type="text"
            />
            <textarea
              onChange={(event) =>
                changeFieldHandler(event.target.value, "incDescription")
              }
              placeholder="Description"
            />
          </fieldset>

          <fieldset>
            <legend>Business</legend>
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "businessName")
              }
              placeholder="Name"
              type="text"
            />
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "businessSurename")
              }
              placeholder="Surename"
              type="text"
            />
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "businessEmail")
              }
              placeholder="E-mail"
              type="text"
            />
          </fieldset>

          <fieldset>
            <legend>Support Team</legend>
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "supportName")
              }
              placeholder="Name"
              type="text"
            />
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "supportSurename")
              }
              placeholder="Surename"
              type="text"
            />
            <input
              onChange={(event) =>
                changeFieldHandler(event.target.value, "supportEmail")
              }
              placeholder="E-mail"
              type="text"
            />
          </fieldset>

          <FormControlLabel
            control={
              <Switch
                checked={isSystemChanges}
                onChange={systemChangesHandler}
                name="isSystemChanges"
              />
            }
            label=" System Changes"
          />

          {isSystemChanges && (
            <fieldset>
              <legend>System Changes</legend>
              <input
                onChange={(event) =>
                  changeFieldHandler(event.target.value, "rfc")
                }
                placeholder="RFC"
                type="text"
              />
              <input
                onChange={(event) =>
                  changeFieldHandler(event.target.value, "crq")
                }
                placeholder="CRQ"
                type="text"
              />
              <input
                onChange={(event) =>
                  changeFieldHandler(event.target.value, "charm")
                }
                placeholder="Charm"
                type="text"
              />
            </fieldset>
          )}
        </>
      )}
    </form>
  );
};

export default IncidentTracker;

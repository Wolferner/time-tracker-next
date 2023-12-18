"use client";

import { useState } from "react";
import styles from "./CreateProjectForm.module.css";
import Modal from "@/04 items/ui/Modal/Modal";

const initialState = {
  project_business_id: "",
  name: "",
  acronym: "",
  planned_hours: "",
  clients: "",
  status: "",
  priority: "",
};

const CreateClientForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const changeFormDataHandler = (value, field) => {
    setFormData((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const sendFormHandler = async (e) => {
    e.preventDefault();
    try {
      await addNewProject(JSON.stringify(formData));
      // console.log(formData);
      setFormData(initialState);
      props.onHideForm();
    } catch {
      console.log(`Problem with posting NewClient  error: ${error}`);
    }
  };
  return (
    <Modal onHideForm={props.onHideForm}>
      <form onSubmit={sendFormHandler}>
        <div className={styles.control}>
          <label htmlFor="project_business_id">Project Id</label>
          <input
            onChange={(e) =>
              changeFormDataHandler(e.target.value, "project_business_id")
            }
            value={formData.project_business_id}
            id="project_business_id"
            type="number"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "name")}
            value={formData.name}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="acronym">Acronym</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "acronym")}
            value={formData.acronym}
            id="acronym"
            type="number"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="planned_hours">Planned Hours</label>
          <input
            onChange={(e) =>
              changeFormDataHandler(e.target.value, "planned_hours")
            }
            value={formData.planned_hours}
            id="planned_hours"
            type="email"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="clients">Clients</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "clients")}
            value={formData.clients}
            id="clients"
            type="number"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="status">Status</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "status")}
            value={formData.status}
            id="status"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="priority">Priority</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "priority")}
            value={formData.priority}
            id="priority"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.actions}>
          <button className={styles.submit}>podtverditj</button>
          <button type="button" onClick={props.onHideForm}>
            otmenitj
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateClientForm;

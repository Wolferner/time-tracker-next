"use client";

import { useState } from "react";
import styles from "./CreateClientForm.module.css";
import Modal from "@/04 items/ui/Modal/Modal";
import { addNewClient } from "../../data/ClientDashboard.data";

const initialState = {
  clientId: "",
  name: "",
  regNumber: "",
  email: "",
  phone: "",
  status: "",
  notes: "",
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
      await addNewClient(JSON.stringify(formData));
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
          <label htmlFor="clientId">Client Id</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "clientId")}
            value={formData.clientId}
            id="clientId"
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
          <label htmlFor="regNumber">Reg.Number</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "regNumber")}
            value={formData.regNumber}
            id="regNumber"
            type="number"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "email")}
            value={formData.email}
            id="email"
            type="email"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "phone")}
            value={formData.phone}
            id="phone"
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

        <div className={styles.control}>
          <label htmlFor="notes">Notes</label>
          <input
            onChange={(e) => changeFormDataHandler(e.target.value, "notes")}
            value={formData.notes}
            id="notes"
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

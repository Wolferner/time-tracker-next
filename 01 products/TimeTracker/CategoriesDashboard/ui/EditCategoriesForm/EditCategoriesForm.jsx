"use client";

import Modal from "@/04 items/ui/Modal/Modal";
import styles from "./EditClientForm.module.css";
import { useEffect, useState } from "react";
import { updateCreatedClient } from "../../data/ClientDashboard.data";
import Button from "@mui/material/Button";

const EditCategorieForm = ({ data, onHideWindow }) => {
  // console.log(` editClientComponent ${data}`);
  const initialState = {
    ...data,
  };

  const [changedCategorieData, setChangedCategorieData] =
    useState(initialState);

  const changeDataHandler = (value, field) => {
    setChangedCategorieData((prev) => ({ ...prev, [field]: value }));
  };

  const sendChangedDataHandler = (e) => {
    e.preventDefault();
    // console.log("click");
    updateCreatedCategorie(JSON.stringify(changedCategorieData));
    onHideWindow();
  };

  return (
    <Modal onHideForm={onHideWindow}>
      <form onSubmit={sendChangedDataHandler}>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "name")}
            value={changedCategorieData.name}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="regNumber">Reg.Number</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "regNumber")}
            value={changedCategorieData.regNumber}
            id="regNumber"
            type="number"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="email">E-Mail</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "email")}
            value={changedCategorieData.email}
            id="email"
            type="email"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "phone")}
            value={changedCategorieData.phone}
            id="phone"
            type="number"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="status">Status</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "status")}
            value={changedCategorieData.status}
            id="status"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="priority">Priority</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "priority")}
            value={changedCategorieData.priority}
            id="priority"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="notes">Notes</label>
          <input
            onChange={(e) => changeDataHandler(e.target.value, "notes")}
            value={changedCategorieData.notes}
            id="notes"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.actions}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button onClick={onHideWindow} variant="contained" type="button">
            Cancle
          </Button>
          {/* <button className={styles.submit}>podtverditj</button> */}
          {/* <button type="button" onClick={onHideWindow}>
            otmenitj
          </button> */}
        </div>
      </form>
    </Modal>
  );
};

export default EditClientForm;

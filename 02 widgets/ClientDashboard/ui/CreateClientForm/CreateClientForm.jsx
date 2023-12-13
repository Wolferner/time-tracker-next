"use client";

import styles from "./CreateClientForm.module.css";
import Modal from "@/04 items/ui/Modal/Modal";

const CreateClientForm = (props) => {
  return (
    <Modal onHideCart={props.onHideCart}>
      <form>
        <div className={styles.control}>
          <label htmlFor="name"> Name</label>
          <input
            // onChange={inputNameChangeHandler}
            // value={inputName}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="name"> Name</label>
          <input
            // onChange={inputNameChangeHandler}
            // value={inputName}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="name"> Name</label>
          <input
            // onChange={inputNameChangeHandler}
            // value={inputName}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="name"> Name</label>
          <input
            // onChange={inputNameChangeHandler}
            // value={inputName}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="name"> Name</label>
          <input
            // onChange={inputNameChangeHandler}
            // value={inputName}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.control}>
          <label htmlFor="name"> Name</label>
          <input
            // onChange={inputNameChangeHandler}
            // value={inputName}
            id="name"
            type="text"
          ></input>
          {/* {hasNameInputError && <p>vvedite imja</p>} */}
        </div>

        <div className={styles.actions}>
          <button className={styles.submit}>podtverditj</button>
          <button type="button">otmenitj</button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateClientForm;

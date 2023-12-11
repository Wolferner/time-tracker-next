"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./InfoBlock.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const InfoBlock = ({ value, onBlurCallback }) => {
  // console.log("infoBlock render");
  const initialState = {
    customer: "",
    project: "",
    inc: "",
    tags: [],
  };
  const [isHiden, setIsHiden] = useState(false);
  const [infoBlockData, setInfoBlockData] = useState(initialState);

  useEffect(() => {
    setInfoBlockData({
      customer: value.customer,
      project: value.project,
      inc: value.inc,
      tags: value.tags,
    });
  }, [value]);

  const showStateHandler = (event) => {
    event.preventDefault();
    setIsHiden(!isHiden);
  };

  const inputChangeHander = (fieldName, value) => {
    setInfoBlockData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const formBlurHandler = () => {
    onBlurCallback(infoBlockData);
  };

  return (
    <div className={`${styles.InfoBlock}`}>
      <div>
        <a
          href=""
          className={`${styles.settings}  secondary-content`}
          onClick={showStateHandler}
        >
          <SettingsApplicationsIcon />
        </a>
      </div>

      <div
        className={`${styles.rowContent} ${
          isHiden ? styles.disabled : styles.enabled
        } row`}
      >
        <form
          onBlur={formBlurHandler}
          className={`${styles.formCont} col s12 m6`}
        >
          <h6>Additional Info</h6>
          <div className="row" id="info_label">
            <div className={`${styles.inputBox} input-field col s12`}>
              <AccountBoxIcon />
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                onChange={(e) => inputChangeHander("customer", e.target.value)}
                value={infoBlockData.customer}
              />
              <label htmlFor="icon_prefix">Customer</label>
            </div>

            <div className={`${styles.inputBox} input-field col s12`}>
              <BackupTableIcon />
              <input
                id="icon_project"
                type="text"
                className="validate"
                onChange={(e) => inputChangeHander("project", e.target.value)}
                value={infoBlockData.project}
              />
              <label htmlFor="icon_project">Project</label>
            </div>

            <div className={`${styles.inputBox} input-field col s12`}>
              <AccountTreeIcon />
              <input
                id="icon_incident"
                type="text"
                className="validate"
                onChange={(e) => inputChangeHander("inc", e.target.value)}
                value={infoBlockData.inc}
              />
              <label htmlFor="icon_incident">INC</label>
            </div>

            <div className="col">
              <Autocomplete
                onChange={(e, allTags) => inputChangeHander("tags", allTags)}
                value={infoBlockData.tags}
                multiple
                id="tags-filled"
                options={top100Films.map((option) => option.title)}
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => {
                    const { key, ...otherProps } = getTagProps({ index });
                    return (
                      <Chip
                        variant="outlined"
                        key={key}
                        label={option}
                        {...otherProps}
                      />
                    );
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="freeSolo"
                    placeholder="Favorites"
                  />
                )}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoBlock;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
];

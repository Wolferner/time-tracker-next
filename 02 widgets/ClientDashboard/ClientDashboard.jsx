"use client";

import styles from "./ClientDashboard.module.css";
import { useState } from "react";
import TextField from "@/04 items/ui/TextField/TextField";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CreateClientForm from "./ui/CreateClientForm/CreateClientForm";
import Button from "@mui/material/Button";

const clientTable = [
  {
    clientId: 1,
    name: "some name",
    regNumber: 21,
    email: "sdasd@sdsad.lk",
    phone: 123213213,
    status: "archived",
    note: "sdfsdfsd",
    priority: "important",
  },
  {
    clientId: 1,
    name: "some name",
    regNumber: 21,
    email: "sdasd@sdsad.lk",
    phone: 123213213,
    status: "archived",
    note: "sdfsdfsd",
    priority: "important",
  },
];

const ClientDashboard = () => {
  const [isShownForm, setIsShownForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const editClientHandler = (index) => {};
  const deleteClientHandler = (index) => {};
  const createClientHandler = () => {
    setIsShownForm((prev) => {
      return !prev;
    });
  };
  const hideFormHandler = () => {
    setIsShownForm((prev) => {
      return !prev;
    });
  };
  const searchInputHandler = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="row">
      {isShownForm && <CreateClientForm onHideForm={hideFormHandler} />}
      <div className="container">
        <div className="col s12">
          <TextField
            placeholder={"Search"}
            value={searchInput}
            onBlurCallback={searchInputHandler}
          />
          <Button onClick={createClientHandler} variant="contained">
            Create New
          </Button>
          {/* <button onClick={createClientHandler}> Create New</button> */}
        </div>
        <div className="col s12">
          <table>
            <thead>
              <tr>
                <th>Edit</th>
                <th>Client Id</th>
                <th>Name</th>
                <th>Reg. Number</th>
                <th>E-Mail</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Notes</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {clientTable.map((client, index) => (
                <tr key={index}>
                  <td>
                    <IconButton
                      onClick={editClientHandler(index)}
                      aria-label="delete"
                      size="small"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </td>
                  <td>{client.clientId}</td>
                  <td>{client.name}</td>
                  <td>{client.regNumber}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.status}</td>
                  <td>{client.note}</td>
                  <td>{client.priority}</td>
                  <td>
                    <IconButton
                      onClick={deleteClientHandler(index)}
                      aria-label="edit"
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

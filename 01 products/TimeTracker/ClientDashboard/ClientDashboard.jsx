"use client";

import styles from "./ClientDashboard.module.css";
import { useState, useEffect } from "react";
import TextField from "@/04 items/ui/TextField/TextField";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CreateClientForm from "./ui/CreateClientForm/CreateClientForm";
import Button from "@mui/material/Button";
import EditClientForm from "./ui/EditClientForm/EditClientForm";
import {
  deleteCurrentClient,
  getAllClients,
} from "./data/ClientDashboard.data";

const ClientDashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isShownForm, setIsShownForm] = useState(false);
  const [isShowEditingWindow, setIsShownEditingWindow] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [clientsTable, setClientsTable] = useState([]);
  const [clientDeleted, setClientDeleted] = useState(false);

  const fetchClients = async () => {
    try {
      const response = await getAllClients();
      const dataArray = Object.keys(response).map((key) => response[key]);
      setClientsTable(dataArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [isShownForm, isShowEditingWindow, clientDeleted]);

  const editClientHandler = (client) => {
    setCurrentClient(client);
    setIsShownEditingWindow((prev) => !prev);
  };

  const hideFormHandler = () => {
    setIsShownForm((prev) => !prev);
  };

  const deleteClientHandler = (id) => {
    deleteCurrentClient(id);
    setClientDeleted((prev) => !prev);
  };

  const searchInputHandler = (value) => {
    setSearchInput(value.title);
  };

  return (
    <div className="row">
      {isShownForm && <CreateClientForm onHideForm={hideFormHandler} />}
      {isShowEditingWindow && (
        <EditClientForm data={currentClient} onHideWindow={editClientHandler} />
      )}
      <div className="container">
        <div className="col s12">
          <TextField
            placeholder={"Search"}
            value={searchInput}
            onBlurCallback={searchInputHandler}
          />
          <Button onClick={hideFormHandler} variant="contained">
            Create New
          </Button>
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
              {clientsTable.map((client, index) => (
                <tr key={index}>
                  <td>
                    <IconButton
                      onClick={() => editClientHandler(client)}
                      aria-label="edit"
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </td>
                  <td>{client.clientId}</td>
                  <td>{client.name}</td>
                  <td>{client.regNumber}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.status}</td>
                  <td>{client.priority}</td>
                  <td>{client.note}</td>
                  <td>
                    <IconButton
                      onClick={() => deleteClientHandler(client.clientId)}
                      aria-label="delete"
                      size="small"
                    >
                      <DeleteIcon fontSize="inherit" />
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

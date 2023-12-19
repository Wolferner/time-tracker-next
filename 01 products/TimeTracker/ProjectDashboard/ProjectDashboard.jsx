"use client";

// import styles from "./ProjectDashboard.module.css";
import { useState, useEffect } from "react";
import TextField from "@/04 items/ui/TextField/TextField";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import useModals from "@/04 items/lib/hooks/use-modals";
import EditProjectForm from "./ui/EditProjectForm/EditProjectForm";
import CreateProjectForm from "./ui/CreateProjectForm/CreateProjectForm";
import {
  getAllProject,
  deleteCurrentProject,
} from "./data/ProjectDashboard.data";

const ProjectDashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [projectTable, setProjectTable] = useState([]);

  const {
    isShownForm,
    isShowEditingWindow,
    currentValue,
    valueDeleted,
    editValueHandler,
    hideFormHandler,
    deleteValueHandler,
  } = useModals(deleteCurrentProject);

  const fetchProjects = async () => {
    try {
      const response = await getAllProject();
      const dataArray = Object.keys(response).map((key) => response[key]);
      setProjectTable(dataArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [isShownForm, isShowEditingWindow, valueDeleted]);

  const searchInputHandler = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="row">
      {isShownForm && <CreateProjectForm onHideForm={hideFormHandler} />}
      {isShowEditingWindow && (
        <EditProjectForm data={currentValue} onHideWindow={editValueHandler} />
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
                <th>Project Id</th>
                <th>Name</th>
                <th>Acronym</th>
                <th>Planned Hours</th>
                <th>Clients</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {projectTable.map((project, index) => (
                <tr key={index}>
                  <td>
                    <IconButton
                      onClick={() => editValueHandler(project)}
                      aria-label="edit"
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </td>
                  <td>{project.project_business_id}</td>
                  <td>{project.name}</td>
                  <td>{project.acronym}</td>
                  <td>{project.planned_hours}</td>
                  <td>{project.clients}</td>
                  <td>{project.status}</td>
                  <td>{project.priority}</td>
                  <td>
                    <IconButton
                      onClick={() =>
                        deleteValueHandler(project.project_business_id)
                      }
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

export default ProjectDashboard;

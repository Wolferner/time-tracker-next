"use client";

// import styles from "./ProjectDashboard.module.css";
import { useState, useEffect } from "react";
import TextField from "@/04 items/ui/TextField/TextField";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import useModals from "@/04 items/lib/hooks/use-modals";
import {
  deleteCurrentCategory,
  getAllCategories,
  addNewCategory,
} from "./data/CategoriesDashboard.data";
import FilterCompanent from "@/04 items/ui/Filter/Filter";

const ProjectDashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("taskCategories");
  const [categoryInput, setCategoryInput] = useState("");
  const [categoryType, setCategoryType] = useState("taskCategories");

  const {
    isShownForm,
    isShowEditingWindow,
    valueDeleted,
    editValueHandler,
    hideFormHandler,
    deleteValueHandler,
  } = useModals(deleteCurrentCategory);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [isShownForm, isShowEditingWindow, valueDeleted]);

  const searchInputHandler = (value) => {
    setSearchInput(value);
  };

  const categoryChangeHandler = (event) => {
    setCategoryType(event.target.value);
  };

  const categoryInputHandler = (value) => {
    setCategoryInput(value.title);
  };

  const sendNewCategoryHandler = (event) => {
    event.preventDefault();
    try {
      const categoryData = { categorie: categoryInput, type: categoryType };
      addNewCategory(JSON.stringify(categoryData));
    } catch (error) {
      console.log(
        `Problem with sending new Categorie in CategoriesDashboard.jsx`
      );
    }
  };

  const filterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div className="row">
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
          {isShownForm && (
            <>
              <div>
                <label>Categorie</label>
                <select onChange={categoryChangeHandler} value={categoryType}>
                  <option value="taskCategories">Task</option>
                  <option value="projectCategories">Project</option>
                </select>
              </div>
              <TextField
                placeholder={"Categorie"}
                value={categoryInput}
                onBlurCallback={categoryInputHandler}
              />
              <Button
                onSubmit={sendNewCategoryHandler}
                variant="contained"
                type="submit"
              >
                Create New
              </Button>
            </>
          )}
        </div>

        <div className="col s12">
          <IconButton onClick={editValueHandler} aria-label="edit" size="small">
            <EditIcon fontSize="inherit" />
          </IconButton>

          <FilterCompanent
            onChangeParametr={filterChangeHandler}
            selectValue={filter}
            label="Categories Type"
            optionsArray={["Task", "Project"]}
          />
          <ul>
            {categories[filter].map((category, index) => {
              <li>
                {isShowEditingWindow ? (
                  <input type="text" value={category} />
                ) : (
                  category
                )}

                <IconButton
                  onClick={() => deleteValueHandler({ category, index })}
                  aria-label="delete"
                  size="small"
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;

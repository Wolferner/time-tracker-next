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
import FilterComponent from "@/04 items/ui/FilterCompanent/FilterCompanent";

const CategoriesDashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState({
    taskCategories: [],
    projectCategories: [],
  });
  const [filter, setFilter] = useState("taskCategories");

  const [categoryInput, setCategoryInput] = useState("");
  const [categoryType, setCategoryType] = useState("taskCategories");

  const [isEditing, setIsEditing] = useState(false);
  const [isShownForm, setIsShownForm] = useState(false);
  const [valueDeleted, setValueDeleted] = useState(false);

  const editValueHandler = () => {
    setIsEditing((prev) => !prev);
  };
  const showFormHandler = () => {
    setIsShownForm((prev) => !prev);
  };
  const deleteValueHandler = (id) => {
    deleteCurrentCategory(id);
    setValueDeleted((prev) => !prev);
  };

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
  }, [isShownForm, isEditing, valueDeleted]);

  const searchInputHandler = (value) => {
    setSearchInput(value.title);
  };

  const categoryChangeHandler = (type) => {
    setCategoryType(type);
  };

  const categoryInputHandler = (value) => {
    setCategoryInput(value.title);
  };

  const sendNewCategoryHandler = async (event) => {
    event.preventDefault();
    try {
      const categoryData = { category: categoryInput, type: categoryType };
      await addNewCategory(JSON.stringify(categoryData));
    } catch (error) {
      console.log(
        `Problem with sending new Categorie in CategoriesDashboard.jsx`
      );
    }
    setIsShownForm((prev) => !prev);
  };

  const filterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <>
      {console.log(categories[filter])}
      <div className="row">
        <div className="container">
          <div className="col s12">
            <TextField
              placeholder={"Search"}
              value={searchInput}
              onBlurCallback={searchInputHandler}
            />
            {!isShownForm && (
              <Button onClick={showFormHandler} variant="contained">
                Create New
              </Button>
            )}

            {isShownForm && (
              <>
                <FilterComponent
                  onChangeParametr={categoryChangeHandler}
                  selectValue={categoryType}
                  label="Category"
                  options={{
                    Task: "taskCategories",
                    Project: "projectCategories",
                  }}
                />

                <TextField
                  placeholder={"Categorie"}
                  value={categoryInput}
                  onBlurCallback={categoryInputHandler}
                />
                <Button onClick={sendNewCategoryHandler} variant="contained">
                  Send
                </Button>
                <Button onClick={showFormHandler} variant="contained">
                  Cancle
                </Button>
              </>
            )}
          </div>

          <div className="col s12">
            <IconButton
              onClick={editValueHandler}
              aria-label="edit"
              size="small"
            >
              <EditIcon fontSize="inherit" />
            </IconButton>

            <FilterComponent
              onChangeParametr={filterChangeHandler}
              selectValue={filter}
              label="Categories Type"
              options={{
                Task: "taskCategories",
                Project: "projectCategories",
              }}
            />
            <ul>
              {categories[filter].map((category, index) => {
                return (
                  <li key={index}>
                    {isEditing ? (
                      <input type="text" value={category} />
                    ) : (
                      <span>{category}</span>
                    )}

                    <IconButton
                      onClick={() => deleteValueHandler({ category, index })}
                      aria-label="delete"
                      size="small"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesDashboard;

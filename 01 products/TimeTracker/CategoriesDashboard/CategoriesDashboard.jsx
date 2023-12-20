"use client";

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

  const [filter, setFilter] = useState("taskCategories");
  const [categories, setCategories] = useState({
    taskCategories: [],
    projectCategories: [],
  });

  const [isShownForm, setIsShownForm] = useState(false);
  const [newCategory, setNewCategory] = useState({
    filterCategory: "taskCategories",
    inputCategory: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  // const [valueDeleted, setValueDeleted] = useState(false);

  const searchInputHandler = (value) => {
    setSearchInput(value.title);
  };

  // const deleteValueHandler = (id) => {
  //   deleteCurrentCategory(id);
  //   setValueDeleted((prev) => !prev);
  // };

  const filterChangeHandler = (filterValue) => {
    setFilter(filterValue);
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
  }, [isShownForm, isEditing]);

  const newCategoryHandler = (value, type) => {
    switch (type) {
      case "filterCategory":
        setNewCategory((prev) => ({
          filterCategory: value,
          inputCategory: prev.inputCategory,
        }));
        break;
      case "inputCategory":
        setNewCategory((prev) => ({
          filterCategory: prev.filterCategory,
          inputCategory: value.title,
        }));
        break;
    }
  };

  const sendNewCategoryHandler = async () => {
    try {
      const categoryData = {
        category: newCategory.inputCategory,
        type: newCategory.filterCategory,
      };
      await addNewCategory(JSON.stringify(categoryData));
    } catch (error) {
      console.log(
        `Problem with sending new Categorie in CategoriesDashboard.jsx`
      );
    }
    setIsShownForm((prev) => !prev);
    setNewCategory((prev) => ({
      filterCategory: prev.filterCategory,
      inputCategory: "",
    }));
  };

  const editValueHandler = () => {
    setIsEditing((prev) => !prev);
  };
  const showFormHandler = () => {
    setIsShownForm((prev) => !prev);
  };

  const inputChangeHandler = (index, value, filter) => {
    setCategories((prev) => ({
      taskCategories: [...prev.taskCategories],
      projectCategories: [...prev.projectCategories],
    }));
  };

  return (
    <>
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
                  onChangeParametr={(val) =>
                    newCategoryHandler(val, "filterCategory")
                  }
                  selectValue={newCategory.filterCategory}
                  label="Category"
                  options={{
                    Task: "taskCategories",
                    Project: "projectCategories",
                  }}
                />

                <TextField
                  placeholder={"Categorie"}
                  value={newCategory.inputCategory}
                  onBlurCallback={(val) =>
                    newCategoryHandler(val, "inputCategory")
                  }
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
                      <>
                        <Button
                          // onClick={}
                          variant="contained"
                        >
                          Update
                        </Button>
                        <input
                          type="text"
                          value={category}
                          onChange={(e) =>
                            inputChangeHandler(index, e.target.value, filter)
                          }
                        />
                      </>
                    ) : (
                      <span>{category}</span>
                    )}

                    <IconButton
                      // onClick={() => deleteValueHandler({ category, index })}
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

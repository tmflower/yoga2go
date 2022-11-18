// TODO: Each category needs to be clickable and reveal the poses in that category

import "../styles/CategoriesList.css";
import { Category } from "./Category";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await axios
        .get("https://lightning-yoga-api.herokuapp.com/yoga_categories")
        .then((res) => {
          setCategories(res.data.items);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getCategories();
  }, []);

  return (
    <>
      <h1 className="category-header">Choose a Category</h1>
      {categories
        ? categories.map((category) => (
            <NavLink to={`/categories/${category.name}`} key={category.id}>
              <Category
                key={category.id}
                name={category.name}
                description={category.description}
                id={category.id}
              />
            </NavLink>
          ))
        : "Loading..."}
    </>
  );
}

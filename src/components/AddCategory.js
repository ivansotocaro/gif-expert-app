import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cast) => [inputValue, ...cast]);
      setInputValue("");
    } else {
      alert("Tiene que ser mas de 2 letras");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={inputValue} onChange={handleOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

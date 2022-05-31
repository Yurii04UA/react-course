import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import "./SearchForm.scss";

const SearchForm = () => {
  return (
    <div className="searchForm">
      <Formik>
        <Form>
          <p>Or find a character by name:</p>
          <label htmlFor="character"></label>
          <input type="text" name="character" placeholder="Enter name" />
          <button type="submit" className="button button__main">
            <div className="inner">find</div>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;

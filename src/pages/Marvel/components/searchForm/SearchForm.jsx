import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import "./SearchForm.scss";
import useMarvelService from "../../services/MarvelService";

const SearchForm = () => {
  const { loading, error, getCharacterByName, clearError } = useMarvelService();
  const [char, setChar] = useState(null);

  // useEffect(() => {
  //    getCharacterByName('thor')
  // },[])

  const onCharLoaded = (char) => {
    setChar(char);
  };
  const updateChar = (char) => {
    clearError();
    getCharacterByName(char).then((char) => onCharLoaded(char));
  };
  const errorMessage = error ? (
    <div>
      ti huy <ErrorMessage />
    </div>
  ) : null;
  const result = !char ? null : char.length > 0 ? (
    <div>
      <div>There is! Visit {char[0].name}</div>
      <NavLink to={`characters/${char[0].id}`} >Visit page </NavLink>
    </div>
  ) : (
    <div>The char was not found. Check the name and try again</div>
  );
  return (
    <div className="searchForm">
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, "min 2").required("Required field"),
        })}
        onSubmit={({ name }) => updateChar(name)}
      >
        <Form>
          <p>Or find a character by name:</p>
          <p>{}</p>
          <Field type="text" name="name" placeholder="Enter name" />

          <button type="submit" className="button button__main" disabled={loading}>
            <div className="inner">find</div>
          </button>
          <ErrorMessage className="error" name="name" component="div" />
        </Form>
      </Formik>
      {result}
    </div>
  );
};

export default SearchForm;

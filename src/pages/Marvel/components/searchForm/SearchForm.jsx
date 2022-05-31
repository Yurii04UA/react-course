import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import "./SearchForm.scss";
import useMarvelService from "../../services/MarvelService";



const SearchForm = () => {
   const {loading,error,getCharacterByName} = useMarvelService()
   const [state,setState] = useState('')

useEffect(() => {
   getCharacterByName('thor')
},[])
  return (
    <div className="searchForm">
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, "ti huy").required("Required field"),
        })}
      >
        <Form>
          <p>Or find a character by name:</p>

          <Field type="text" name="name" placeholder="Enter name"  />

          <button type="submit" className="button button__main">
            <div className="inner">find</div>
          </button>
          <ErrorMessage className="error" name="name" component="div" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;

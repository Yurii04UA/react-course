import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Formik.scss";
import { NavLink } from "react-router-dom";

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = "Required field";
//   } else if (values.name.length < 2) {
//     errors.name = "Required field ti huy";
//   }

//   if (!values.email) {
//     errors.email = "Required field";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

const Taat = () => {
   return (
    <>
      <NavLink className="link container mb-3 w-75" to="/react-libraries">
        {" "}
        ← Back
      </NavLink>
      <Formik
        initialValues={{
          name: "",
          email: "",
          amount: 0,
          currency: "",
          text: "",
          terms: false,
        }}
        validationSchema= {
         Yup.object({
            name: Yup.string().min(2, "ti huy").required("Required field"),
            email: Yup.string().email("Invalid email").required("Required field"),
            amount: Yup.number()
              .min(5, "not less  that 5")
              .required("Required field"),
            currency: Yup.string().required("Choose currency"),
            text: Yup.string().min(10, "not less that 10 symbols"),
            terms: Yup.boolean("aaa")
              .required("Neobxodimo soglasie")
              .oneOf([true], "Agree"),
          })
        }
        onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
      >
        <Form className="form mt-5">
          <h2>Отправить пожертвование</h2>
          <label htmlFor="name">Ваше имя</label>
          <Field
            id="name"
            name="name"
            type="text"
          />
            <ErrorMessage className="error" name="name" component='div'/>
          <label htmlFor="email">Ваша почта</label>
          <Field
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage className="error" name="email" component='div'/>
          <label htmlFor="amount">Количество</label>
          <Field
            id="amount"
            name="amount"
            type="number"

          />
          <ErrorMessage className="amount" name="name" component='div'/>
          <label htmlFor="currency">Валюта</label>
          <Field
            id="currency"
            name="currency"
            as='select'
          >
            <option value="">Выберите валюту</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="RUB">RUB</option>
          </Field>
          <ErrorMessage className="amount" name="currency" component='div'/>
          <label htmlFor="text">Ваше сообщение</label>
          <Field
            id="text"
            name="text"
            as='textarea'
          />
          <ErrorMessage className="amount" name="texy" component='div'/>
          <label className="checkbox">
            <Field
              name="terms"
              type="checkbox"

            />
            Соглашаетесь с политикой конфиденциальности?
          </label>
          <ErrorMessage className="amount" name="terms" component='div'/>
          <button type="submit">Отправить</button>
        </Form>
      </Formik>
    </>
  );
};

const FormikPage = () => {
  return <Taat />;
};

export default FormikPage;

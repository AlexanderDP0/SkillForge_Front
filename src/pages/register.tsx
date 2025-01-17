import * as Yup from "yup";

import { AUTH_KEY, EMAIL_KEY } from "../utils/constants/Storage.Constants";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  buttonClass,
  containerClass,
  div1Class,
  div2Class,
  div3Class,
  errorClass,
  fieldClass,
  formClass,
  headerClass,
  labelClass,
  linkClass,
  sectionClass,
  textClass,
} from "../utils/classname/ClassNames";

import PasswordInput from "../components/passwordinput/PasswordInput";
import api from "../utils/axios/Axios";
import logo from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";

const initialValues = {
  email: localStorage.getItem(EMAIL_KEY) || "",
  password: "",
};

export default function Register() {
  const { t } = useTranslation("register");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const navigate = useNavigate();

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email(t("Needs a email")).required(t("Is required")),
    password: Yup.string()
      .min(8, t("Too short"))
      .max(50, t("Too long"))
      .matches(/[a-z]/, t("Needs a lower character"))
      .matches(/[A-Z]/, t("Needs a uper character"))
      .matches(/\d/, t("Needs a number"))
      .matches(/[@$!%*?&#]/, t("Needs a special character"))
      .required(t("Is required")),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const { ...variables } = values;
      const response = await api.post("/user", {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem(EMAIL_KEY, values.email);
      const data = response.data;
      localStorage.setItem(AUTH_KEY, data);
      window.dispatchEvent(new Event("sessionUpdated"));
      navigate("/");
    } catch (error) {
      setAlertMessage(t("error.conection"));
    }
  };

  return (
    <section className={sectionClass}>
      <div className={div1Class}>
        <div className={div2Class}>
          <div className={div3Class}>
            <div className="flex flex-row">
              <h1 className={headerClass}>Register</h1>
              <img
                src={logo}
                alt="logo"
                className="w-36 h-36 rounded-lg mx-auto"
              />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={SigninSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className={formClass}>
                  <div className={containerClass}>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={fieldClass}
                      placeholder=" "
                      required
                    />
                    {errors.email && touched.email && (
                      <div className={errorClass}>{errors.email}</div>
                    )}
                    <label htmlFor="email" className={labelClass}>
                      Correo
                    </label>
                  </div>
                  <PasswordInput name="password" label="Contraseña" />
                  <button type="submit" className={buttonClass}>
                    Confirmar
                  </button>
                  <p className={textClass}>
                    Ya tienes una cuenta?
                    <Link to="/login" className={linkClass}>
                      Inicia sesión
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
            {alertMessage && <div className="alert">{alertMessage}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

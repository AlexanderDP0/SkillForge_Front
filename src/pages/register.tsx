import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
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
  gridClass,
  headerClass,
  labelClass,
  linkClass,
  sectionClass,
  textClass,
} from "../utils/classname/ClassNames";

import { AUTH_KEY } from "../utils/constants/Storage.Constants";
import PasswordInput from "../components/passwordinput/PasswordInput";
import api from "../utils/axios/Axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation("register");
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState<string>("");

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email(t("errors.email")).required(t("errors.required")),
    password: Yup.string()
      .min(8, t("errors.short"))
      .max(50, t("errors.long"))
      .matches(/[a-z]/, t("errors.lower"))
      .matches(/[A-Z]/, t("errors.uper"))
      .matches(/\d/, t("errors.number"))
      .matches(/[@$!%*?&#]/, t("errors.special"))
      .required(t("errors.required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("errors.confirmPassword"))
      .required(t("errors.required")),
    firstName: Yup.string()
      .min(2, t("errors.short"))
      .max(50, t("errors.long"))
      .required(t("errors.required")),
    lastName: Yup.string()
      .min(2, t("errors.short"))
      .max(50, t("errors.long"))
      .required(t("errors.required")),
  });

  const handleSubmit = async (values: {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    rol: string;
  }) => {
    try {
      const response = await api.post("/users", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        rol: values.rol,
      });

      const data = response.data;
      localStorage.setItem(AUTH_KEY, data.accessToken);
      window.dispatchEvent(new Event("sessionUpdated"));
      navigate("/");
    } catch (error) {
      setAlertMessage(t("error.conection"));
    }
  };

  function handleClick() {
    navigate("/login");
  }

  return (
    <section className={sectionClass}>
      <div className={div1Class}>
        <div className={div2Class}>
          <div className={div3Class}>
            <h1 className={headerClass}>{t("header")}</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                firstName: "",
                lastName: "",
                rol: localStorage.getItem("rol") || "",
              }}
              validationSchema={SignupSchema}
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
                      placeholder=""
                      required
                    />
                    {errors.email && touched.email && (
                      <div className={errorClass}>{errors.email}</div>
                    )}
                    <label htmlFor="email" className={labelClass}>
                      {t("email")}
                    </label>
                  </div>
                  <PasswordInput name="password" label={t("password")} />
                  <PasswordInput
                    name="confirmPassword"
                    label={t("confirmPassword")}
                  />
                  <div className={gridClass}>
                    <div className={containerClass}>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        className={fieldClass}
                        placeholder=" "
                        required
                      />
                      {errors.firstName && touched.firstName && (
                        <div className={errorClass}>{errors.firstName}</div>
                      )}
                      <label htmlFor="firstName" className={labelClass}>
                        {t("firstName")}
                      </label>
                    </div>
                    <div className={containerClass}>
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={fieldClass}
                        placeholder=" "
                        required
                      />
                      {errors.lastName && touched.lastName && (
                        <div className={errorClass}>{errors.lastName}</div>
                      )}
                      <label htmlFor="lastname" className={labelClass}>
                        {t("lastName")}
                      </label>
                    </div>
                  </div>
                  <button type="submit" className={buttonClass}>
                    {t("submit")}
                  </button>
                  <p className={textClass}>
                    {t("alreadyRegistered")}
                    <button onClick={handleClick} className={linkClass}>
                      {t("link")}
                    </button>
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

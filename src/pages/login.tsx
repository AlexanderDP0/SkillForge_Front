import * as Yup from "yup";

import {
  AUTH_KEY,
  EMAIL_KEY,
  REMEMBER_KEY,
} from "../utils/constants/Storage.Constants";
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
  rememberClass,
  sectionClass,
  textClass,
} from "../utils/classname/ClassNames";

import PasswordInput from "../components/passwordinput/PasswordInput";
import api from "../utils/axios/Axios";
import { useTranslation } from "react-i18next";

const initialValues = {
  email: localStorage.getItem(EMAIL_KEY) || "",
  password: "",
  remember: localStorage.getItem(REMEMBER_KEY) === "true",
};

export default function Login() {
  const { t } = useTranslation("login");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const navigate = useNavigate();

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email(t("errors.email")).required(t("errors.required")),
    password: Yup.string()
      .min(8, t("errors.short"))
      .max(50, t("errors.long"))
      .matches(/[a-z]/, t("errors.lower"))
      .matches(/[A-Z]/, t("errors.uper"))
      .matches(/\d/, t("errors.number"))
      .matches(/[@$!%*?&#]/, t("errors.special"))
      .required(t("errors.required")),
    remember: Yup.boolean(),
  });

  const handleSubmit = async (values: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    try {
      const { remember, ...variables } = values;
      const response = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      const data = response.data;
      localStorage.setItem(AUTH_KEY, data);
      window.dispatchEvent(new Event("sessionUpdated"));
      navigate("/");
    } catch (error) {
      setAlertMessage(t("error.conection"));
    }

    if (values.remember) {
      localStorage.setItem(EMAIL_KEY, values.email);
      localStorage.setItem(REMEMBER_KEY, "true");
    } else {
      localStorage.removeItem(EMAIL_KEY);
      localStorage.removeItem(REMEMBER_KEY);
    }
  };

  return (
    <section className={sectionClass}>
      <div className={div1Class}>
        <div className={div2Class}>
          <div className={div3Class}>
            <h1 className={headerClass}>Inicio de Sesión</h1>
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
                  <PasswordInput name="password" label="contraseña" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <Field
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className={rememberClass}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className={textClass}>
                          Recordar
                        </label>
                      </div>
                    </div>
                    <Link to="" className={linkClass}>
                      Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <button type="submit" className={buttonClass}>
                    Confirmar
                  </button>
                  <p className={textClass}>
                    Aun no formas parte de SkillForge?
                    <Link to="/register" className={linkClass}>
                      Registrate
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

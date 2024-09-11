import { Field, useField } from "formik";
import React, { useState } from "react";
import {
  containerClass,
  hide_showClass,
  labelClass,
  passwordClass,
} from "../../utils/classname/ClassNames";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

type PasswordInputProps = {
  label: string;
  name: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  const { label, name } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name);

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={containerClass}>
        <Field
          {...field}
          type={showPassword ? "text" : "password"}
          id={name}
          className={passwordClass}
          placeholder=" "
          required
        />
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
        <button
          type="button"
          onClick={handleVisibility}
          className={hide_showClass}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {meta.touched && meta.error ? (
        <div className="font-medium text-xs text-red-500 mt-1">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default PasswordInput;

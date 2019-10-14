import React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

// {
//   /* <div>
//   <input type="text" {...field} {...props} />
//   {touched[field.name] && errors[field.name] && (
//     <div className="error">{errors[field.name]}</div>
//   )}
// </div>; */
// }

export const InputField: React.SFC<FieldProps<any> & {}> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name];
  return (
    <Form.Item
      style={{ width: "100%" }}
      help={errMsg}
      hasFeedback
      validateStatus={errMsg ? "error" : undefined}
    >
      <Input {...field} {...props} />
    </Form.Item>
  );
};
